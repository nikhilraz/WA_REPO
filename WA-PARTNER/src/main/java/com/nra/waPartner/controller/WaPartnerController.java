package com.nra.waPartner.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nra.waPartner.models.Book;
import com.nra.waPartner.service.WaPartnerService;

@RestController
@RequestMapping("/WA-PARTNER")
public class WaPartnerController {
	
	@Autowired
	private WaPartnerService waPartnerService;
	
	@GetMapping("/Books/{author}/{count}")
	public List<Book> getBooks(@PathVariable("author") String author,@PathVariable("count") int count){
		return waPartnerService.getBooks(author,count);
	}
	
	@GetMapping("/payment")
	public ResponseEntity<String> getPartnerService(){
		return waPartnerService.getPartnerService();
	}
	
	
	
	
	
	
	

}

