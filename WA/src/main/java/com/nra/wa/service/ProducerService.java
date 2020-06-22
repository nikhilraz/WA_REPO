package com.nra.wa.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.JmsException;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;

import com.nra.wa.models.Message;

@Service
public class ProducerService {
	
	@Autowired
	private JmsTemplate jmsTemplate;
	
	public void produceMessage(int statusCode,LocalDateTime localDateTime) throws JmsException {
		jmsTemplate.convertAndSend("MQ", new Message(statusCode,localDateTime));
	}
}
