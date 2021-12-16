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
public class CompanyDto
{
    private String id;
    private String name;
    private String code;
    private String turnover;
    private String ceo;
    private String boardOfDirectors;
    private String stockExchangeNames;
    private String sectorName;
    private String description;
}