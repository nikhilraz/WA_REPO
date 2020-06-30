package com.nra.DowntimeServer.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class AlertService {

	private List<String>transactionHealth; 
	private List<String>registrationHealth; 
	private List<String>transactionHistoryHealth; 
	
	public  AlertService() {
		transactionHealth=new ArrayList<>();
		registrationHealth=new ArrayList<>();
		transactionHistoryHealth=new ArrayList<>();
	}
	
	@Value("${threshold.percentage}")
	private double thresholdPercentage;
	
	
	public void CountsOfWindow(String API,int successCount, int failureCount, LocalDateTime strtTime, LocalDateTime endTime) {
		double down=(double)failureCount;
		double up=(double)successCount;
		double downPercentage=(double)(down/(up+down))*100.0;
		String status="";
		if(downPercentage>=thresholdPercentage)
			status="DOWN";
		else
			status="UP";
		
		if(strtTime!=null) {
				System.out.println(API+" "+strtTime+"     "+endTime+"     "+status);
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
