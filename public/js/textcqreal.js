$(document).ready(function(){
 
 //where we will store all the text completion questions from the database
 var textcompletionquestions = [];
 //all the correct answer from teh database
 var correctanswers=[];
 //all the answers the user selects
 var useranswers=[];
 //checks which questions we are on currently
 var questioncounter=0;
 //where we store the final score information for the quiz
 var score=0;
 var outof=0;
 var scorepercentage=0;
 var numright=0;
 var numwrong=0;
 var timetaken=0;

 //where we set the timer
 var display = document.querySelector('#clock');
 
 
//set timer
function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}



  

 
    

 //shows the start screen and hides other elements on the page

 function showStartScreen() {
     $("#start-screen").show();
     $("#what-to-expect").hide();
     $("#tips").hide();
     $("#question-display").hide();
     $("#question-result-display").hide();
     $("#test-result-display").hide();
 }

 //shows the Questions
 function showQuestion() {
     $("#start-screen").hide();
     $("#what-to-expect").hide();
     $("#tips").hide();
     $("#question-display").show();
     $("#question-result-display").hide();
     $("#test-result-display").hide();
     startTimer(1200, display);
 }   

 function showQuestionResult() {
     $("#start-screen").hide();
     $("#what-to-expect").hide();
     $("#tips").hide();
     $("#question-display").hide();
     $("#question-result-display").show();
     $("#test-result-display").hide();
 }   


 function showFinalResult() {
     $("#start-screen").hide();
     $("#what-to-expect").hide();
     $("#tips").hide();
     $("#question-display").hide();
     $("#question-result-display").hide();
     $("#test-result-display").show();
 }   

 //display 1 question to the user from the list we received from the database
 function displayQuestions() {

    if (textcompletionquestions[questioncounter].correctanswer2) {
        $("#D").hide();
        $("#E").hide();
        $("#Dradio").hide();
        $("#Eradio").hide();
    }
    else{
        $("#D").show();
        $("#E").show();
        $("#Dradio").show();
        $("#Eradio").show()

    }

     $("#practice-question").text(textcompletionquestions[questioncounter].question)
     $("#A").text(textcompletionquestions[questioncounter].correctanswer1);
     $("#Aradio").val(textcompletionquestions[questioncounter].correctanswer1);
     $("#B").text(textcompletionquestions[questioncounter].wronganswerA1);
     $("#Bradio").val(textcompletionquestions[questioncounter].wronganswerA1);
     $("#C").text(textcompletionquestions[questioncounter].wronganswerB1);
     $("#Cradio").val(textcompletionquestions[questioncounter].wronganswerB1);
     $("#D").text(textcompletionquestions[questioncounter].wronganswerC1);
     $("#Dradio").val(textcompletionquestions[questioncounter].wronganswerC1);
     $("#E").text(textcompletionquestions[questioncounter].wronganswerD1);
     $("#Eradio").val(textcompletionquestions[questioncounter].wronganswerD1);

     if (textcompletionquestions[questioncounter].correctanswer2) {
     $("#second-question-set").show();
     $("#A2").text(textcompletionquestions[questioncounter].correctanswer2);
     $("#A2radio").val(textcompletionquestions[questioncounter].correctanswer2);
     $("#B2").text(textcompletionquestions[questioncounter].wronganswerA2);
     $("#B2radio").val(textcompletionquestions[questioncounter].wronganswerA2);
     $("#C2").text(textcompletionquestions[questioncounter].wronganswerB2);
     $("#C2radio").val(textcompletionquestions[questioncounter].wronganswerB2);
     }
     else{
     $("#second-question-set").hide();
     }

     if (textcompletionquestions[questioncounter].correctanswer3) {
     $("#third-question-set").show();
     $("#A3").text(textcompletionquestions[questioncounter].correctanswer3);
     $("#A3radio").val(textcompletionquestions[questioncounter].correctanswer3);
     $("#B3").text(textcompletionquestions[questioncounter].wronganswerA3);
     $("#B3radio").val(textcompletionquestions[questioncounter].wronganswerA3);
     $("#C3").text(textcompletionquestions[questioncounter].wronganswerB3);
     $("#C3radio").val(textcompletionquestions[questioncounter].wronganswerB3);
     }
     else{
     $("#third-question-set").hide();
     }
     questioncounter=questioncounter+1;


 }

 
 
 //gets text completion questions from the database and stores it in an array
 function getTextCompletionQuestions() {
 
     $.get("/api/textcompletionq", function(data) {
       textcompletionquestions = data;
       textcompletionquestionsoriginal = data;
       
     //loop through questions to get the correct answers
     displayQuestions();
     getCorrectAnswers();
     });
   }

   function getCorrectAnswers() {

     for (var i=0;i<textcompletionquestions.length;i++) {
     
         //fill correct questions array with answers after doinga  check to see if the answers exist
         if(typeof textcompletionquestions[i].correctanswer1  !== 'undefined' && typeof textcompletionquestions[i].correctanswer1 !== null && textcompletionquestions[i].correctanswer1 !== ""){
             correctanswers.push(textcompletionquestions[i].correctanswer1 );
         }
     
         if(typeof textcompletionquestions[i].correctanswer2  !== 'undefined'&& typeof textcompletionquestions[i].correctanswer2  !== null && textcompletionquestions[i].correctanswer2  !== ""){
             correctanswers.push(textcompletionquestions[i].correctanswer2);
         }
     
         if(typeof textcompletionquestions[i].correctanswer3 !== 'undefined' && typeof textcompletionquestions[i].correctanswer3 !== null && textcompletionquestions[i].correctanswer3  !== ""){
             correctanswers.push(textcompletionquestions[i].correctanswer3);
         }
         
     }

 }

 function gradeQuiz() {

     for(var i=0; i<correctanswers.length;i++){

         if(correctanswers[i]===useranswers[i]) {
             score++;
         }
     }

     $("#finalscorenumber").text(score);
     $("#numofquestions").text(correctanswers.length);
     outof=correctanswers.length;
     scorepercentage= (score/outof)*100;
     numright=score;
     numwrong=outof-score;
     showFinalResult();
     addLocalStorage();
 }


 function sendScore() {


   var newScore = {
      name: $("#fname").val().trim(),
      email: $("#email").val().trim(),
      type:"Text Completion",
      percentage: scorepercentage,
      score: score,
      numright: numright,
      numwrong: numwrong,
      timetaken: (20-parseFloat(timetaken.replace(":", ".")))-.4
   };

     //see if the email has an at sign
     if(($("#email").val().trim()).includes("@")){
        // Send the POST request.
        $.ajax("/sendMail", {
           type: "POST",
           data: {
               name: $("#fname").val().trim(),
               email: $("#email").val().trim(),
               result: score,
               numberOfQuestions: correctanswers.length
           }
       });
       $("#send-score").prop("disabled", true);
      $("#send-score").text( "Score Sent!");
       alert("Your score was sent to your email!");
       }
   
       else(alert("Enter a proper email"));


    //see if we should post to board
   if ($("#publicboard").val()==="yes") {
   // Send the POST request.
   $.ajax("/api/newscore", {
     type: "POST",
     data: newScore,
   }).then(
     function() {
       console.log("sent score to scoreboard");
     }
   );
    }

  
    
 }

   //added an EMAIL endpoint with newScore object data 
   function sendEmail(newScore) {
    $.ajax("/sendMail", {
        type: "POST",
        data: {
            name: newScore.name,
            email: newScore.email,
            result: newScore.numright,
            numberOfQuestions: newScore.numright + newScore.numwrong
        }
    });
}

function addLocalStorage()
{       
    var testdata=["TextCompletion",scorepercentage,((20-parseFloat(timetaken.replace(":", ".")))-.4)]
    var localData=localStorage.getItem("testdata");
    //checking to see if data exists in local storage already
    if(localData==undefined ||localData==null ){

        //if there isn't anything then push testdata
    localStorage.setItem("testdata", testdata);

    }

    else{

        //if there is data in local storage then add new data on top of it.
        var combineddata=testdata.join()+","+localData;
        localStorage.setItem("testdata", combineddata);

    }

}
   //start app  
   getTextCompletionQuestions();
   showStartScreen();

 //these are showing entry screens before the questions begin
 $("#next-page-okay").on("click",function() {
    showQuestion(); 
 });

 
 //check to see if the question was answered before enabling the next button
 $('input[type=radio][class=answer]').change(function() {

 if ($("input[name='set1']:checked").val()) {
     //enable the next question button
     $('#next-question').prop('disabled', false);
     
  }
  else {
    console.log("still have questions to answer")
  }
 });



 //show the next question in the list
 $("#next-question").on("click",function() {

     //save user answers in for final check after checking if they exist
     useranswers.push($('input[name=set1]:checked', '#set-1').val());
     
     if ( $("#second-question-set").is(":visible") ) {
     useranswers.push($('input[name=set2]:checked', '#set-2').val());
     }

     if ($("#third-question-set").is(":visible")) {
     useranswers.push($('input[name=set3]:checked', '#set-3').val());
     }

     if(questioncounter<20){
     displayQuestions();
        //disable the button for the next question
        $('#next-question').prop('disabled', true);
        //uncheck all answers
        $('.answer').prop('checked', false);
     }

     else{
         //take time taken
         timetaken= $('#clock').text();
         $('#timetaken').text(timetaken);
         gradeQuiz();
     }
  
 });

 //send score to user
 $("#send-score").on("click",function() {

    sendScore();
 
});


});
