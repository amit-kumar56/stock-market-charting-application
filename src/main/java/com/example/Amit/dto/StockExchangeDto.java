package com.example.Amit.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document
public class StockExchangeDto
{
    private String id;
    private String name;
    private String description;
    private String address;
    private String remarks;
}