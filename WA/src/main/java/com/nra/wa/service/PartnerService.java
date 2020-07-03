package com.nra.wa.service;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;

@Service
public class PartnerService {

	@Autowired
	private RestTemplate restTemplate;
	
	
	@Value("${partner.url}")
	private String partnerurl;
	
	@Autowired
	private Random rand;


	@HystrixCommand(fallbackMethod ="getFallbackTransactionService")
	public ResponseEntity<String> getTransactionService()  {
		return restTemplate.getForEntity(partnerurl+"/Transaction", String.class);
		
	}
	@HystrixCommand(fallbackMethod ="getFallbackTransactionHistoryService")
	public ResponseEntity<String> getTransactionHistoryService() {
		return restTemplate.getForEntity(partnerurl+"/TransactionHistory", String.class);
	}
	
	@HystrixCommand(fallbackMethod ="getFallbackRegistrationService")
	public ResponseEntity<String> getRegistrationService() {
		return restTemplate.getForEntity(partnerurl+"/Registration", String.class);
	}
	public ResponseEntity<String> getFallbackTransactionService() {
		return new ResponseEntity<>("SERVER WENT DOWN",HttpStatus.SERVICE_UNAVAILABLE);
	}
	
	public ResponseEntity<String> getFallbackTransactionHistoryService() {
		return new ResponseEntity<>("SERVER WENT DOWN",HttpStatus.SERVICE_UNAVAILABLE);
	}
	
	public ResponseEntity<String> getFallbackRegistrationService() {
		return new ResponseEntity<>("SERVER WENT DOWN",HttpStatus.SERVICE_UNAVAILABLE);
	}
	
	
	
	
}
