package com.example.demo.service;

import com.example.demo.dto.IpoDto;
import com.example.demo.model.Company;
import com.example.demo.model.Ipo;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface IpoService {
    public List<IpoDto> findAll();
    public IpoDto findById(String id);
    public IpoDto save(IpoDto ipoDto);
    public IpoDto update(IpoDto ipoDto);
    public void deleteById(String id);
}
