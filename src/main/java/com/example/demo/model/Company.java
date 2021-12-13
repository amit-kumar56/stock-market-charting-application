package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document
@Component
public class Company
{
    @Id
    private String id;
    private String name;
    private String code;
    private String turnover;
    private String ceo;
    private String boardOfDirectors;
    private String stockExchangeNames;
    private String sectorName;
    private String description;

    @DBRef
    private List<Ipo> ipos = new ArrayList<>();

    @DBRef
    private List<StockPrice> stockPrices = new ArrayList<>();
}