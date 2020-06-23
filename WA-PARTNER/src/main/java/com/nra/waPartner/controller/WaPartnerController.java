package com.nra.waPartner.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nra.waPartner.service.WaPartnerService;

@RestController
@RequestMapping("/WA-PARTNER")
public class WaPartnerController {
	
	@Autowired
	private WaPartnerService waPartnerService;
	

	
	@GetMapping("/Transaction")
	public ResponseEntity<String> getTransactionService(){
		return waPartnerService.getTransactionService();
	}
	
	
	@GetMapping("/TransactionHistory")
	public ResponseEntity<String> getTransactionHistory(){
		return waPartnerService.getTransactionHistoryService();
	}
	
	@GetMapping("/Registration")
	public ResponseEntity<String> getRegistration(){
		return waPartnerService.getRegistrationService();
	}
	
	
	
	
	
	

}

