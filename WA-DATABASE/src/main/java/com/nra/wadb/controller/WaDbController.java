package com.nra.wadb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nra.wadb.service.WaDbService;

@RestController
@RequestMapping("/WA-DB/Books")
public class WaDbController {
	
	@Autowired
	private WaDbService waDbService;

}
