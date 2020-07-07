package com.nra.DowntimeServer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nra.DowntimeServer.models.Threshold;
import com.nra.DowntimeServer.repository.Repo;

@Service
public class DbService {

	@Autowired
	private Repo repo;
	
	public Threshold getThresholds() {
		
		return repo.findOrderById();
	}
	
	
	
	
	

}
