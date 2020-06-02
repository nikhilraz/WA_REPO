package com.nra.wa.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class PartnerService {

	@Autowired
	private RestTemplate restTemplate;
	
	
	@Value("${partner.url}")
	private String partnerUrl;


	public String getFromPartner() {
		return restTemplate.getForObject(partnerUrl, String.class);
	}
	
	
}
