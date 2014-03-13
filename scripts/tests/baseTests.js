'use strict';

describe('Calculator', function() {
  var c;

  beforeEach(function() {
    c = new Calculator();
  });

  describe('add', function() {
    it('should add the numbers that are passed in as parameters', function() {
      expect(c.add(1,1)).toBe(2);
    });

    it('should throw an error if either param is not a number', function() {
      expect(c.add('this',2)).toBe('error');
    })
  });

  describe('subtract', function() {
    it('should subtract two numbers', function() {
      expect(c.subtract(4,1)).toBe(3);
    });

    it('should handle three or more numbers', function() {
      expect(c.subtract(4,1,1)).toBe(2);
    });

    it('should throw an error if a param is not a number. Not only that, but it should tell me which one is broken', function() {
      expect(c.subtract(4,'x',1)).toBe('ERROR: Argument 2 is not a number');
    });
  });
});