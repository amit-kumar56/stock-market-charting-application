package com.example.demo.service;

import com.example.demo.model.Ipo;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface IpoService {
    public List<Ipo> findAll();
    public Optional<Ipo> findById(String id);
    public Ipo save(Ipo ipoDto);
    public Ipo update(Ipo ipoDto);
    public void deleteById(String id);
}
