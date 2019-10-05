
$(document).ready(function () {

    var user=localStorage.getItem("username");
    if(user == null){

       console.log("not signed in");
    
    }
    else{

        document.location.href = "/mydashboard";
    }



    $('#btnLogin').click(function () {

        var usernameValue = document.getElementById("username").value;
        var passwordValue = document.getElementById("password").value;
        localStorage.setItem("username",usernameValue);


        $.get("/api/login", { username: usernameValue, password: passwordValue })
            .done(function (data) {
 
                
                if(usernameValue){

                    document.location.href = "/mydashboard";
                    
            
            
                }

                else{

                    alert("Your account was not found. Try again.");
                }

            });

           

               
           
    });


  


})