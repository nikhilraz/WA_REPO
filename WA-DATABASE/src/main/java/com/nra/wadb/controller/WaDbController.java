package com.nra.wadb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nra.wadb.models.Book;
import com.nra.wadb.service.WaDbService;

@RestController
@RequestMapping("/WA-DB/Books")
public class WaDbController {
	
	@Autowired
	private WaDbService waDbService;
	
	@GetMapping("/{author}/{count}")
	public List<Book> getBooks(@PathVariable("author") String author,@PathVariable("count") int count){
		return waDbService.getBooks(author,count);
	}
	
	@GetMapping("/{author}/count")
	public int getCount(@PathVariable("author") String author) {
		return waDbService.getCount(author);
	}
	
	@PostMapping("/post")
	public String postBooks(@RequestBody List<Book> books) {
		waDbService.postBooks(books);
		return "posted Successfully!";
	}
	
	
	
	
	

}
