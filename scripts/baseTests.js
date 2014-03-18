var Calculator = function() {
  'use strict';
};

Calculator.prototype.add = function add(x,y) {
  if (typeof(x) !== 'number' || typeof(y) !== 'number') {
    return 'error';
  }

  return x + y;
};

Calculator.prototype.subtract = function subtract() {
  var args = Array.prototype.slice.call(arguments),
      total,
      error = false,
      errorMessage;

  args.forEach(function(element, index) {
    if (typeof(element) !== 'number') {
      error = true;
      errorMessage = 'ERROR: Argument '+(index+1)+' is not a number';
    } else {
      if (index === 0) {
        total = element;
      } else {
        total-= element;
      }
    }
  });

  if (error) {
    return errorMessage;
  } else {
    return total;
  }
};