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
      total;

  args.forEach(function(element, index) {
    if (typeof(element) !== 'number') {
      return 'ERROR: Argument '+(index+1)+' is not a number';
    } else {
      if (index === 0) {
        total = element;
      } else {
        total-= element;
      }
    }
  });

  return total;
};