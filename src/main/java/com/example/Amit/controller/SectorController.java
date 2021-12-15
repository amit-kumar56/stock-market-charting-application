package com.example.Amit.controller;

import java.util.List;
import java.util.Optional;

import com.example.Amit.exception.SectorNotFoundException;
import com.example.Amit.model.Company;
import com.example.Amit.model.Sector;
import com.example.Amit.service.SectorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins= "*")
@RequestMapping("/sectors")
public class SectorController
{
    @Autowired
    private SectorService sectorService;

    @GetMapping(path = "")
    public ResponseEntity<List<Sector>> findAll() {
        List<Sector> company = sectorService.findAll();
        return new ResponseEntity<>(company, HttpStatus.OK);
    }


    @GetMapping(path = "/{id}")
    public ResponseEntity<Sector> findById(@PathVariable String id) throws SectorNotFoundException
    {
        Optional<Sector> sectorDto = sectorService.findById(id);
        if(sectorDto == null) {
            throw new SectorNotFoundException("Sector not found for id : " + id);
        }
        return ResponseEntity.ok(sectorDto.get());
    }

    @PostMapping(path = "")
    public ResponseEntity<Sector> save(@RequestBody Sector sectorDto) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(sectorService.save(sectorDto));
    }

    @PutMapping(path = "")
    public ResponseEntity<Sector> update(@RequestBody Sector sectorDto) throws SectorNotFoundException
    {
        Sector updatedSectorDto = sectorService.save(sectorDto);
        if(updatedSectorDto == null) {
            throw new SectorNotFoundException("Sector not found for id : " + sectorDto.getId());
        }
        return ResponseEntity.ok(updatedSectorDto);
    }

    @DeleteMapping(path = "/{id}")
    public void deleteById(@PathVariable String id) {
        sectorService.deleteById(id);
    }

    /*
    @GetMapping(path = "/{id}/companies")
    public ResponseEntity<List<Company>> getCompanies(@PathVariable String id) throws SectorNotFoundException
    {
        List<Company> companyDtos = sectorService.getCompanies(id);
        if(companyDtos == null) {
            throw new SectorNotFoundException("Sector not found for id : " + id);
        }
        return ResponseEntity.ok(companyDtos);
    }
    */
    /* Feign Client Mapping */
 /*
    @PostMapping(path = "/{sectorName}/companies")
    public void addCompanyToSector(@PathVariable String sectorName, @RequestBody CompanyDto companyDto)
            throws SectorNotFoundException
    {
        SectorDto sectorDto = sectorService.addCompanyToSector(sectorName, companyDto);
        if(sectorDto == null) {
            throw new SectorNotFoundException("Sector not found with name : " + sectorName);
        }
    }
    */

}