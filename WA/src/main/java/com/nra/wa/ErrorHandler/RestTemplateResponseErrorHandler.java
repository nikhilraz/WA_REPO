package com.nra.wa.ErrorHandler;

import java.io.IOException;

import org.springframework.http.HttpStatus.Series;
import org.springframework.http.client.ClientHttpResponse;
import org.springframework.web.client.ResponseErrorHandler;

public class RestTemplateResponseErrorHandler implements ResponseErrorHandler{


	@Override
	public boolean hasError(ClientHttpResponse response) throws IOException {
		System.out.println(response.getBody());
		return response.getStatusCode().series()==Series.CLIENT_ERROR
				||response.getStatusCode().series()==Series.SERVER_ERROR;
	}

	@Override
	public void handleError(ClientHttpResponse response) throws CustomException,IOException {
		if(response.getStatusCode().is5xxServerError()) {
			System.out.println(response.getBody());
			throw new CustomException(response.getBody()+" SERVEICE UNAVIALABLE!");
		}
		if(response.getStatusCode().is4xxClientError()) {
			System.out.println(response.getBody());
			throw new CustomException(response.getBody()+" CLIENT_ERROR");
		}

	}
	static class CustomException extends IOException{
		/**
		 * 
		 */
		private static final long serialVersionUID = 1L;

		public CustomException(String msg) {
			super(msg);
			System.out.println(msg);
		}
	}

}
