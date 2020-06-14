package com.nra.wa.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ch.qos.logback.classic.Level;

@RestController
public class LogController {

	Logger logger=LoggerFactory.getLogger(LogController.class);
	
	ch.qos.logback.classic.Logger parentLogger = 
			  (ch.qos.logback.classic.Logger) LoggerFactory.getLogger("com.nra.wa.controller");
	Logger childlogger = 
			  (ch.qos.logback.classic.Logger)LoggerFactory.getLogger("com.nra.wa.controller.LogController");
			 
			
	@RequestMapping("/")
	public String getLoggerMessage() {
		parentLogger.setLevel(Level.WARN);
		childlogger.error("Info OCCURED");
		return "HOME";
	}
}
