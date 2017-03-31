//back end logic//


var pingPong = function(num) {
  if (num % 15 === 0) {
    return "ping-pong";
  }
  else if (num % 3 === 0) {
    return "ping";
  }
  else if (num % 5 === 0) {
    return "pong";
  }
  else {
    num;
  }

//front end logic//
$(document).ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();

    var userInput = $("#input").val();

    $("#output").text(result);

  });
});
