package com.nra.wa.service;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
	
	@Autowired
	private Random rand;

	public ResponseEntity<String> getOrderService() {
		int f=rand.nextInt(4);
		if(f==0) {
			return new ResponseEntity<>("Order Service not available!",HttpStatus.SERVICE_UNAVAILABLE);
		}
		else
		{
			return new ResponseEntity<>("Post Your order",HttpStatus.OK);
		}
	}

}
