package com.example.demo.service;

import com.example.demo.Repository.CompanyRepository;
import com.example.demo.model.Company;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Component
@Service
public class CompanyServiceImpl implements CompanyService{
    @Autowired
    private CompanyRepository companyRepository;

    @Override
    public List<Company> getCompanies() {
        return companyRepository.findAll();
    }

    @Override
    public Optional<Company> findById(String id) {
        return companyRepository.findById(id);
    }

    @Override
    public Company addCompany(Company company) {
        return companyRepository.save(company);
    }

    @Override
    public Company editCompany(Company company) {
        return companyRepository.save(company);
    }

    @Override
    public void deleteCompany(String id) {
      companyRepository.deleteById(id);
    }
}
