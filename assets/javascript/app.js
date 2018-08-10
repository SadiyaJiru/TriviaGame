var number = 60;
var intervalId;
var correct = 0;
var incorrect = 0;
function start() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000); //1 second decroment
}
function decrement() {
  number--;
  //  Show the number in the #timer tag.
  $("#timer").html("<h2> Seconds Left &#10071 " + number + "</h2>");

  //  Once number hits zero...
  if (number === 0) {

    //stops the timer.
    stop();
    //  Alert the user that time is up.
    // alert("Time Up's! You got " + correct + " Questions Correct" + " And " + incorrect  + " Wrong");
    $("#quiz").html("YOUR TIME IS UP &#10071&#10071 <br><br>"+"Correct  &#9989;   " + correct + " <br><br>"
    + "Incorrect &#10060;  "+incorrect + " <br><br>" + "Refresh to play again!",  href,'index.html',  );
    $("#quiz").css({"font-size": "50px"});
  }
} 
function stop() {
  
  //  We just pass the name of the interval to the clearInterval function.
  clearInterval(intervalId);
}
//  Execute the start function.
start();

function check() {
  event.preventDefault();
  correct = 0;
  incorrect = 0;

  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var question6 = document.quiz.question6.value;


  if (question1 == 54) {
    correct++;
  } else {
    incorrect++;
  }
  if (question2 == "Addis Ababa") {
    correct++;
  } else {
    incorrect++;
  }
  if (question3 == "Kenya") {
    correct++;
  } else {
    incorrect++;
  }
  if (question4 == "Cheetah") {
    correct++;
  } else {
    incorrect++;
  }
  if (question5 == "Arabic") {
    correct++;
  } else {
    incorrect++;
  }
  if (question6 == "85%") {
    correct++;
  } else {
    incorrect++;
  }

  // alert(
  //   "you got " +
  //     correct +
  //     " questions right" +
  //     " & you got " +
  //     incorrect +
  //     " questions wrong"
  // );
 

  $("#afterSubmit").attr("style", "visibility: visible");
  $("#quiz").html("Results &#9997 <br><br>"+"Correct  &#9989;   " + correct + "<br><br>"
   + "Incorrect &#10060; "+ incorrect + "<br><br>" + "Refresh to play again!"  );
   $("#quiz").css({"font-size": "50px"});
   



  // $("#quiz").htnls("you got " + incorrect + " questions wrong");
  stop();
  clearInterval(intervalId);
}

$('.submitBtn').click(check);



