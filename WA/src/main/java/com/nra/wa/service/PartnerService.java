package com.nra.wa.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.nra.wa.models.Book;

@Service
public class PartnerService {

	@Autowired
	private RestTemplate restTemplate;
	
	
	@Value("${partner.url}")
	private String partnerurl;


	public List<Book> getBooks(String author,int count) {
		return restTemplate.getForObject(partnerurl+"/"+author+"/"+count, List.class);

	}
	
	
}
