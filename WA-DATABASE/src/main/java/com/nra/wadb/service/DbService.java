package com.nra.wadb.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nra.wadb.models.DbInfo;
import com.nra.wadb.repository.DbRepository;

@Service
public class DbService {

	@Autowired
	private DbRepository dbrepository;

	public Optional<DbInfo> getDbInfo(String dbId) {
		return dbrepository.findById(dbId);
	}

	public void addDbInfo(DbInfo dbInfo) {
		dbrepository.save(dbInfo);
		
	}

	public List<DbInfo> getAllDbInfo() {
		return dbrepository.findAll();
	}
	
	
}
