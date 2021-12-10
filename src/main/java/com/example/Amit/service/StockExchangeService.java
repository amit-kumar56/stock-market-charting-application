package com.example.Amit.service;

import com.example.Amit.dto.CompanyDto;
import com.example.Amit.dto.StockExchangeDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface StockExchangeService
{
    public List<StockExchangeDto> getStockExchangesList();
    public StockExchangeDto findById(String id);
    public StockExchangeDto addStockExchange(StockExchangeDto stockExchangeDto);
    public StockExchangeDto editStockExchange(StockExchangeDto stockExchangeDto);
    public void deleteStockExchange(String id);
    public List<CompanyDto> getCompanies(String id);
    public StockExchangeDto addCompanyToStockExchange(String stockExchangeName, CompanyDto companyDto);
}