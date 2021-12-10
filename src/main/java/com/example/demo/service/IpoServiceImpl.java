package com.example.demo.service;

import com.example.demo.Repository.IpoRepository;
import com.example.demo.model.Ipo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Component
@Service
public class IpoServiceImpl implements IpoService{
    @Autowired
    private IpoRepository ipoRepository;

    @Override
    public List<Ipo> findAll() {
        return ipoRepository.findAll();
    }

    @Override
    public Optional<Ipo> findById(String id) {
        return ipoRepository.findById(id);
    }

    @Override
    public Ipo save(Ipo ipoDto) {
        return ipoRepository.save(ipoDto);
    }

    @Override
    public Ipo update(Ipo ipoDto) {
        return ipoRepository.save(ipoDto);
    }

    @Override
    public void deleteById(String id) {
      ipoRepository.deleteById(id);
    }
}
