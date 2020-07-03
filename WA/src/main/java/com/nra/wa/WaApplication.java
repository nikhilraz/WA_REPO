package com.nra.wa;

import java.util.Arrays;
import java.util.Random;

import javax.jms.ConnectionFactory;

import org.apache.http.HttpHost;
import org.apache.http.client.HttpClient;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.conn.routing.HttpRoute;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jms.DefaultJmsListenerContainerFactoryConfigurer;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.jms.annotation.EnableJms;
import org.springframework.jms.config.DefaultJmsListenerContainerFactory;
import org.springframework.jms.config.JmsListenerContainerFactory;
import org.springframework.jms.support.converter.MappingJackson2MessageConverter;
import org.springframework.jms.support.converter.MessageType;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.util.CollectionUtils;
import org.springframework.web.client.RestTemplate;

import com.nra.wa.ErrorHandler.RestTemplateResponseErrorHandler;
import com.nra.wa.Filter.RegistrationFilter;
import com.nra.wa.Filter.TransactionFilter;
import com.nra.wa.Filter.TransactionHistoryFilter;
import com.nra.wa.configuration.HttpHostsConfiguration;
import com.nra.wa.configuration.HttpHostsConfiguration.HttpHostConfiguration;

@SpringBootApplication
@EnableScheduling
@EnableJms
public class WaApplication {
	public static void main(String[] args) {
		SpringApplication.run(WaApplication.class, args);
	}
	

	@Bean
	public Random getRandom() {
		return new Random();
	}
	@Bean
	public HttpHostsConfiguration getHttpHostsConfiguration() {
		return new HttpHostsConfiguration();
	}
	@Autowired
	  private HttpHostsConfiguration httpHostConfiguration;
	
	//Filters for intercepting different API's Responses and write to corresponding logs
	@Bean
	public FilterRegistrationBean<TransactionHistoryFilter> getTransactionHistoryFilter() {
	    FilterRegistrationBean<TransactionHistoryFilter> registrationBean = new FilterRegistrationBean<>();
	    registrationBean.setFilter(new TransactionHistoryFilter());
	    registrationBean.setUrlPatterns(Arrays.asList("/WA/TransactionHistory"));
	    registrationBean.setOrder(Ordered.HIGHEST_PRECEDENCE +1);
	    return registrationBean;
	}
	@Bean
	public FilterRegistrationBean<TransactionFilter> getTransactionFilter() {
	    FilterRegistrationBean<TransactionFilter> registrationBean = new FilterRegistrationBean<>();
	    registrationBean.setFilter(new TransactionFilter());
	    registrationBean.setUrlPatterns(Arrays.asList("/WA/Transaction"));
	    registrationBean.setOrder(Ordered.HIGHEST_PRECEDENCE +1);
	    return registrationBean;
	}
	@Bean
	public FilterRegistrationBean<RegistrationFilter> getRegistrationFilter() {
	    FilterRegistrationBean<RegistrationFilter> registrationBean = new FilterRegistrationBean<>();
	    registrationBean.setFilter(new RegistrationFilter());
	    registrationBean.setUrlPatterns(Arrays.asList("/WA/Registration"));
	    registrationBean.setOrder(Ordered.HIGHEST_PRECEDENCE +1);
	    return registrationBean;
	}
	
	
	@Bean
	public PoolingHttpClientConnectionManager poolingHttpClientConnectionManager() {
		PoolingHttpClientConnectionManager result = new PoolingHttpClientConnectionManager();
		result.setMaxTotal(this.httpHostConfiguration.getMaxTotal());
		// Default max per route is used in case it's not set for a specific route
		result.setDefaultMaxPerRoute(this.httpHostConfiguration.getDefaultMaxPerRoute());
		// and / or
		if (!CollectionUtils.isEmpty(this.httpHostConfiguration.getMaxPerRoutes())) {
			for (HttpHostConfiguration httpHostConfig : this.httpHostConfiguration.getMaxPerRoutes()) {
				HttpHost host = new HttpHost(httpHostConfig.getHost(), httpHostConfig.getPort(), httpHostConfig.getScheme());
				// Max per route for a specific host route
				result.setMaxPerRoute(new HttpRoute(host), httpHostConfig.getMaxPerRoute());
			}
		}
		return result;
	}

	  @Bean
	  public RequestConfig requestConfig() {
	    RequestConfig result = RequestConfig.custom()
	      .setConnectionRequestTimeout(120000)
	      .setConnectTimeout(120000)
	      .setSocketTimeout(120000)
	      .build();
	    return result;
	  }

	  @Bean
	  public CloseableHttpClient httpClient(PoolingHttpClientConnectionManager poolingHttpClientConnectionManager, RequestConfig requestConfig) {
	    CloseableHttpClient result = HttpClientBuilder
	      .create()
	      .setConnectionManager(poolingHttpClientConnectionManager)
	      .setDefaultRequestConfig(requestConfig)
	      .build();
	    return result;
	  }

	  @Bean
	  public RestTemplate restTemplate(HttpClient httpClient) {
	    HttpComponentsClientHttpRequestFactory requestFactory = new HttpComponentsClientHttpRequestFactory();
	    requestFactory.setHttpClient(httpClient);
	    RestTemplate restTemplate= new RestTemplate(requestFactory);
	    restTemplate.setErrorHandler(new RestTemplateResponseErrorHandler());
	    return restTemplate;
	  }
	  
	  
	  @Bean
	  public JmsListenerContainerFactory<?> myFactory(ConnectionFactory connectionFactory,
	                          DefaultJmsListenerContainerFactoryConfigurer configurer) {
	    DefaultJmsListenerContainerFactory factory = new DefaultJmsListenerContainerFactory();
	    // This provides all boot's default to this factory, including the message converter
	    configurer.configure(factory, connectionFactory);
	
	    return factory;
	  }

	  @Bean // Serialize message content to json using TextMessage
	  public MappingJackson2MessageConverter jacksonJmsMessageConverter() {
	    MappingJackson2MessageConverter converter = new MappingJackson2MessageConverter();
	    converter.setTargetType(MessageType.TEXT);
	    converter.setTypeIdPropertyName("_type");
	    return converter;
	  }

}
