"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var result;
  var temp = original.value;
  var regexp = /^\s*([-+]?\d+(?:\.\d*)?(?:e[-+]?\d+)?)\s*((?:f(?:a(?:r(?:e(?:n(?:h(?:e(?:i(?:t)?)?)?)?)?)?)?)?)|(?:c(?:e(?:l(?:s(?:i(?:u(?:s)?)?)?)?)?)?))\s*$/i;

  var m = temp.match(regexp);

  if (m) {
    var num = m[1];
    var type = m[2];
    type = type.toUpperCase();
    num = parseFloat(num);
    if (type.charAt(0) == 'C') {
      result = (num * 9/5)+32;
      result = result.toFixed(1)+" Farenheit"
    }
    else {
      result = (num - 32)*5/9;
      result = result.toFixed(1)+" Celsius"
    }
    alert(result);
  }
  else {
    alert("ERROR! Try something like '-4.2C' instead");
  }
}
