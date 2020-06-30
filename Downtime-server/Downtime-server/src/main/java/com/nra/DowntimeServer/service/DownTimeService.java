package com.nra.DowntimeServer.service;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.nra.DowntimeServer.models.Response;

@Service
public class DownTimeService {
	
	
	private File transactionFile,registrationFile,transactionHistoryFile;
	private long  ts,te,rs,re,ths,the;
	private DateTimeFormatter dateTimeFormatter;
	private long offset;
	

	@Value("${transactionFilePath}")
	private String logFilePath;
	
	
	
	@Autowired
	private ReducerService reducerService;
	
	public DownTimeService() throws FileNotFoundException,IOException{
		transactionFile=new File("C:\\Users\\HP\\Documents\\workspace-spring-tool-suite-4-4.6.1.RELEASE\\WA\\Transaction.log");
		transactionHistoryFile=new File("C:\\Users\\HP\\Documents\\workspace-spring-tool-suite-4-4.6.1.RELEASE\\WA\\TransactionHistory.log");
		registrationFile=new File("C:\\Users\\HP\\Documents\\workspace-spring-tool-suite-4-4.6.1.RELEASE\\WA\\Registration.log");
		dateTimeFormatter=DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
		ts=0;te=0;rs=0;re=0;ths=0;the=0;offset=70;
	}
	@Scheduled(fixedDelay=1000,initialDelay =0)
	private void fetchAndPassTransactionLog() {
		RandomAccessFile randomAccessFile=null;
		String response="";
		try {
			randomAccessFile=new RandomAccessFile(transactionFile,"r");
			int flag=0;
			for(long i=ts;i<=te;i++) {
				randomAccessFile.seek((long)25*i);
				response=randomAccessFile.readLine();
				if(response!=null) {
					flag=1;
					String responseArray[]=randomAccessFile.readLine().split(",");
					Response TransactionResponse=new Response(Integer.parseInt(responseArray[0]),LocalDateTime.parse(responseArray[1], dateTimeFormatter));
					reducerService.aggregateTransactionResponse(TransactionResponse);
				}
			}
			if(flag==1) {
			ts+=offset;
			te+=offset;
			}
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		
	}
	
	
	@Scheduled(fixedDelay=1000,initialDelay =0)
	private void fetchAndPassTransactionHistoryLog() {
		RandomAccessFile randomAccessFile=null;
		String response="";
		try {
			randomAccessFile=new RandomAccessFile(transactionHistoryFile,"r");
			int flag=0;
			for(long i=ths;i<=the;i++) {
				randomAccessFile.seek((long)25*i);
				response=randomAccessFile.readLine();
				if(response!=null) {
					flag=1;
					String responseArray[]=randomAccessFile.readLine().split(",");
					Response TransactionHistoryResponse=new Response(Integer.parseInt(responseArray[0]),LocalDateTime.parse(responseArray[1], dateTimeFormatter));
					reducerService.aggregateTransactionHistoryResponse(TransactionHistoryResponse);
				}
			}
			if(flag==1) {
			ths+=offset;
			the+=offset;
			}
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		
	}
	
	
	@Scheduled(fixedDelay=1000,initialDelay=0)
	private void fetchAndPassRegistrationLog() {
		RandomAccessFile randomAccessFile=null;
		String response="";
		try {
			randomAccessFile=new RandomAccessFile(registrationFile,"r");
			int flag=0;
			for(long i=rs;i<=re;i++) {
				randomAccessFile.seek((long)25*i);
				response=randomAccessFile.readLine();
				if(response!=null) {
					flag=1;
					String responseArray[]=randomAccessFile.readLine().split(",");
					Response RegistrationResponse=new Response(Integer.parseInt(responseArray[0]),LocalDateTime.parse(responseArray[1], dateTimeFormatter));
					reducerService.aggregateRegistrationResponse(RegistrationResponse);
				}
			}
			if(flag==1) {
			rs+=offset;
			re+=offset;
			}
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		
	}
}
