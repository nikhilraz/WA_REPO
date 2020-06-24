package com.nra.wa.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nra.wa.service.DbService;
import com.nra.wa.service.PartnerService;

@RestController
@RequestMapping("/WA")
public class WaController {
	
	
	@Autowired
	private DbService dbService;
	
	@Autowired
	private PartnerService partnerService;
	
	
	
	@GetMapping("/Transaction")
	public ResponseEntity<String> getTransactionService() {
	return partnerService.getTransactionService();
	}
	
	@GetMapping("/TransactionHistory")
	public ResponseEntity<String> getTransactionHistoryService() {
	return partnerService.getTransactionHistoryService();
	}
	
	@GetMapping("/Registration")
	public ResponseEntity<String> getRegistrationService() {
	return partnerService.getRegistrationService();
	}
	
	
}
