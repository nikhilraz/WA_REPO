package com.nra.wa.service;

import java.time.LocalDateTime;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Map.Entry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.nra.wa.models.Counter;
import com.nra.wa.models.Message;

@Service
public class Reducer {
	
	@Autowired
	private AlertService alertService;
	
	
	
	private Map<LocalDateTime,Counter> transactionResponseList;
	private Map<LocalDateTime,Counter> transactionHistoryResponseList;
	private Map<LocalDateTime,Counter> registrationResponseList;

	public Reducer() {
		transactionResponseList=new LinkedHashMap<>();
		transactionHistoryResponseList=new LinkedHashMap<>();
		registrationResponseList=new LinkedHashMap<>();
	}
	public void aggregateTransactionResponse(Message message) {
		if(transactionResponseList.containsKey(message.getLocalDateTime())) {
			if(message.getStatus()==202) {
				transactionResponseList.get(message.getLocalDateTime()).setSuccessCount(transactionResponseList.get(message.getLocalDateTime()).getSuccessCount()+1);
			}
			else {
				transactionResponseList.get(message.getLocalDateTime()).setFailureCount(transactionResponseList.get(message.getLocalDateTime()).getFailureCount()+1);
			}
		}
		else {
			if(message.getStatus()==202) {
				transactionResponseList.put(message.getLocalDateTime(),new Counter(1,0));
			}
			else {
				transactionResponseList.put(message.getLocalDateTime(),new Counter(0,1));
			}
		}
	}
	
	@Scheduled(fixedDelayString ="${window.size}",initialDelayString = "${initial.delay}")
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
		System.out.println("------------------------------");	
	}
		
	
	public void aggregateTransactionHistoryResponse(Message message) {
		if(transactionHistoryResponseList.containsKey(message.getLocalDateTime())) {
			if(message.getStatus()==202) {
				transactionHistoryResponseList.get(message.getLocalDateTime()).setSuccessCount(transactionHistoryResponseList.get(message.getLocalDateTime()).getSuccessCount()+1);
			}
			else {
				transactionHistoryResponseList.get(message.getLocalDateTime()).setFailureCount(transactionHistoryResponseList.get(message.getLocalDateTime()).getFailureCount()+1);
			}
		}
		else {
			if(message.getStatus()==202) {
				transactionHistoryResponseList.put(message.getLocalDateTime(),new Counter(1,0));
			}
			else {
				transactionHistoryResponseList.put(message.getLocalDateTime(),new Counter(0,1));
			}
		}
	}
	
	@Scheduled(fixedDelayString ="${window.size}",initialDelayString = "${initial.delay}")
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
		System.out.println("------------------------------");	
	}
	
	
	public void aggregateRegistrationResponse(Message message) {
		if(registrationResponseList.containsKey(message.getLocalDateTime())) {
			if(message.getStatus()==202) {
				registrationResponseList.get(message.getLocalDateTime()).setSuccessCount(registrationResponseList.get(message.getLocalDateTime()).getSuccessCount()+1);
			}
			else {
				registrationResponseList.get(message.getLocalDateTime()).setFailureCount(registrationResponseList.get(message.getLocalDateTime()).getFailureCount()+1);
			}
		}
		else {
			if(message.getStatus()==202) {
				registrationResponseList.put(message.getLocalDateTime(),new Counter(1,0));
			}
			else {
				registrationResponseList.put(message.getLocalDateTime(),new Counter(0,1));
			}
		}
	}
	
	@Scheduled(fixedDelayString ="${window.size}",initialDelayString = "${initial.delay}")
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
		System.out.println("------------------------------");	
	}
}
