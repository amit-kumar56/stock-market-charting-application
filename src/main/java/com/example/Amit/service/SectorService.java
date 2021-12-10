package com.example.Amit.service;

import com.example.Amit.model.Company;
import com.example.Amit.model.Sector;

import java.util.List;
import java.util.Optional;

public interface SectorService
{
    public Sector save(Sector sector);
    public List<Sector> findAll() ;
    public Optional<Sector> findById(String id);
    public void deleteById(String id);
    //public List<Company> getCompanies(String id);
    //public Sector addCompanyToSector(String sectorName, Company companyDto);
}