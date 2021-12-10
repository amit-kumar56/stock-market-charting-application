package com.example.demo.service;

import com.example.demo.model.Company;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface CompanyService {
    public List<Company> getCompanies();
    public Optional<Company> findById(String id);
    //public List<Company> getMatchingCompanies(String pattern);
    public Company addCompany(Company company);
    public Company editCompany(Company company);
    public void deleteCompany(String id);
    //public CompanyDto addIpoToCompany(String companyName, IpoDto ipoDto);
    //public List<IpoDto> getCompanyIpoDetails(String id);
    //public CompanyDto addStockPriceToCompany(String companyCode, StockPriceDto stockPriceDto);
    //public List<StockPriceDto> getStockPrices(String companyName);
}
