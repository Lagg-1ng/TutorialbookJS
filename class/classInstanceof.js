function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

console.log( a instanceof B ); // true
/* instanceof  не учитывает функцию при проверке, а prototype 
 просто проверяет на совпадение и получается что в данном примере возвращает true*/