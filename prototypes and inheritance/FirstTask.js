let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

console.log( rabbit.jumps ); // true берем из кролика

delete rabbit.jumps;

console.log( rabbit.jumps ); // null берем из животных

delete animal.jumps;

console.log( rabbit.jumps ); // undefined неоткуда брать