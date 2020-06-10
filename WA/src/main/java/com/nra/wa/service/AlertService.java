package com.nra.wa.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nra.wa.repository.MetricRepo;

@Service
public class AlertService {

	@Autowired
	private MetricRepo metricRepo;
	public String getAlert() {
		int downCount=metricRepo.findTop10OrderById();
		if(downCount>5) {
			return "SERVER DOWN ,Try alternate mode of payment!";
		}
		else {
			return "SERVER UP,YOU CAN INITIATE!";
		}
	}

}
