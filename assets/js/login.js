$(document).ready(function () {
    $("#login").click(function () {
        var uid = $("#username_email").val();
        var password = $("#login_password").val();

        if (uid == 'admin@admin.com' && password == 'password') {
            alert('Welcome ' + uid + '!!!!!');
            window.open('index.html')
            document.getElementById('login')
        }
        else {
            if (uid == '' || password == '') {
                alert("Please enter email and password");
            }
            else {
                alert('Please enter the right email and password');
            }
        }
    });
});