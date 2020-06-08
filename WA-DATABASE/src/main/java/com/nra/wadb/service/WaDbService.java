package com.nra.wadb.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nra.wadb.models.Book;
import com.nra.wadb.repository.WaDbRepo;

@Service
public class WaDbService {

	@Autowired
	private WaDbRepo waDbRepo;

	public List<Book> getBooks(String author,int count) {
		List<Book> books=waDbRepo.findTopCountByAuthorOrderByTitle(author,count);
		waDbRepo.deleteTopCountByAuthorOrderByTitle(author,count);
		return books;

	}

	public int getCount(String author) {
		return waDbRepo.CountByAuthor(author);
	}

	public void postBooks(List<Book> books) {
		waDbRepo.saveAll(books);
		
	}
}
