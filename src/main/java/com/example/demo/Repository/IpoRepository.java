package com.example.demo.Repository;

import com.example.demo.model.Ipo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IpoRepository extends MongoRepository<Ipo, String>
{

    public void deleteById(String id);
}