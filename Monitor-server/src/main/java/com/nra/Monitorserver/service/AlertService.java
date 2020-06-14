package com.nra.Monitorserver.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@Service
public class AlertService {

	private List<String> statusList;
	private File f;
	private FileInputStream fin;
	private Scanner scanner;
	
	public AlertService() throws FileNotFoundException,IOException {
		statusList=new ArrayList<>();
		f=new File("C:\\Users\\HP\\Documents\\workspace-spring-tool-suite-4-4.6.1.RELEASE\\WA\\test.log");
		fin=new FileInputStream(f);
		scanner=new Scanner(fin);
	}
	@Scheduled(fixedDelay = 5000,initialDelay = 5000)
	private void updateList() {
		scanner=new Scanner(fin);
		while(scanner.hasNextLine()) {
			statusList.add(scanner.nextLine());
		}
		System.out.println(statusList.size());
	}
	public String sendAlert() {
		if(statusList.size()<10)
		return "";
		else {
			
			int down=0;
			for(int i=statusList.size()-1;i>=statusList.size()-10;i--) {
				String st=statusList.get(i);
				if(st.equals("500 "))
				{
					down++;
				}
			}
			if(down>5)
				return "PARTNER down,try again later!";
		}
		return "";
	}
	
}
