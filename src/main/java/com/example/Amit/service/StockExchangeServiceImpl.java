package com.example.Amit.service;

import java.util.List;
import java.util.Optional;

import com.example.Amit.dto.CompanyDto;
import com.example.Amit.dto.StockExchangeDto;
import com.example.Amit.mapper.CompanyMapper;
import com.example.Amit.mapper.StockExchangeMapper;
import com.example.Amit.model.StockExchange;
import com.example.Amit.repository.StockExchangeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StockExchangeServiceImpl implements StockExchangeService
{
    @Autowired
    private StockExchangeRepository stockExchangeRepository;

    @Autowired
    private StockExchangeMapper stockExchangeMapper;

    @Autowired
    private CompanyMapper companyMapper;

    @Override
    public List<StockExchangeDto> getStockExchangesList()
    {
        List<StockExchange> stockExchanges = stockExchangeRepository.findAll();
        return stockExchangeMapper.toStockExchangeDtos(stockExchanges);
    }

    @Override
    public StockExchangeDto findById(String id)
    {
        Optional<StockExchange> stockExchange = stockExchangeRepository.findById(id);
        if(!stockExchange.isPresent())
            return null;
        return stockExchangeMapper.toStockExchangeDto(stockExchange.get());
    }

    @Override
    public StockExchangeDto addStockExchange(StockExchangeDto stockExchangeDto)
    {
        StockExchange stockExchange = stockExchangeMapper.toStockExchange(stockExchangeDto);
        stockExchange = stockExchangeRepository.save(stockExchange);
        return stockExchangeMapper.toStockExchangeDto(stockExchange);
    }

    @Override
    public StockExchangeDto editStockExchange(StockExchangeDto stockExchangeDto)
    {
        if(findById(stockExchangeDto.getId()) == null)
            return null;
        StockExchange stockExchange = stockExchangeMapper.toStockExchange(stockExchangeDto);
        stockExchange = stockExchangeRepository.save(stockExchange);
        return stockExchangeMapper.toStockExchangeDto(stockExchange);
    }

    @Override
    public void deleteStockExchange(String id) {
        stockExchangeRepository.deleteById(id);
    }

    @Override
    public List<CompanyDto> getCompanies(String id)
    {
        Optional<StockExchange> stockExchange = stockExchangeRepository.findById(id);
        if(!stockExchange.isPresent())
            return null;
        return companyMapper.toCompanyDtos(stockExchange.get().getCompanies());
    }

    /* Feign Client Service */

    @Override
    public StockExchangeDto addCompanyToStockExchange(String stockExchangeName, CompanyDto companyDto)
    {
        StockExchange stockExchange = stockExchangeRepository.findByName(stockExchangeName);
        if(stockExchange == null)
            return null;
        stockExchange.getCompanies().add(companyMapper.toCompany(companyDto));
        stockExchange = stockExchangeRepository.save(stockExchange);
        return stockExchangeMapper.toStockExchangeDto(stockExchange);
    }
}