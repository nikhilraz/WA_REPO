package com.nra.AdminServer.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nra.AdminServer.models.Threshold;
import com.nra.AdminServer.repository.Repo;

@Service
public class DbService {
	
	@Autowired
	private Repo repo;
	

	public void insertThreshold(String transactionApiThreshold, String transactionHistoryApiThreshold,
			String registrationApiThreshold) {
		repo.save(new Threshold(Double.parseDouble(transactionApiThreshold),Double.parseDouble(transactionHistoryApiThreshold),Double.parseDouble(registrationApiThreshold)));
	}

	
}
