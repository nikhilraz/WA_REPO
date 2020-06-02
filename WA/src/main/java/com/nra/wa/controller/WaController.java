package com.nra.wa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nra.wa.models.DbInfo;
import com.nra.wa.service.DbService;
import com.nra.wa.service.PartnerService;

@RestController
@RequestMapping("/services")
public class WaController {
	
	@Autowired
	private DbService dbService;
	
	@Autowired
	private PartnerService partnerService;
	

	
	@GetMapping("/database/{dbId}")
	public DbInfo getDbInfo(@PathVariable("dbId") String dbId) {
		return dbService.getDbInfo(dbId);
	}
	
	@GetMapping("/WA-partner")
	public String getFromPartner() {
		return partnerService.getFromPartner();
	}
}
