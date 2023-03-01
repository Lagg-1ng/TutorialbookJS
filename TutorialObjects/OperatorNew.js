function ON1(){
    let obj = {};

    function A() { return obj; }
    function B() { return obj; }

    console.log( new A() == new B() ); // true
}
ON1();

function ON2(){
    function Calculator() {

        this.read = function() {
          this.a = 2;
          this.b = 3;
        };
      
        this.sum = function() {
          return this.a + this.b;
        };
      
        this.mul = function() {
          return this.a * this.b;
        };
      }
      
      let calculator = new Calculator();
      calculator.read();
      
      console.log( "Sum=" + calculator.sum() );
      console.log( "Mul=" + calculator.mul() );
}
ON2();

function ON3(){
    function Accumulator(startingValue) {
        this.value = startingValue;
      
        this.read = function() {
          this.value += 3;
        };
      
      }
      
      let accumulator = new Accumulator(1);
      accumulator.read();
      accumulator.read();
      console.log(accumulator.value);
}
ON3();