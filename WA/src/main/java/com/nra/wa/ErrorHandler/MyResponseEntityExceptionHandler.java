package com.nra.wa.ErrorHandler;
import java.time.LocalDateTime;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.nra.wa.Exception.StockNotAvailableException;
import com.nra.wa.models.ErrorObject;

@ControllerAdvice
public class MyResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {
	@ExceptionHandler(StockNotAvailableException.class)
	public ResponseEntity<ErrorObject> handle(Exception ex,WebRequest wb){
		ErrorObject errorObject=new ErrorObject(ex.getMessage(),wb.getDescription(false),LocalDateTime.now());
		HttpHeaders httpHeaders=new HttpHeaders();
		httpHeaders.add("stock", "stock not available");
		return new ResponseEntity<>(errorObject,httpHeaders,HttpStatus.NOT_FOUND);
	}

}
