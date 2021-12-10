package com.example.Amit.feignclient;

import java.util.List;

import com.example.Amit.dto.CompanyDto;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "stock-price-service")
@Service
public interface SectorClient
{
    @GetMapping("/sectors/{sectorName}/companies")
    public List<CompanyDto> getSectorCompanies(@PathVariable String sectorName);
}