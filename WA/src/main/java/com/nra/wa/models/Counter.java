package com.nra.wa.models;

public class Counter {
	private int successCount;
	private int failureCount;
	public int getSuccessCount() {
		return successCount;
	}
	public void setSuccessCount(int successCount) {
		this.successCount = successCount;
	}
	public int getFailureCount() {
		return failureCount;
	}
	public void setFailureCount(int failureCount) {
		this.failureCount = failureCount;
	}
	public Counter(int successCount, int failureCount) {
		super();
		this.successCount = successCount;
		this.failureCount = failureCount;
	}
	public Counter() {
	
	}
	

}
