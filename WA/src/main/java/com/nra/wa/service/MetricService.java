package com.nra.wa.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.nra.wa.models.Status;
import com.nra.wa.repository.MetricRepo;

@Service
public class MetricService {
	
	
	@Autowired
	private MetricRepo metricRepo;
	List<Integer> statusList;
	
	public MetricService() {
		statusList=new ArrayList<>();
		System.out.println("created object!");
	}
	
	public void addStatus(int status) {
		System.out.println("in metric service!");
		statusList.add(status);
	}
	
	
	@Scheduled(fixedDelay = 10000,initialDelay = 5000)
    private void exportMetrics() {
		System.out.println("Scheduled-------------------");
		if(statusList.size()>0) {
		for(int x:statusList)
		{
			Status s=new Status();
			s.setStatus(x);
			metricRepo.save(s);
		}
			statusList.clear();
		}
		
	}
	
	
	
	
	
	
}
