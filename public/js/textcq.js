

$(document).ready(function(){

    //where we will store all the text completion questions from the database
    var textcompletionquestions = [];
    var questioncounter=0;

    function showStartScreen() {
        $("#start-screen").show();
        $("#what-to-expect").hide();
        $("#tips").hide();
        $("#question-display").hide();
        $("#question-result-display").hide();
        $("#test-result-display").hide();
    }

    function showWhatToExpect() {
        $("#start-screen").hide();
        $("#what-to-expect").show();
        $("#tips").hide();
        $("#question-display").hide();
        $("#question-result-display").hide();
        $("#test-result-display").hide();
    }
         
    function showTips() {
        $("#start-screen").hide();
        $("#what-to-expect").hide();
        $("#tips").show();
        $("#question-display").hide();
        $("#question-result-display").hide();
        $("#test-result-display").hide();
    }

    function showQuestion() {
        $("#start-screen").hide();
        $("#what-to-expect").hide();
        $("#tips").hide();
        $("#question-display").show();
        $("#question-result-display").hide();
        $("#test-result-display").hide();
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

    function displayQuestions() {
        
        $("#practice-question").text(textcompletionquestions[questioncounter].question)
        $("#A").text(textcompletionquestions[questioncounter].correctanswer1);
        $("#B").text(textcompletionquestions[questioncounter].wronganswerA1);
        $("#C").text(textcompletionquestions[questioncounter].wronganswerB1);
        $("#D").text(textcompletionquestions[questioncounter].wronganswerC1);
        $("#E").text(textcompletionquestions[questioncounter].wronganswerD1);

        if (textcompletionquestions[questioncounter].correctanswer2) {
        $("#second-question-set").show();
        $("#A2").text(textcompletionquestions[questioncounter].correctanswer2);
        $("#B2").text(textcompletionquestions[questioncounter].wronganswerA2);
        $("#C2").text(textcompletionquestions[questioncounter].wronganswerB2);
        }
        else{
        $("#second-question-set").hide();
        }

        if (textcompletionquestions[questioncounter].correctanswer3) {
        $("#third-question-set").show();
        $("#A3").text(textcompletionquestions[questioncounter].correctanswer3);
        $("#B3").text(textcompletionquestions[questioncounter].wronganswerA3);
        $("#C3").text(textcompletionquestions[questioncounter].wronganswerB3);
        }
        else{
        $("#third-question-set").hide();
        }
        questioncounter=questioncounter+1;
    
    }

    

    //gets text completion questions from the database and stores it in an array
    function getTextCompletionQuestions() {
        console.log("getting questions");
        $.get("/api/textcompletionq", function(data) {
          textcompletionquestions = data;
          displayQuestions();
        });
      }


      getTextCompletionQuestions();
      showStartScreen();



    //these are showing entry screens before the questions
    $("#next-page-okay").on("click",function() {
        showWhatToExpect();
    });


    $("#next-page-gotit").on("click",function() {
        showTips(); 
    });

    $("#next-page-begin").on("click",function() {
        showQuestion(); 
    });
    
    //show the next question in the list
    $("#next-question").on("click",function() {
        getTextCompletionQuestions();
    });


});

