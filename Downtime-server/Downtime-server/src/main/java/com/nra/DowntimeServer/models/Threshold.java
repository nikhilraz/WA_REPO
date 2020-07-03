package com.nra.DowntimeServer.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Threshold {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	@Column(name = "transactionApiThreshold")
	private double transactionApiThreshold;
	
	@Column(name = "transactionHistoryApiThreshold")
	private double transactionHistoryApiThreshold;
	
	
	@Column(name = "registrationApiThreshold")
	private double registrationApiThreshold;
	
	
	@Override
	public String toString() {
		return "Threshold [id=" + id + ", transactionApiThreshold=" + transactionApiThreshold
				+ ", transactionHistoryApiThreshold=" + transactionHistoryApiThreshold + ", registrationApiThreshold="
				+ registrationApiThreshold + "]";
	}


	public Threshold() {}
	
	
	public Threshold(double transactionApiThreshold, double transactionHistoryApiThreshold,
			double registrationApiThreshold) {
		super();
		this.transactionApiThreshold = transactionApiThreshold;
		this.transactionHistoryApiThreshold = transactionHistoryApiThreshold;
		this.registrationApiThreshold = registrationApiThreshold;
	}


	public double getTransactionApiThreshold() {
		return transactionApiThreshold;
	}
	public void setTransactionApiThreshold(double transactionApiThreshold) {
		this.transactionApiThreshold = transactionApiThreshold;
	}
	public double getTransactionHistoryApiThreshold() {
		return transactionHistoryApiThreshold;
	}
	public void setTransactionHistoryApiThreshold(double transactionHistoryApiThreshold) {
		this.transactionHistoryApiThreshold = transactionHistoryApiThreshold;
	}
	public double getRegistrationApiThreshold() {
		return registrationApiThreshold;
	}
	public void setRegistrationApiThreshold(double registrationApiThreshold) {
		this.registrationApiThreshold = registrationApiThreshold;
	}
	
	

}
