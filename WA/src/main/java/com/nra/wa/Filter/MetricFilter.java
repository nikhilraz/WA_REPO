package com.nra.wa.Filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.nra.wa.service.MetricService;


public class MetricFilter implements Filter {

	private MetricService metricService;
	 @Override
	    public void init(FilterConfig config) throws ServletException {
	        metricService = (MetricService) WebApplicationContextUtils
	         .getRequiredWebApplicationContext(config.getServletContext())
	         .getBean("metricService");
	    }
	
	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		chain.doFilter((HttpServletRequest)request,(HttpServletResponse) response);
	//	System.out.println(metricService);
		//metricService.addStatus(((HttpServletResponse)response).getStatus());	
	}

}
