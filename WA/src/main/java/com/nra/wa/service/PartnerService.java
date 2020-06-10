package com.nra.wa.service;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.nra.wa.models.Book;
import com.nra.wa.service.Exception.PartnerDownException;

@Service
public class PartnerService {

	@Autowired
	private RestTemplate restTemplate;
	
	
	@Value("${partner.url}")
	private String partnerurl;
	
	@Autowired
	private Random rand;

	public List<Book> getBooks(String author,int count) {
		return restTemplate.getForObject(partnerurl+"/"+author+"/"+count, List.class);

	}


	
	public ResponseEntity<String> isUpOrDown() throws PartnerDownException {
		int f=rand.nextInt(4);
		if(f==0||f==1|f==2) {
			throw new PartnerDownException("Partner is down,try again later");
		}
		else
		{
			return new ResponseEntity<>("Partner Up",HttpStatus.OK);
		}
	}
	
	
}
