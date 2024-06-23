function valid() {

	var email = document.getElementById("email").value;
	var dot = email.lastIndexOf(".");
	var at = email.indexOf("@");
	if (email === '') {
		alert("Email field is empty");
		return false;
	}
	if(at<1 || dot<at+4 || dot+3>=email.length){
		alert("Invalid Email");
		return false;
	}

	var password = document.getElementById("password").value;
	if (password === '') {
		alert("Password field is empty");
		return false;
	}
	if (password.length<8 && password.length>15) {
		alert("Password length must be from 8-15");
		return false;
	}
}