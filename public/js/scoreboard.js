

$(document).ready(function(){

    var scores=[];
    var numbers=[];
    var names=[];

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
          $("<td>").text(scores[i].type),
          $("<td>").text(scores[i].percentage+" %"),
          $("<td>").text(scores[i].timetaken+" minutes")   )

          $(numbers).push(scores[i].percentage);
          $(names).push(scores[i].name);
        
          // Append the new row to the table
          $("#user-table > tbody").append(newUser);

      };
    }
  );
console.log(numbers);

   $("#highest").text("100%");
   $("#namehighest").text("Jane");
}

displayScores();

});