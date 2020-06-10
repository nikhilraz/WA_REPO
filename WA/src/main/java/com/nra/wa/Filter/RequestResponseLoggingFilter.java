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
@Order(Ordered.HIGHEST_PRECEDENCE +3)
public class RequestResponseLoggingFilter implements Filter {

	private Logger Log=(Logger) LoggerFactory.getLogger(TransactionFilter.class);
	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest httpServletRequest=(HttpServletRequest)request;
		HttpServletResponse httpServletResponse=(HttpServletResponse)response;
		Log.info("Logging Request  {} : {}", httpServletRequest.getMethod(), 
		          httpServletRequest.getRequestURI());
		chain.doFilter(httpServletRequest, httpServletResponse);
		Log.info("HttpStatus: {}", httpServletResponse.getStatus());
		
	}

}
