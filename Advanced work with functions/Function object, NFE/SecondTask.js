function sum(a) {
    let currentSum = a;
  
    function f(b) {
        currentSum += b;
        return f;
      }
  
    f.toString = function() {
      return currentSum;
    };
  
    return f;
  }

  let l = sum(1)(2);
  
  console.log( l); // [Function: f] { toString: [Function (anonymous)] }
  console.log( sum(5)(-1)(2) ); // [Function: f] { toString: [Function (anonymous)] }
  console.log( sum(6)(-1)(-2)(-3) ); // [Function: f] { toString: [Function (anonymous)] }
  console.log( sum(0)(1)(2)(3)(4)(5) ); // [Function: f] { toString: [Function (anonymous)] }