package com.example.ApiGatewayServiceApp.service;
import com.example.ApiGatewayServiceApp.dto.UserDto;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
public interface UserService extends UserDetailsService
{
    public UserDetails loadUserByUsername(String username);
    public UserDto signup(UserDto userDto);
    public UserDto activate(String token);
    public UserDto update(UserDto userDto);
}