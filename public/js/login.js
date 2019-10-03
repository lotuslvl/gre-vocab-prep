var attempt = 3; //Variablre count # of attempts.
function validate(){
    var username = document.getElementById("username").value;
    var username = document.getElementById("password").value;
    if (username == "Formget" && password == "formget#123"){
        alert ("Login successfully");
        window.location = "playerdashboard.html"; //Rendering to another page.
        return false;
    }
    else{
        attempt --; //Reducing by -1.
        alert("You have left "+attempt+" attempt;");
        //Rendering stops all login attemps after 3 trys.
        if( attemp == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}