$(document).ready(function () {
    $("#contact").click(function () {
        var email = $("#email").val();
        var name = $("#nama").val();
        var message = $("#message").val();

        if (email == '' || name == '' || message == '') {
            alert("Please fill all form :)");

        }
        else {
            alert('Register Success');
            $("#contactreset").trigger('reset');
            return false;
        }
    });
});