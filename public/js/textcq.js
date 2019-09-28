

$(document).ready(function(){

    //where we will store all the text completion questions from the database
    var textcompletionquestions = [];
    //always has the items we pulled
    var textcompletionquestions = []; 
    //all the correct answer from teh database
    var correctanswers=[];
    //all the answers the user selects
    var useranswers=[];
    //checks which questions we are on currently
    var questioncounter=0;
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

    
    function getCorrectAnswers() {
        for (var i;i<=textcompletionquestions.length;i++) {
            
            //fill correct questions array with answers after doinga  check to see if the answers exist
            if(typeof textcompletionquestions[i].correctanswer1  !== 'undefined' && textcompletionquestions[i].correctanswer1 !== null){
                correctanswers.push(textcompletionquestions[i].correctanswer1 );
            }
        
            if(typeof textcompletionquestions[i].correctanswer2  !== 'undefined'&& textcompletionquestions[i].correctanswer2  !== null){
                correctanswers.push(textcompletionquestions[i].correctanswer2);
            }
        
            if(typeof textcompletionquestions[i].correctanswer3 !== 'undefined' && textcompletionquestions[i].correctanswer3 !== null){
                correctanswers.push(textcompletionquestions[i].correctanswer3);
            }
            
            alert(JSON.stringify(correctanswers)+ "hi");
        }
    }

    //gets text completion questions from the database and stores it in an array
    function getTextCompletionQuestions() {
        console.log("getting questions");
        $.get("/api/textcompletionq", function(data) {
          textcompletionquestions = data;
          textcompletionquestionsoriginal = data;
          

        //loop through questions to get the correct answers

      displayQuestions();
        });
      }

      getTextCompletionQuestions();
      getCorrectAnswers();
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


        //save user answers in for final check after checking if they exist
        useranswers.push($('input[name=set1]:checked', '#set-1').val());
        
        if (typeof $('input[name=set2]:checked', '#set-1').val() !== 'undefined' && $('input[name=set2]:checked', '#set-1').val() !== null) {
        useranswers.push($('input[name=set2]:checked', '#set-2').val());
        }

        if (typeof $('input[name=set2]:checked', '#set-3').val() !== 'undefined' && $('input[name=set3]:checked', '#set-1').val() !== null) {
        useranswers.push($('input[name=set3]:checked', '#set-3').val());
        }
        alert(useranswers);
        getTextCompletionQuestions();
    });


});

