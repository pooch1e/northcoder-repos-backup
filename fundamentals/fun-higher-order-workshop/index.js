// utility functions
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function identity(input) {
  return input;
}

function increment(num) {
  return add(num, 1);
}

// higher-order functions
function identityF(value) {
  return function () {
    return value;
  };
}

function addF(num) {
  return function (anotherNum) {
    return num + anotherNum;
  };
}

function curry(func, value) {
  //absolutely no clue how this works?

  return function (secondValue) {
    return func(value, secondValue);
  };
}

function liftF(func) {
  return function (arg1) {
    return function (arg2) {
      return func(arg1, arg2);
    };
  };
}

function once(takeAFuncArgument) {
  let hasBeenCalled = false;
  let result;
  return function (...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      result = takeAFuncArgument.apply(this, args)
    }
    return result;
  }
}

//takes a binary function as an argument eg function(x, y)
//returns a unary function eg function(X)

function twice(myFunc) {
  //binary func
  function mySingleArgument(argument) {
    return myFunc(argument, argument);
  }

  return mySingleArgument;
}
//so as I understand this one, it's like a factory function, except instead of returning a method call - you invoke the function inside each other
function composeU(func, func2) {
  const square = func;
  const double = func2;
  function x(x) {
    return double(square(number));
  }
  return number;
}

function composeB(a, b) {
  //return function that calls two HOF's

  function returnThis(x, y) {
    return b(a(x, y));
  }
  return returnThis;
}

function limit(binaryFunc, limit) {
  let limitCount = 0;
  // have 2 functions, one to control count and one to stop running binary func if limit is not reached
  return function checkLimitReached(a, b) {
    //params of binary func passed in

    if (limitCount < limit) {
      limitCount++;
      console.log(`ive been called ${limitCount} times`);
      return binaryFunc(a, b); // was just calling it but not returning a value
    } else {
      return undefined;
    }
  };
  //if limit function reached, returns undefined needs check to skip next functio
}

function from(int) {
  //check up to int and run function this number of times kinda making for loop
  let count = int; //state

  return function callNum() {
    // does the work!

    console.log(count);
    return count++;
  };
}

function to(from, int) {
  let limit = int;
  let finished = false;

  return function generate() {
    const count = from();
    if (count < limit){
    return count;
    } else if (count >= limit) {
      finished = true;
      return undefined;
    }
  };
}

function fromTo(start, end) {
  let count = start;
  return function generateRange() {
    if (count < end) {
    return count++
  } else {
    return undefined;
  }
  }
}

function element(array, rangeFunc) {
  // let rangeCount = rangeFunc();
  // console.log(rangeCount)
  return function () {
    // rangecount calls subsequent inside func works
    for (let i = 0; i < array.length; i++) {
      let rangeCount = rangeFunc();
      console.log(rangeCount)
      console.log(array[rangeCount])
      return array[rangeCount]
    }
  }

}

function collect() {}

function filter() {}

function concat() {}

function fibonacciF() {}

function genSymF() {}

function genSymFF() {}

function counter() {}

function revokable() {}

module.exports = {
  identity,
  identityF,
  add,
  subtract,
  multiply,
  increment,
  addF,
  curry,
  liftF,
  once,
  twice,
  composeU,
  composeB,
  limit,
  from,
  to,
  fromTo,
  element,
  collect,
  filter,
  concat,
  fibonacciF,
  genSymF,
  genSymFF,
  counter,
  revokable,
};
