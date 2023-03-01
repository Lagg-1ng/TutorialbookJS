class Rabbit {}

console.log( Rabbit.prototype.__proto__ === Object.prototype ); //  true
console.log( Rabbit.__proto__ === Object ); // false
console.log( Rabbit.__proto__ === Function.prototype ); // true

console.log( Rabbit.getOwnPropertyNames({a: 1, b: 2}) ); // Ошибка