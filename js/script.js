//back end logic//
var pingPong = function(num) { //create function to apply logic statements//
  if (num % 15 === 0) {   //first rule-divisible by 15//
    return "ping-pong";
  }
  else if (num % 3 === 0) {  //
    return "ping";
  }
  else if (num % 5 === 0) {
    return "pong";
  }
  else {
    num;
  }
  return num;
};

var inputUI = function(input) {
  var inputArray = [];

  for (let i = 1; i <= input; i++) {
    inputArray.push(pingPong(i));
  }
  var result = inputArray.join(" ");
  return result;
};


//front end logic//
$(document).ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("#input").val());

    $("#output").text(inputUI(userInput));

  });
});
