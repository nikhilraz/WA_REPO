package com.nra.wa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.nra.wa.models.DbInfo;

@RestController
@RequestMapping("/db")
public class WaController {
	
	@Autowired
	private RestTemplate restTemplate;
	
	@Value("${db.url}")
	private String url;
	
	@GetMapping("/{dbId}")
	public DbInfo getDbInfo(@PathVariable("dbId") String dbId) {
		DbInfo dbInfo=restTemplate.getForObject(url+"/"+dbId,DbInfo.class);
		return dbInfo;
	}
}
