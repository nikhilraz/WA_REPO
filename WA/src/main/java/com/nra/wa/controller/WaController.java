package com.nra.wa.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nra.wa.models.Book;
import com.nra.wa.service.DbService;

@RestController
@RequestMapping("/WA/Books")
public class WaController {
	
	@Autowired
	private DbService dbService;
	
	@GetMapping("/{author}/{count}")
	public ResponseEntity<List<Book>> getBooks(@PathVariable("author") String author,@PathVariable("count") int count){
		HttpHeaders header=new HttpHeaders();
		header.add("book", "recieved");
		return new ResponseEntity<>(dbService.getBooks(author,count),header,HttpStatus.ACCEPTED);
	}	
}
