

$(document).ready(function(){

    var scores=[];

    //get scores
function displayScores (){
 $.get("/api/getscores", function(data) {
    scores = data;
    
  }).then(
    function() {
      console.log("scores");
    }
  );


}

displayScores();

});