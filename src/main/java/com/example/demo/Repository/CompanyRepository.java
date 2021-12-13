package com.example.demo.Repository;

import com.example.demo.model.Company;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@Component
public interface CompanyRepository extends MongoRepository<Company, String>
{
    public Optional<Company> findById(String id);
    public List<Company> findByNameIgnoreCaseContaining(String pattern);
    public Company findByName(String name);
    public Company findByCode(String code);
}