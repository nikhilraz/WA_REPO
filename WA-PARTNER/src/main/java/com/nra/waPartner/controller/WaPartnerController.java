package com.nra.waPartner.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nra.waPartner.models.Book;
import com.nra.waPartner.service.WaPartnerService;

@RestController
@RequestMapping("/WA-PARTNER/Books")
public class WaPartnerController {
	
	@Autowired
	private WaPartnerService waPartnerService;
	
	@GetMapping("/{author}/{count}")
	public List<Book> getBooks(@PathVariable("author") String author,@PathVariable("count") int count){
		return waPartnerService.getBooks(author,count);
	}
	
	
	
	
	
	

}

