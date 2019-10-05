


$(document).ready(function(){

    var scores=[];
    var getLocalData=localStorage.getItem("testdata");

    console.log(getLocalData);
    
    //split by comma name percentage timetaken
    
    //get scores
function displayScores (){
 

      // / // Create the new row
      for(var i = 0; i < scores.length; i++){
        var newUser = $("<tr>").append(
          $("<td>").text(scores[i].name),
          $("<td>").text(scores[i].percentage+" %"),
          $("<td>").text(scores[i].timetaken+" minutes")   )
        
          // Append the new row to the table
          $("#user-table > tbody").append(newUser);

      };






}

displayScores();

});