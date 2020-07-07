package com.nra.AdminServer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.nra.AdminServer.services.DbService;

@RestController
public class AdminController {
	
	@Autowired
	private DbService dbService;
	
	
	
	@GetMapping("/")
	public ModelAndView insertValue()
	{
		ModelAndView mv=new ModelAndView("getVariable");
		return mv;
	}
	@GetMapping("/inserted")
	public void insertValue(@RequestParam("transactionApiThreshold") String transactionApiThreshold,
			@RequestParam("transactionHistoryApiThreshold") String transactionHistoryApiThreshold,
			@RequestParam("registrationApiThreshold") String registrationApiThreshold
			)
	{
		dbService.insertThreshold(transactionApiThreshold, transactionHistoryApiThreshold, registrationApiThreshold);
	}

}
