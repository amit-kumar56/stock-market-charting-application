package com.example.ApiGatewayServiceApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class ApiGatewayServiceAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiGatewayServiceAppApplication.class, args);
	}

}
