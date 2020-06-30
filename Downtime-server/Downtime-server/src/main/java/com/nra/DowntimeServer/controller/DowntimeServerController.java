package com.nra.DowntimeServer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nra.DowntimeServer.service.AlertService;

@RestController
@RequestMapping("/SVC_DOWNTIME/health")
public class DowntimeServerController {
	
	@Autowired
	private AlertService alertService;
	
	@GetMapping("/TransactionApi")
	public ResponseEntity<List> checkHealthTransactionApi() {
		return alertService.checkHealthTransactionApi();
	}
	@GetMapping("/TransactionHistoryApi")
	public ResponseEntity<List> checkHealthTransactionHistory() {
		return alertService.checkHealthTransactionHistory();
	}
	@GetMapping("/RegistrationApi")
	public ResponseEntity<List> checkHealthRegistrationApi() {
		return alertService.checkHealthRegistrationApi();
	}
}
