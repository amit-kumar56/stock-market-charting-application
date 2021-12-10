package com.example.Amit.service;

import com.example.Amit.dto.CompanyCompareRequest;
import com.example.Amit.dto.SectorCompareRequest;
import com.example.Amit.dto.StockPriceDto;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.List;
@Service
@EnableFeignClients
public interface StockPriceService
{
    public List<StockPriceDto> findAll();
    public StockPriceDto findById(String id);
    public void deleteById(String id);
    public List<StockPriceDto> save(List<StockPriceDto> stockPriceDtos);
    public StockPriceDto update(StockPriceDto stockPriceDto);
    public List<StockPriceDto> getStockPricesForCompanyComparison(CompanyCompareRequest compareRequest)throws ParseException;
    public List<StockPriceDto> getStockPricesForSectorComparison(SectorCompareRequest compareRequest)throws ParseException;
}