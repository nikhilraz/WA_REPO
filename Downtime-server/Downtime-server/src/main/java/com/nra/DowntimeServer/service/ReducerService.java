package com.nra.DowntimeServer.service;

import java.time.LocalDateTime;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Map.Entry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.nra.DowntimeServer.models.Counter;
import com.nra.DowntimeServer.models.Response;

@Service
public class ReducerService {
	
	@Autowired
	private AlertService alertService;
	
	
	
	private Map<LocalDateTime,Counter> transactionResponseList;
	private Map<LocalDateTime,Counter> transactionHistoryResponseList;
	private Map<LocalDateTime,Counter> registrationResponseList;

	public ReducerService() {
		transactionResponseList=new LinkedHashMap<>();
		transactionHistoryResponseList=new LinkedHashMap<>();
		registrationResponseList=new LinkedHashMap<>();
	}
	public void aggregateTransactionResponse(Response response) {
		if(transactionResponseList.containsKey(response.getLocalDateTime())) {
			if(response.getStatus()>=200&&response.getStatus()<=299) {
				transactionResponseList.get(response.getLocalDateTime()).setSuccessCount(transactionResponseList.get(response.getLocalDateTime()).getSuccessCount()+1);
			}
			else {
				transactionResponseList.get(response.getLocalDateTime()).setFailureCount(transactionResponseList.get(response.getLocalDateTime()).getFailureCount()+1);
			}
		}
		else {
			if(response.getStatus()>=200&&response.getStatus()<=299) {
				transactionResponseList.put(response.getLocalDateTime(),new Counter(1,0));
			}
			else {
				transactionResponseList.put(response.getLocalDateTime(),new Counter(0,1));
			}
		}
	}
	
	@Scheduled(fixedDelayString ="${fixed.delay}",initialDelayString = "${initial.delay}")
	private void checkWindowTransactionResponse() {
		int successCount=0,failureCount=0;
		int flag=0;
		LocalDateTime strtTime = null,endTime = null;
		Iterator it=transactionResponseList.entrySet().iterator();
		Map.Entry m;
		while(it.hasNext()) {
			m=(Entry) it.next();
			if(flag==0) {
				flag=1;
				strtTime=(LocalDateTime) m.getKey();
			}
			endTime=(LocalDateTime) m.getKey();
			Counter c=(Counter) m.getValue();
			successCount+=c.getSuccessCount();
			failureCount+=c.getFailureCount();
			it.remove();
		}
		alertService.CountsOfWindow("TransactionAPI",successCount,failureCount,strtTime,endTime);
		//System.out.println("TransactionAPI  "+successCount+"    "+failureCount+"     "+strtTime+"     "+endTime);		
	}
		
	
	public void aggregateTransactionHistoryResponse(Response response) {
		if(transactionHistoryResponseList.containsKey(response.getLocalDateTime())) {
			if(response.getStatus()>=200&&response.getStatus()<=299) {
				transactionHistoryResponseList.get(response.getLocalDateTime()).setSuccessCount(transactionHistoryResponseList.get(response.getLocalDateTime()).getSuccessCount()+1);
			}
			else {
				transactionHistoryResponseList.get(response.getLocalDateTime()).setFailureCount(transactionHistoryResponseList.get(response.getLocalDateTime()).getFailureCount()+1);
			}
		}
		else {
			if(response.getStatus()>=200&&response.getStatus()<=299) {
				transactionHistoryResponseList.put(response.getLocalDateTime(),new Counter(1,0));
			}
			else {
				transactionHistoryResponseList.put(response.getLocalDateTime(),new Counter(0,1));
			}
		}
	}
	
	@Scheduled(fixedDelayString ="${fixed.delay}",initialDelayString = "${initial.delay}")
	private void checkWindowTransactionHistoryResponse() {
		int successCount=0,failureCount=0;
		int flag=0;
		LocalDateTime strtTime = null,endTime = null;
		Iterator it=transactionHistoryResponseList.entrySet().iterator();
		Map.Entry m;
		while(it.hasNext()) {
			m=(Entry) it.next();
			if(flag==0) {
				flag=1;
				strtTime=(LocalDateTime) m.getKey();
			}
			endTime=(LocalDateTime) m.getKey();
			Counter c=(Counter) m.getValue();
			successCount+=c.getSuccessCount();
			failureCount+=c.getFailureCount();
			it.remove();
		}
		alertService.CountsOfWindow("TransactionHistoryAPI",successCount,failureCount,strtTime,endTime);
		//System.out.println("TransactionHistoryAPI  "+successCount+"     "+failureCount+"     "+strtTime+"     "+endTime);	
	}
	
	
	public void aggregateRegistrationResponse(Response response) {
		if(registrationResponseList.containsKey(response.getLocalDateTime())) {
			if(response.getStatus()>=200&&response.getStatus()<=299) {
				registrationResponseList.get(response.getLocalDateTime()).setSuccessCount(registrationResponseList.get(response.getLocalDateTime()).getSuccessCount()+1);
			}
			else {
				registrationResponseList.get(response.getLocalDateTime()).setFailureCount(registrationResponseList.get(response.getLocalDateTime()).getFailureCount()+1);
			}
		}
		else {
			if(response.getStatus()>=200&&response.getStatus()<=299) {
				registrationResponseList.put(response.getLocalDateTime(),new Counter(1,0));
			}
			else {
				registrationResponseList.put(response.getLocalDateTime(),new Counter(0,1));
			}
		}
	}
	
	@Scheduled(fixedDelayString ="${fixed.delay}",initialDelayString = "${initial.delay}")
	private void checkWindowRegistrationResponse() {
		int successCount=0,failureCount=0;
		int flag=0;
		LocalDateTime strtTime = null,endTime = null;
		Iterator it=registrationResponseList.entrySet().iterator();
		Map.Entry m;
		while(it.hasNext()) {
			m=(Entry) it.next();
			if(flag==0) {
				flag=1;
				strtTime=(LocalDateTime) m.getKey();
			}
			endTime=(LocalDateTime) m.getKey();
			Counter c=(Counter) m.getValue();
			successCount+=c.getSuccessCount();
			failureCount+=c.getFailureCount();
			it.remove();
		}
		alertService.CountsOfWindow("RegistrationAPI",successCount,failureCount,strtTime,endTime);
		//System.out.println("RegistrationAPI  "+successCount+"      "+failureCount+"      "+strtTime+"       "+endTime);	
	}
}
