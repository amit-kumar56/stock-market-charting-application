package com.example.ApiGatewayServiceApp.service;

import java.util.Arrays;
import java.util.UUID;

import com.example.ApiGatewayServiceApp.dto.UserDto;
import com.example.ApiGatewayServiceApp.mapper.UserMapper;
import com.example.ApiGatewayServiceApp.model.User;
import com.example.ApiGatewayServiceApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService
{
    @Autowired
    private UserRepository userRepository;

    //@Autowired
    //private PasswordEncoder passwordEncoder;

    @Autowired
    private UserMapper userMapper;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException
    {
        User user = userRepository.findByUsername(username);
        if(user == null || !user.isConfirmed())
            return null;
        return new org.springframework.security.core.userdetails.User(
                user.getUsername(),
                user.getPassword(),
                Arrays.asList(new SimpleGrantedAuthority(user.getRole())));
    }

    @Override
    public UserDto signup(UserDto userDto)
    {
        if(userRepository.findByUsernameOrEmail(userDto.getUsername(), userDto.getEmail())!=null)
            return null;
        //userDto.setPassword(passwordEncoder.encode(userDto.getPassword()));
        userDto.setRole("USER");
        userDto.setConfirmationToken(UUID.randomUUID().toString());
        userDto.setConfirmed(false);
        User user = userRepository.save(userMapper.toUser(userDto));
        return userMapper.toUserDto(user);
    }

    @Override
    public UserDto activate(String token)
    {
        User user = userRepository.findByConfirmationToken(token);
        if(user == null)
            return null;
        user.setConfirmed(true);
        user.setConfirmationToken(null);
        user = userRepository.save(user);
        return userMapper.toUserDto(user);
    }

    @Override
    public UserDto update(UserDto userDto)
    {
        if(!userRepository.findById(userDto.getId()).isPresent())
            return null;
        User user = userRepository.save(userMapper.toUser(userDto));
        return userMapper.toUserDto(user);
    }

}