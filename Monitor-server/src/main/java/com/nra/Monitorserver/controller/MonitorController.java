package com.nra.Monitorserver.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nra.Monitorserver.service.AlertService;

@RestController
public class MonitorController {
	
	@Autowired
	private AlertService alertService;
	
	@GetMapping("/getAlert")
	public String sendAlert() {
		return alertService.sendAlert();
	}
}
