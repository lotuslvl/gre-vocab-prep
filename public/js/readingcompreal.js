$(document).ready(function(){

    //where we will store all the text completion questions from the database
    var readingcompquestions = [];
    //all the correct answer from teh database
    var correctanswers=[];
    //all the answers the user selects
    var useranswers=[];
    //checks which questions we are on currently
    var questioncounter=0;
    //where we store the final score of the quiz
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
    //shows the What to Expect slide and hides other elements on the page
    function showWhatToExpect() {
        $("#start-screen").hide();
        $("#what-to-expect").show();
        $("#tips").hide();
        $("#question-display").hide();
        $("#question-result-display").hide();
        $("#test-result-display").hide();
    }
    //shows the Show Tips slide and hides other elements on the page     
    function showTips() {
        $("#start-screen").hide();
        $("#what-to-expect").hide();
        $("#tips").show();
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
        $("#test-result-display").show();
    }   

    //display 1 question to the user from the list we received from the database
    function displayQuestions() {


        $("#practice-question").text(readingcompquestions[questioncounter].passage)
        $("#practice-question-1").text(readingcompquestions[questioncounter].question1)
        $("#A").text(readingcompquestions[questioncounter].wronganswerA1);
        $("#Aradio").val("A");
        $("#B").text(readingcompquestions[questioncounter].wronganswerB1);
        $("#Bradio").val("B");
        $("#C").text(readingcompquestions[questioncounter].wronganswerC1);
        $("#Cradio").val("C");
        $("#D").text(readingcompquestions[questioncounter].wronganswerD1);
        $("#Dradio").val("D");
        $("#E").text(readingcompquestions[questioncounter].wronganswerE1);
        $("#Eradio").val("E");

        questioncounter=questioncounter+1;
    
    }

    
    
    //gets text completion questions from the database and stores it in an array
    function getTextCompletionQuestions() {
    
        $.get("/api/readingcompq", function(data) {
          readingcompquestions = data;
          
        //loop through questions to get the correct answers
        displayQuestions();
        getCorrectAnswers();
        });
      }

      function getCorrectAnswers() {

        for (var i=0;i<readingcompquestions.length;i++) {
        
            //fill correct questions array with answers after doinga  check to see if the answers exist
                correctanswers.push(readingcompquestions[i].correctanswer);
            
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

        var percentage= (score/correctanswers.length)*100;
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
           type:"Reading Comprehension",
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

    function addLocalStorage()
{       
    var testdata=["Reading Comprehension",scorepercentage,((20-parseFloat(timetaken.replace(":", ".")))-.4)]
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
        showWhatToExpect();
    });

    $("#next-page-gotit").on("click",function() {
        showTips(); 
    });

    $("#next-page-begin").on("click",function() {
        showQuestion(); 
    });
    
    //check to see if the question was answered before enabling the next button
    $('input[type=radio][class=answer]').change(function() {

    if ($("input[name='set1']:checked").val()) {
        //enable the next question button
        $('#next-question').prop('disabled', false);
        
     }
     
    });



    //show the next question in the list
    $("#next-question").on("click",function() {

        //save user answers in for final check after checking if they exist
        useranswers.push($('input[name=set1]:checked', '#set-1').val());
        

        if(questioncounter<9){
        displayQuestions();
           //disable the button for the next question
           $('#next-question').prop('disabled', true);
           //uncheck all answers
           $('.answer').prop('checked', false);
        }

        else{
            timetaken= $('#clock').text();
            $('#timetaken').text(timetaken);
            gradeQuiz();
        }
     
    });


});