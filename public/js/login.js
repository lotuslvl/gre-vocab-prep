
$(document).ready(function () {

    var user=localStorage.getItem("username");

    $('#btnLogin').click(function () {

        var usernameValue = document.getElementById("username").value;
        var passwordValue = document.getElementById("password").value;


        $.get("/api/login", { username: usernameValue, password: passwordValue })
            .done(function (data) {
 
                
                if(user){

                    document.location.href = "/mydashboard";
                    
            
            
                }

                else{

                    alert("Your account was not found. Try again.");
                }

            });

           

                localStorage.setItem("username",usernameValue);
           
    });

    if(user){

        document.location.href = "/mydashboard";
        


    }

  


})