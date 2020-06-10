package com.nra.wa;

import java.util.Arrays;
import java.util.Random;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.client.RestTemplate;

import com.nra.wa.ErrorHandler.RestTemplateResponseErrorHandler;
import com.nra.wa.Filter.MetricFilter;
import com.nra.wa.Filter.RequestResponseLoggingFilter;
import com.nra.wa.Filter.TransactionFilter;

@SpringBootApplication
@EnableScheduling
public class WaApplication {

	public static void main(String[] args) {
		SpringApplication.run(WaApplication.class, args);
	}
	
	@Bean
	public RestTemplate getRestTemplateForResponseErrorHandler() {
		return new RestTemplateBuilder()
				.errorHandler(new RestTemplateResponseErrorHandler())
				.build();
	}
	@Bean
	public Random getRandom() {
		return new Random();
	}
	
	@Bean
	public FilterRegistrationBean<MetricFilter> getMetricFilter() {
	    FilterRegistrationBean<MetricFilter> registrationBean = new FilterRegistrationBean<>();
	    registrationBean.setFilter(new MetricFilter());
	    registrationBean.setUrlPatterns(Arrays.asList("/WA/payment/isUpORDown","/WA/getAlert"));
	    registrationBean.setOrder(Ordered.HIGHEST_PRECEDENCE +2);
	    return registrationBean;
	}
////	@Bean
////	public FilterRegistrationBean<TransactionFilter> getTransactionFilter() {
////	    FilterRegistrationBean<TransactionFilter> registrationBean = new FilterRegistrationBean<>();
////	    registrationBean.setFilter(new TransactionFilter());
////	    registrationBean.setUrlPatterns(Arrays.asList("/WA/payment/isUpORDown","/*"));
////	    registrationBean.setOrder(Ordered.HIGHEST_PRECEDENCE +1);
////	    return registrationBean;
////	}
////	@Bean
////	public FilterRegistrationBean<RequestResponseLoggingFilter> getRequestResponseLoggingFilter() {
////	    FilterRegistrationBean<RequestResponseLoggingFilter> registrationBean = new FilterRegistrationBean<>();
////	    registrationBean.setFilter(new RequestResponseLoggingFilter());
////	    registrationBean.setUrlPatterns(Arrays.asList("/WA/payment/isUpORDown","/*"));
////	    registrationBean.setOrder(Ordered.HIGHEST_PRECEDENCE +3);
////	    return registrationBean;
////	}
//	
	
	
//	
//	@Bean
//	public RestTemplate getRestTemplate(){
//		return new RestTemplate();
//	}
}
