package com.nra.DowntimeServer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class DowntimeServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(DowntimeServerApplication.class, args);
	}


}
