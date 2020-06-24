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
	
	
	
<<<<<<< HEAD
	@GetMapping("/Transaction")
	public ResponseEntity<String> getTransactionService() {
	return partnerService.getTransactionService();
	}
	
	@GetMapping("/TransactionHistory")
	public ResponseEntity<String> getTransactionHistoryService() {
	return partnerService.getTransactionHistoryService();
	}
	
=======
	@GetMapping("/orders/Books/{author}/{count}")
	public ResponseEntity<List<Book>> getBooks(@PathVariable("author") String author,@PathVariable("count") int count){
		return new ResponseEntity<>(dbService.getBooks(author,count),HttpStatus.ACCEPTED);
	}	
	
	@GetMapping("/Transaction")
	public ResponseEntity<String> getPartnerService() {
	return partnerService.getTransactionService();
	}
	
	@GetMapping("/TransactionHistory")
	public ResponseEntity<String> getTransactionHistoryService() {
	return partnerService.getTransactionHistoryService();
	}
	
>>>>>>> d216c75b77bcfff504d19f49fb986700bdd8092f
	@GetMapping("/Registration")
	public ResponseEntity<String> getRegistrationService() {
	return partnerService.getRegistrationService();
	}
	
	
}
