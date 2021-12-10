package com.example.Amit.repository;

import java.util.List;

import com.example.Amit.model.StockPrice;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StockPriceRepository extends MongoRepository<StockPrice, String>
{
    public List<StockPrice> findByCompanyCodeAndStockExchangeName(String companyCode, String stockExchangeName);
}