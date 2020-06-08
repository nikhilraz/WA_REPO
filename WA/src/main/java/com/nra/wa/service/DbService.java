package com.nra.wa.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.nra.wa.ErrorHandler.RestTemplateResponseErrorHandler;
import com.nra.wa.Exception.StockNotAvailableException;
import com.nra.wa.models.Book;


@Service
public class DbService {

	@Autowired
	private RestTemplate restTemplate;
	
	@Autowired
	private PartnerService partnerService;
	

	
	@Value("${db.url}")
	private String dburl;


	public List<Book> getBooks(String author, int count) throws StockNotAvailableException{
		restTemplate.setErrorHandler(new RestTemplateResponseErrorHandler());
		int cnt=restTemplate.getForObject(dburl+"/"+author+"/count", Integer.class);
		System.out.println(cnt);
		if(cnt>=count) {
			return restTemplate.getForObject(dburl+"/"+author+"/"+count, List.class);
		}
		else
		{
			List<Book> stockFromPartner= partnerService.getBooks(author,5);//5 is stock count ,if stock ranover
			String postResponse=restTemplate.postForObject(dburl+"/post",stockFromPartner, String.class);
			throw new StockNotAvailableException("STOCK NOT AVAILABLE,TRY NEXT TIME");
			
		}
	}

	

	
}
