package com.example.Amit.service;

import com.example.Amit.model.Company;
import com.example.Amit.model.Sector;
import com.example.Amit.repository.SectorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SectorServiceImpl implements SectorService
{
    @Autowired
    private SectorRepository sectorRepository;

    @Override
    public Sector save(Sector sectorDto)
    {

        return sectorRepository.save(sectorDto);

    }

    @Override
    public List<Sector> findAll()
    {
        return sectorRepository.findAll();
    }

    @Override
    public Optional<Sector> findById(String id)
    {
        return sectorRepository.findById(id);

    }

    @Override
    public void deleteById(String id) {
        sectorRepository.deleteById(id);
    }
/*
    @Override
    public List<Company> getCompanies(String id)
    {
        Optional<Sector> sector = sectorRepository.findById(id);
        if(!sector.isPresent())
            return null;
       return sector;
    }

    /* Feign Client Service */
    /*
    @Override
    public SectorDto addCompanyToSector(String sectorName, CompanyDto companyDto)
    {
        Sector sector = sectorRepository.findByName(sectorName);
        if(sector == null)
            return null;
        sector.getCompanies().add(companyMapper.toCompany(companyDto));
        sector = sectorRepository.save(sector);
        return sectorMapper.toSectorDto(sector);
    }
    */
}