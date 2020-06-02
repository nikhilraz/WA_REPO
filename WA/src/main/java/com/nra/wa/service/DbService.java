package com.nra.wa.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.nra.wa.models.DbInfo;

@Service
public class DbService {

	@Autowired
	private RestTemplate restTemplate;
	
	
	@Value("${db.url}")
	private String dburl;
	
	public DbInfo getDbInfo( String dbId) {
		DbInfo dbInfo=restTemplate.getForObject(dburl+"/"+dbId,DbInfo.class);
		return dbInfo;
	}

	
}
