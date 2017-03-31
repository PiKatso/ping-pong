//Business Logic//
var splitToNumbers = function(number){
  var inputNumbers = [];

}

number = math.floor(input)






function validateinput(number) {
  return ! /[^\d]/.test(number);
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
