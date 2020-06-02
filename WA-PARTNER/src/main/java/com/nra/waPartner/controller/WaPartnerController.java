package com.nra.waPartner.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/WA-partner")
public class WaPartnerController {
	
	@GetMapping("")
	public String getPartner() {
		return "I m partner";
	}

}
