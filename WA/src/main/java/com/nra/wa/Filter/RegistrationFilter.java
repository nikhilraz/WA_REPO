package com.nra.wa.Filter;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.LoggerFactory;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.nra.wa.service.ProducerService;


public class RegistrationFilter implements Filter {

	private ProducerService producerService ;
	 @Override
	    public void init(FilterConfig config) throws ServletException {
	        producerService = (ProducerService) WebApplicationContextUtils
	         .getRequiredWebApplicationContext(config.getServletContext())
	         .getBean("producerService");
	    }
	
	private static final org.slf4j.Logger Log= LoggerFactory.getLogger(RegistrationFilter.class);
	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest httpServletRequest=(HttpServletRequest)request;
		HttpServletResponse httpServletResponse=(HttpServletResponse)response;
		chain.doFilter(httpServletRequest, httpServletResponse);
		
		LocalDateTime localDateTime=LocalDateTime.now();
		DateTimeFormatter formatter=DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
		String ldt=localDateTime.format(formatter);
		LocalDateTime dateTime=LocalDateTime.parse(ldt,formatter);
		Log.info("{} {}", httpServletResponse.getStatus(),ldt);
		producerService.produceMessage("RegistrationMQ",httpServletResponse.getStatus(),dateTime);
		
	}

}
