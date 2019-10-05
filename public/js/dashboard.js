
$(document).ready(function () {
    
    function getUserData(){
        var userData = localStorage.getItem("testdata").split(',');
        return userData;
    }

    //get data
    function displayUserData() {
        var data = getUserData();

        // / // Create the new row
        for (var i = 0; i < data.length-2; i += 3) {

            var newUser = $("<tr>").append(
                $("<td>").text(data[i]),
                $("<td>").text(data[i+1].substring(0, data.length -1) + " %"),
                $("<td>").text(data[i+2].substring(0, data.length) + " minutes"))

            // Append the new row to the table
            $("#user-table > tbody").append(newUser);

        };

    }

    displayUserData();

});