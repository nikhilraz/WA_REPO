package com.nra.DowntimeServer.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.nra.DowntimeServer.models.Threshold;
import com.nra.DowntimeServer.services.DbService;

@Service
public class AlertService {
	
	@Autowired
	private DbService dbService;

	private List<String>transactionHealth; 
	private List<String>registrationHealth; 
	private List<String>transactionHistoryHealth; 
	
	private double transactionApiThreshold;
	private double transactionHistoryApiThreshold;
	private double registrationApiThreshold;
	
	public  AlertService() {
		transactionHealth=new ArrayList<>();
		registrationHealth=new ArrayList<>();
		transactionHistoryHealth=new ArrayList<>();
	}
	
	@Scheduled(fixedDelay=3600000,initialDelay = 5000)
	private void fetchThreshold() {
		Threshold threshold=dbService.getThresholds();
		this.transactionApiThreshold=threshold.getTransactionApiThreshold();
		this.transactionHistoryApiThreshold=threshold.getTransactionHistoryApiThreshold();
		this.registrationApiThreshold=threshold.getRegistrationApiThreshold();
	}
	
	
	public void CountsOfWindow(String API,int successCount, int failureCount, LocalDateTime strtTime, LocalDateTime endTime) {
		double down=(double)failureCount;
		double up=(double)successCount;
		double downPercentage=(double)(down/(up+down))*100.0;
		String status="";
		double thresholdPercentage=0;
		if(API.equals("TransactionAPI")) {
			thresholdPercentage=this.transactionApiThreshold;
		}
		else if(API.equals("TransactionHistoryAPI")) {
			thresholdPercentage=this.transactionHistoryApiThreshold;
		}
		else {
			thresholdPercentage=this.registrationApiThreshold;
		}
		if(downPercentage>=thresholdPercentage)
			status="DOWN";
		else
			status="UP";
		
		if(strtTime!=null) {
				System.out.println(API+"       "+thresholdPercentage+"       "+strtTime+"     "+endTime+"     "+status);
				if(API.equals("TransactionAPI")) {
					transactionHealth.add(strtTime+"     "+endTime+"     "+status);
				}
				else if(API.equals("TransactionHistoryAPI")) {
					transactionHistoryHealth.add(strtTime+"     "+endTime+"     "+status);
				}
				else
				{
					registrationHealth.add(strtTime+"     "+endTime+"     "+status);
				}
		}
		
	}
	public ResponseEntity<List> checkHealthTransactionApi() {
		int sz=transactionHealth.size();
		List<String> res = new ArrayList<>();
		for(int i=sz-1;i>=sz-5&&i>=0;i--) {
			res.add(transactionHealth.get(i));
		}
		return new ResponseEntity<>(res, HttpStatus.OK);
	}
	public ResponseEntity<List> checkHealthTransactionHistory() {
		int sz=transactionHistoryHealth.size();
		List<String> res = new ArrayList<>();
		for(int i=sz-1;i>=sz-5&&i>=0;i--) {
			res.add(transactionHealth.get(i));
		}
		return new ResponseEntity<>(res,HttpStatus.OK);
	}
	public ResponseEntity<List> checkHealthRegistrationApi() {
		int sz=registrationHealth.size();
		List<String> res = new ArrayList<>();
		for(int i=sz-1;i>=sz-5&&i>=0;i--) {
			res.add(transactionHealth.get(i));
		}
		return new ResponseEntity<>(res,HttpStatus.OK);
	}



}
