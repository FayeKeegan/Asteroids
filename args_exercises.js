var sum = function(args){
  var argsArray = Array.prototype.slice.call(arguments);
  var result = 0;
  for (var i = 0; i < argsArray.length; i++) {
    result += argsArray[i];
  }
  return result;
};


Function.prototype.myBind = function(args){
  var fn = this;
  var bindArgs = Array.prototype.slice.call(arguments, 1);
  var context = arguments[0];
  return function (){
    var callArgs = Array.prototype.slice.call(arguments);
    fn.apply(context, bindArgs.concat(callArgs));
  };
};


var curriedSum = function(numOfArgs) {
  var numbers = [];
  var numArgs = numOfArgs;
  var _curriedSum = function(number) {
    numbers.push(number);
    if (numbers.length === numArgs) {
      var sum = 0;
      for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      return sum;
    } else {
      return _curriedSum;
    }
  };
  return _curriedSum;
};

Function.prototype.curry = function (numArgs) {
  var args = [];
  var fn = this;
  function _curry(singleArg) {
    args.push(singleArg);
    if (args.length === numArgs) {
      return fn.apply(this, args);
    } else {
      return _curry;
    }
  }
  return _curry;
};

function threeSum(first, second, third){
  return first + second + third ;
}

console.log(threeSum.curry(3)(1)(2)(4));
