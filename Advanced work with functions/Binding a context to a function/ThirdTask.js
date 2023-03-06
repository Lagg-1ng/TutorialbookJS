function sayHi() {
    console.log( this.name );
  }
  sayHi.test = 5;
  
  let bound = sayHi.bind({
    name: "Вася"
  });
  
  console.log( bound.test ); // undef т.к у bind результатом выполнения является другой объект,
  // у него нет свойства test