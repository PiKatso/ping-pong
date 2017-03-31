//Business Logic//
var splitToNumbers = function(number){
  var inputString = [];

  }

  number = math.floor(input)
}

function pingPong(num) {
  if (num % 15 === 0) {
    return "ping-pong";
  }
  if (num % 3 === 0) {
    return "ping";
  }
}



function validateinput(string) {
  return ! /[^\d]/.test(string);
}

//UI Logic//
$(document).ready(function(){
  $('form').submit(function(){
    var input = $("input").val();
    if validatedInput(input) === true {
      return $('output').text(results);
    }
    return false;
  });
});
