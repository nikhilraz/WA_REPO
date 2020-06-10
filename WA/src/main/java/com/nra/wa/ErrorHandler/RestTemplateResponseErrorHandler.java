package com.nra.wa.ErrorHandler;

import java.io.IOException;

import org.springframework.http.HttpStatus.Series;
import org.springframework.http.client.ClientHttpResponse;
import org.springframework.web.client.ResponseErrorHandler;

import com.nra.wa.Exception.StockNotAvailableException;

public class RestTemplateResponseErrorHandler implements ResponseErrorHandler{


	@Override
	public boolean hasError(ClientHttpResponse response) throws IOException {
		return response.getStatusCode().series()==Series.CLIENT_ERROR
				||response.getStatusCode().series()==Series.SERVER_ERROR;
	}

	@Override
	public void handleError(ClientHttpResponse response) throws IOException {
		if(response.getStatusCode().is5xxServerError()) {
			System.out.println(response.getRawStatusCode());
			throw new StockNotAvailableException(response.getStatusText()+" "+response.getRawStatusCode());
		}
		if(response.getStatusCode().is4xxClientError()) {
			System.out.println("4xx");
			throw new StockNotAvailableException(response.getStatusText()+" "+response.getRawStatusCode());
		}

	}
//	static class CustomException extends IOException{
//		/**
//		 * 
//		 */
//		private static final long serialVersionUID = 1L;
//
//		public CustomException(String msg) {
//			super(msg);
//			System.out.println(msg);
//		}
//	}

}
