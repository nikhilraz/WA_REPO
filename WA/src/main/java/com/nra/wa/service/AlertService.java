package com.nra.wa.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class AlertService {

	@Value("${threshold.percentage}")
	private double thresholdPercentage;
	public void CountsOfWindow(String API,int successCount, int failureCount, LocalDateTime strtTime, LocalDateTime endTime) {
		double down=(double)failureCount;
		double up=(double)successCount;
		double downPercentage=(double)(down/(up+down))*100.0;
		if(downPercentage>=thresholdPercentage)
			System.out.println(API+" "+strtTime+"   DOWN   "+endTime);
		else
			System.out.println(API+" "+strtTime+"   UP   "+endTime);
		
	}



}
