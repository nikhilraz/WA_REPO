package com.nra.wa.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Service;

import com.nra.wa.models.Message;

@Service
public class SvcDowntimeService {
	

	@Autowired
	private Reducer reducer;
	@JmsListener(destination = "TransactionMQ",containerFactory = "myFactory")
	public void fetchAndPassTransactionResponses(Message message) {
		reducer.aggregateTransactionResponse(message);
	}
	
	@JmsListener(destination = "RegistrationMQ",containerFactory = "myFactory")
	public void fetchAndPassRegistrationResponse(Message message) {
		reducer.aggregateRegistrationResponse(message);
	}
	
	@JmsListener(destination = "TransactionHistoryMQ",containerFactory = "myFactory")
	public void fetchAndPassTransactionHistoryResponses(Message message) {
		reducer.aggregateTransactionHistoryResponse(message);
	}
}
