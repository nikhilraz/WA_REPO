package com.nra.wa.service;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.nra.wa.models.Book;

@Service
public class PartnerService {

	@Autowired
	private RestTemplate restTemplate;
	
	
	@Value("${partner.url}")
	private String partnerurl;
	
	@Autowired
	private Random rand;

	public List<Book> getBooks(String author,int count) {
		return restTemplate.getForObject(partnerurl+"/"+"Books/"+author+"/"+count, List.class);

	}


	
	public ResponseEntity<String> getTransactionService()  {
		return restTemplate.getForEntity(partnerurl+"/Transaction", String.class);
		
	}

	public ResponseEntity<String> getTransactionHistoryService() {
		return restTemplate.getForEntity(partnerurl+"/TransactionHistory", String.class);
	}
	public ResponseEntity<String> getRegistrationService() {
		return restTemplate.getForEntity(partnerurl+"/Registration", String.class);
	}
	
	
}
