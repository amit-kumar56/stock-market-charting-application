package com.example.demo.service;

import com.example.demo.dto.CompanyDto;
import com.example.demo.dto.IpoDto;
import com.example.demo.dto.StockPriceDto;
import com.example.demo.model.Company;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface CompanyService {
    public List<CompanyDto> getCompanies();
    public CompanyDto findById(String id);
    public List<CompanyDto> getMatchingCompanies(String pattern);
    public CompanyDto addCompany(CompanyDto companyDto);
    public CompanyDto editCompany(CompanyDto companyDto);
    public void deleteCompany(String id);
    public CompanyDto addIpoToCompany(String companyName, IpoDto ipoDto);
    public List<IpoDto> getCompanyIpoDetails(String id);
    public CompanyDto addStockPriceToCompany(String companyCode, StockPriceDto stockPriceDto);
    public List<StockPriceDto> getStockPrices(String companyName);
}
