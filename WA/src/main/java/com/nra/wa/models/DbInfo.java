package com.nra.wa.models;


public class DbInfo {
	

	private String dbId;
	private String url;
	private String username;
	private String password;
	private String drivername;
	
	public DbInfo() {
		
	}
	
	public DbInfo(String dbId, String url, String username, String password, String drivername) {
		super();
		this.dbId = dbId;
		this.url = url;
		this.username = username;
		this.password = password;
		this.drivername = drivername;
	}
	public String getDbId() {
		return dbId;
	}
	public void setDbId(String dbId) {
		this.dbId = dbId;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getDrivername() {
		return drivername;
	}
	public void setDrivername(String drivername) {
		this.drivername = drivername;
	}
	
	
	
	
	

}
