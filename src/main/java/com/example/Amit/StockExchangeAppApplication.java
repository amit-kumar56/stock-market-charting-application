package com.example.Amit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class StockExchangeAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(StockExchangeAppApplication.class, args);
	}

}
