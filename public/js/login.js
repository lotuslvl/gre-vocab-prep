
$(document).ready(function () {

    var user=localStorage.getItem("username");

    $('#btnLogin').click(function () {

        var usernameValue = document.getElementById("username").value;
        var passwordValue = document.getElementById("password").value;

        $.get("/api/login", { username: usernameValue, password: passwordValue })
            .done(function (data) {
                //window.location.href = "/playerdashboard";
                console.log(JSON.stringify(data));
            });

           

                localStorage.setItem("username",usernameValue);
           
    });

    if(user){
        


    }

    else {



    }



})