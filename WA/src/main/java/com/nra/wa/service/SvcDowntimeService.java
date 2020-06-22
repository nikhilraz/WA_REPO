package com.nra.wa.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Service;

import com.nra.wa.models.Message;

@Service
public class SvcDowntimeService {
	

	@Autowired
	private Reducer reducer;
	@JmsListener(destination = "MQ",containerFactory = "myFactory")
	public void fetchAndPass(Message message) {
		reducer.aggregate(message);
	}
}
