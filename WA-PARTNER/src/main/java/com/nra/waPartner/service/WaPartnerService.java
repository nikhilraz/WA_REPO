package com.nra.waPartner.service;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.nra.waPartner.models.Book;
import com.nra.waPartner.repository.WaPartnerRepo;
@Service
public class WaPartnerService {
	
	@Autowired
	private WaPartnerRepo waPartnerRepo;
	@Autowired
	private Random rand;

	public List<Book> getBooks(String author,int count) {
		List<Book> books=waPartnerRepo.findTopCountByAuthorOrderByTitle(author,count);
		//waPartnerRepo.deleteTopCountByAuthorOrderByTitle(author,count);
		return books;

	}

	public ResponseEntity<String> getPartnerService()  {
		System.out.println("in partner");
		int f=rand.nextInt(4);
		if(f==0) {
			return new ResponseEntity<>("SERVER DOWN",HttpStatus.INTERNAL_SERVER_ERROR);
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
