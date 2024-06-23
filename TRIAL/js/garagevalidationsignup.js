function valid() {

	var name = document.getElementById("name").value;
	if (name === '') {
		alert("Name field is empty");
		return false;
	}

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

	var contactnumber = document.getElementById("contact").value;
	if (contactnumber === '') {
		alert("Contact Number field is empty");
        return false;
	}
	if(contactnumber.length !== 10){
		alert("Invalid Contact Number length");
		return false;
	}
	if(isNaN(contactnumber)) {
    alert("Invalid input");
    return false;
	}

	var address = document.getElementById("address").value;
	if (address === '') {
		alert("Address field is empty");
        return false;
	}

	var licensenumber = document.getElementById("license").value;
	if (licensenumber === '') {
		alert("License Number field is empty");
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

	if(!this.myForm.chkbx.checked) {
		alert("You missed the Check Box");
        return false;
	}
}