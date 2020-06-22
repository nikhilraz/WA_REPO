package com.nra.wa.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.nra.wa.repository.MetricRepo;

@Service
public class AlertService {

	@Value("${threshold.percentage}")
	private double thresholdPercentage;
	public void CountsOfWindow(int successCount, int failureCount, LocalDateTime strtTime, LocalDateTime endTime) {
		double down=(double)failureCount;
		double up=(double)successCount;
		double downPercentage=(double)(down/(up+down))*100.0;
		if(downPercentage>=thresholdPercentage)
			System.out.println(strtTime+"   DOWN   "+endTime);
		else
			System.out.println(strtTime+"   UP   "+endTime);
		
	}

	public String getAlert() {
		// TODO Auto-generated method stub
		return null;
	}

}
