

$(document).ready(function(){

    var scores=[];

    //get scores
function displayScores (){
 $.get("/api/getscores", function(data) {

    scores = data;
  


    
  }).then(
    function() {
      


      // / // Create the new row
      for(var i = 0; i < scores.length; i++){
        var newUser = $("<tr>").append(
          $("<td>").text(scores[i].name),
          $("<td>").text(scores[i].score),
          $("<td>").text(scores[i].timetaken))
        
          // Append the new row to the table
          $("#user-table > tbody").append(newUser);

      };



    }
  );


}

displayScores();

});