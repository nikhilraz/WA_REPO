<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>VariableInput</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

</head>
<body>
<div class="container" >
	<div class="jumbotron">
		<h3 >Enter Threshold's Values:</h3>
		<form action="inserted">
			<div class="form-group" >
				<label>TransactionApiThreshold</label>
				<input class="form-control" type="text" name="transactionApiThreshold">
			</div>
			<div class="form-group" >
				<label>TransactionHistoryApiThreshold</label>
				<input class="form-control" type="text" name="transactionHistoryApiThreshold">
			</div>
			<div class="form-group" >
				<label>RegistrationApiThreshold</label>
				<input class="form-control" type="text" name="registrationApiThreshold">
			</div>
			<input class="btn btn-primary btn" type="submit" name="Insert" >	
		</form>
	</div> 
</div>
</body>
<style>
	
	.jumbotron{
		margin-left:25%;
		width:50%;
		margin-top:150px;
	}
	.btn{
		margin-left:40%;
	}
	
	
	

</style>
</html>