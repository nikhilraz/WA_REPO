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
	
	
	
	private Map<LocalDateTime,Counter> messageList;

	public Reducer() {
		messageList=new LinkedHashMap<>();
	}
	public void aggregate(Message message) {
		if(messageList.containsKey(message.getLocalDateTime())) {
			if(message.getStatus()==202) {
				messageList.get(message.getLocalDateTime()).setSuccessCount(messageList.get(message.getLocalDateTime()).getSuccessCount()+1);
			}
			else {
				messageList.get(message.getLocalDateTime()).setFailureCount(messageList.get(message.getLocalDateTime()).getFailureCount()+1);
			}
		}
		else {
			if(message.getStatus()==202) {
				messageList.put(message.getLocalDateTime(),new Counter(1,0));
			}
			else {
				messageList.put(message.getLocalDateTime(),new Counter(0,1));
			}
		}
	}
	
	@Scheduled(fixedDelayString ="${window.size}",initialDelayString = "${initial.delay}")
	private void checkWindow() {
		int successCount=0,failureCount=0;
		int flag=0;
		LocalDateTime strtTime = null,endTime = null;
		Iterator it=messageList.entrySet().iterator();
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
		alertService.CountsOfWindow(successCount,failureCount,strtTime,endTime);
		System.out.println("------------------------------");
	
		
	}
		
}
