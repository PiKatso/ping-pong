//back end logic//
var pingPong = function(num) { //create function to apply logic statements//
  if (num % 15 === 0) {   //first rule-divisible by 15//
    return "ping-pong";
  }
  else if (num % 3 === 0) {  //second rule-divisible by 3//
    return "ping";
  }
  else if (num % 5 === 0) {  //third rule-divisible by 5//
    return "pong";
  }
  else {
    num;
  }
  return num;
};

var inputUI = function(input) {   //varible to call function withing user interface//
  var inputArray = [];

  for (let i = 1; i <= input; i++) {   //loop through each element pushing the result of the pingPong function//
    inputArray.push(pingPong(i));
  }
  var result = inputArray.join(""); //join elements together and return a result//
  return result;
};


//front end logic//
$(document).ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("#input").val()); //collect and parse input from user//
    $("#output").empty();   //empty out past results in the output section before giving new answer//
    $("#output").text(inputUI(userInput)); //call function inputUI and apply to collected user input and show in user output.//

  });
});
