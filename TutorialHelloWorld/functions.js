/*
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}

Обе функции работают одинаково

*/
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
  }

  function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
  }
  function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

  function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = 6;
  let n = 4;
  
  if (n < 1) {
    console.log(`Степень ${n} не поддерживается, используйте натуральное число`);
  } else {
    console.log( pow(x, n) );
  }