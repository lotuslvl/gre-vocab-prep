
$(document).ready(function () {
    $('#btnLogin').click(function () {

        var usernameValue = document.getElementById("username").value;
        var passwordValue = document.getElementById("password").value;

        $.post("/api/login", { username: usernameValue, password: passwordValue })
            .done(function (data) {
                window.location.href = "/scoreboard";
            });
    });
})