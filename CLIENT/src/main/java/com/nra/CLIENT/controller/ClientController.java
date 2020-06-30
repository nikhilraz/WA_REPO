package com.nra.CLIENT.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;


@RestController
@RequestMapping("/health")
public class ClientController {

	@Autowired
	private RestTemplate restTemplate;
	
	@Value("${svcDowntimeUrl}")
	private String svcDowntimeUrl;
	
	@GetMapping("/TransactionApi")
	public ResponseEntity<List> checkHealthTransactionApi() {
		return restTemplate.getForEntity(svcDowntimeUrl+"/TransactionApi", List.class);
	}
	@GetMapping("/TransactionHistoryApi")
	public ResponseEntity<List> checkHealthTransactionHistory() {
		return restTemplate.getForEntity(svcDowntimeUrl+"/TransactionHistoryApi", List.class);
	}
	@GetMapping("/RegistrationApi")
	public ResponseEntity<List> checkHealthRegistrationApi() {
		return restTemplate.getForEntity(svcDowntimeUrl+"/RegistrationApi", List.class);
	}
}
