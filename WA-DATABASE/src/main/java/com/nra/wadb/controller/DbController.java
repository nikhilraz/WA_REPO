package com.nra.wadb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nra.wadb.models.DbInfo;
import com.nra.wadb.service.DbService;

@RestController
@RequestMapping("/database")
public class DbController {
	
	
	@Autowired
	private DbService dbService;
	
	@GetMapping("/{dbId}")
	public DbInfo getDbInfo(@PathVariable("dbId") String dbId) {
		return dbService.getDbInfo(dbId).get();
	}
	
	@GetMapping("")
	public List<DbInfo> getAllDbInfo() {
		return dbService.getAllDbInfo();
	}
	@PostMapping("/add")
	public void addDbInfo(@RequestBody DbInfo dbInfo ) {
		dbService.addDbInfo(dbInfo);
	}

}
