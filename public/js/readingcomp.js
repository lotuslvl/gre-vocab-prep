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
        showFinalResult();


       
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
            gradeQuiz();
        }
     
    });


});
