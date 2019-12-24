var email = document.getElementById("email").value;
function verify() {
	if (!email.match(/gmail|yahoo|rediffmail|/gi)) {
		document.getElementById("email_p").innerHTML= "Please use a verified email service provider";
	}
	else if (email.match(/gmail|yahoo|rediffmail|/gi)) {
		document.getElementById("email_p").innerHTML= "";
	}
	console.log(email);
}