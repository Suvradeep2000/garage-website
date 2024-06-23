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
	var description = document.getElementById("description").value;
	if (description === '') {
		alert("Description field is empty");
		return false;
	}
	
	if(!this.IssueForm.chkbox.checked) {
		alert("You missed the Check Box");
        return false;
	}
}