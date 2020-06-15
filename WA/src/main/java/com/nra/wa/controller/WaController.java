package com.nra.wa.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nra.wa.models.Book;
import com.nra.wa.service.AlertService;
import com.nra.wa.service.DbService;
import com.nra.wa.service.OrderService;
import com.nra.wa.service.PartnerService;

@RestController
@RequestMapping("/WA")
public class WaController {
	
	@Autowired
	private OrderService orderService;
	
	@Autowired
	private DbService dbService;
	
	@Autowired
	private PartnerService partnerService;
	@Autowired
	private AlertService alertService;
	
	@GetMapping("/orders")
	public ResponseEntity<String> getOrderService(){
		return orderService.getOrderService();
	}
	
	
	@GetMapping("/orders/Books/{author}/{count}")
	public ResponseEntity<List<Book>> getBooks(@PathVariable("author") String author,@PathVariable("count") int count){
		return new ResponseEntity<>(dbService.getBooks(author,count),HttpStatus.ACCEPTED);
	}	
	@GetMapping("/getAlert")
	public String getAlert() {
		return alertService.getAlert();
		
	}
	
	@GetMapping("/payment")
	public ResponseEntity<String> getPartnerService() {
		return partnerService.getPartnerService();
	}
	
	
}
