package com.nra.DowntimeServer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.nra.DowntimeServer.service.AlertService;

@RestController
@RequestMapping("/SVC_DOWNTIME")
public class DowntimeServerController {
	
	@Autowired
	private AlertService alertService;
	
	
	
	@GetMapping("/health/TransactionApi")
	public ResponseEntity<List> checkHealthTransactionApi() {
		return alertService.checkHealthTransactionApi();
	}
	@GetMapping("/health/TransactionHistoryApi")
	public ResponseEntity<List> checkHealthTransactionHistory() {
		return alertService.checkHealthTransactionHistory();
	}
	@GetMapping("/health/RegistrationApi")
	public ResponseEntity<List> checkHealthRegistrationApi() {
		return alertService.checkHealthRegistrationApi();
	}
}
