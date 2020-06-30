package com.nra.DowntimeServer.models;

import java.time.LocalDateTime;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;

public class Response {


	private int status;
	private LocalDateTime  localDateTime;
	public Response(int status, LocalDateTime localDateTime) {
		super();
		this.status = status;
		this.localDateTime = localDateTime;
	}
	public Response() {
		super();
	}
	@Override
	public String toString() {
		return "Message [status=" + status + ", localDateTime=" + localDateTime + "]";
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public LocalDateTime getLocalDateTime() {
		return localDateTime;
	}
	public void setLocalDateTime(LocalDateTime localDateTime) {
		this.localDateTime = localDateTime;
	}

}
