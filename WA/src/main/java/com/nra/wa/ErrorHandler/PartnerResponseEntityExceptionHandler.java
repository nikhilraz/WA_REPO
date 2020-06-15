package com.nra.wa.ErrorHandler;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.nra.wa.Exception.PartnerDownException;
import com.nra.wa.Exception.PartnerNotFoundException;
import com.nra.wa.models.ErrorObject;

@ControllerAdvice
public class PartnerResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {
	
	@ExceptionHandler({PartnerDownException.class,PartnerNotFoundException.class})
	public ResponseEntity<ErrorObject> handle(Exception ex,WebRequest wb){
		ErrorObject errorObject=new ErrorObject(ex.getMessage(),wb.getDescription(false),LocalDateTime.now());
		return new ResponseEntity<>(errorObject,HttpStatus.INTERNAL_SERVER_ERROR);
	}

}
