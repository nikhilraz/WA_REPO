package com.nra.waPartner.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nra.waPartner.models.Book;
import com.nra.waPartner.repository.WaPartnerRepo;
@Service
public class WaPartnerService {
	
	@Autowired
	private WaPartnerRepo waPartnerRepo;

	public List<Book> getBooks(String author,int count) {
		List<Book> books=waPartnerRepo.findTopCountByAuthorOrderByTitle(author,count);
		waPartnerRepo.deleteTopCountByAuthorOrderByTitle(author,count);
		return books;

	}
}
