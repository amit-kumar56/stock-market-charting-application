package com.example.demo.Controller;

import com.example.demo.model.Company;
import com.example.demo.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Component
@RestController
@RequestMapping("/company")
public class CompanyController
{
    @Autowired
    private CompanyService companyService;


    @GetMapping("/all")
    public ResponseEntity<List<Company>> getAllCompany () {
        List<Company> company = companyService.getCompanies();
        return new ResponseEntity<>(company, HttpStatus.OK);
    }


    @PostMapping("/add")
    public ResponseEntity<Company> addCompany(@RequestBody Company nCompany) {
        Company newCompany = companyService.addCompany(nCompany);
        return new ResponseEntity<>(newCompany, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Company> updateCompany(@RequestBody Company company) {
        Company updateCompany = companyService.editCompany(company);
        return new ResponseEntity<>(updateCompany, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable("id") String id) {
        companyService.deleteCompany(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}