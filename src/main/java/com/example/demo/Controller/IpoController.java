package com.example.demo.Controller;

import com.example.demo.dto.IpoDto;
import com.example.demo.exceptions.CompanyNotFoundException;
import com.example.demo.exceptions.IpoNotFoundException;
import com.example.demo.model.Ipo;
import com.example.demo.service.IpoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins= "*")

@RequestMapping("/ipo")
public class IpoController {
    @Autowired
    private IpoService ipoService;

    @GetMapping(path = "")
    public ResponseEntity<List<IpoDto>> findAll() {
        return ResponseEntity.ok(ipoService.findAll());
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<IpoDto> findById(@PathVariable String id)throws IpoNotFoundException
    {
        IpoDto ipoDto = ipoService.findById(id);
        if(ipoDto == null) {
            throw new IpoNotFoundException("Ipo not found for id : " + id);
        }
        return ResponseEntity.ok(ipoDto);
    }

    @PostMapping(path = "")
    public ResponseEntity<IpoDto> save(@RequestBody IpoDto ipoDto)throws CompanyNotFoundException
    {
        IpoDto addedIpoDto = ipoService.save(ipoDto);
        if(addedIpoDto == null) {
            throw new CompanyNotFoundException("Company not found with name : " + ipoDto.getCompanyName());
        }
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(addedIpoDto);
    }

    @PutMapping(path = "")
    public ResponseEntity<IpoDto> update(@RequestBody IpoDto ipoDto)
            throws IpoNotFoundException
    {
        IpoDto updatedIpoDto = ipoService.update(ipoDto);
        if(updatedIpoDto == null) {
            throw new IpoNotFoundException("Ipo not found for id : " + ipoDto.getId());
        }
        return ResponseEntity.ok(updatedIpoDto);
    }

    @DeleteMapping(path = "/{id}")
    public void deleteById(@PathVariable String id) {
        ipoService.deleteById(id);
    }
}
