$(document).ready(function () {
	$("#register").click(function () {
		var uid = $("#email").val();
		var password = $("#register_password").val();

		if (uid == '' || password == '') {
			alert("Please enter email and password");
		}
		else {
			if (password.length < 8) {
				alert('password must be of minimum 8 characters');
				$('#register_password').val('');
			}
			else {
				alert('Register Success ' + uid + '!!!!!');
				window.open('login.html')
			}
		}
	});
});

