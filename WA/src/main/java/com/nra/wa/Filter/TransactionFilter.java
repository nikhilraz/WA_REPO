package com.nra.wa.Filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.LoggerFactory;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import ch.qos.logback.classic.Logger;

@Component
@Order(Ordered.HIGHEST_PRECEDENCE +1)
public class TransactionFilter implements Filter {

	private Logger Log=(Logger) LoggerFactory.getLogger(TransactionFilter.class);
	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest httpServletRequest=(HttpServletRequest)request;
		HttpServletResponse httpServletResponse=(HttpServletResponse)response;
		System.out.println("Remote Host: "+httpServletRequest.getRemoteHost());
		System.out.println("Remote Port: "+httpServletRequest.getRemotePort());
		System.out.println("Remote Address: "+httpServletRequest.getRemoteAddr());
		
		Log.info( "Starting a transaction for req : {}",httpServletRequest.getRequestURI());
		
		chain.doFilter(httpServletRequest, httpServletResponse);
		
		Log.info( "Commiting a transaction for req : {}",httpServletRequest.getRequestURI());
	}
	
}
