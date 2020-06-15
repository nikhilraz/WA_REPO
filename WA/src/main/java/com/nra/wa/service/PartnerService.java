package com.nra.wa.service;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.nra.wa.Exception.PartnerDownException;
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


	
	public ResponseEntity<String> getPartnerService() throws PartnerDownException {
		return restTemplate.getForEntity(partnerurl+"/payment", String.class);
		
	}
	
	
}
