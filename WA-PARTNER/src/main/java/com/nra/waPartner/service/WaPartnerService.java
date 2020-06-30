package com.nra.waPartner.service;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
@Service
public class WaPartnerService {
	

	@Autowired
	private Random rand;


	public ResponseEntity<String> getTransactionService()  {
		int f=rand.nextInt(4);
		if(f==0) {
			return new ResponseEntity<>("SERVER DOWN",HttpStatus.SERVICE_UNAVAILABLE);
		}
		else if(f==1) {
			return new ResponseEntity<>("Not found",HttpStatus.NOT_FOUND);
		}
		else
		{
			return new ResponseEntity<>("Partner Up",HttpStatus.ACCEPTED);
		}
	}
	
	public ResponseEntity<String> getRegistrationService()  {
		int f=rand.nextInt(4);
		if(f==0) {
			return new ResponseEntity<>("SERVER DOWN",HttpStatus.SERVICE_UNAVAILABLE);
		}
		else if(f==1) {
			return new ResponseEntity<>("Not found",HttpStatus.NOT_FOUND);
		}
		else
		{
			return new ResponseEntity<>("Partner Up",HttpStatus.ACCEPTED);
		}
	}
	
	public ResponseEntity<String> getTransactionHistoryService()  {
		int f=rand.nextInt(4);
		if(f==0) {
			return new ResponseEntity<>("SERVER DOWN",HttpStatus.SERVICE_UNAVAILABLE);
		}
		else if(f==1) {
			return new ResponseEntity<>("Not found",HttpStatus.NOT_FOUND);
		}
		else
		{
			return new ResponseEntity<>("Partner Up",HttpStatus.ACCEPTED);
		}
	}
	
	
}
