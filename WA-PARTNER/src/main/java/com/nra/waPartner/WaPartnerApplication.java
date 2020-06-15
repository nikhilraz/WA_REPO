package com.nra.waPartner;

import java.util.Random;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class WaPartnerApplication {

	public static void main(String[] args) {
		SpringApplication.run(WaPartnerApplication.class, args);
	}
	@Bean
	public Random getRandom() {
		return new Random();
	}
}
