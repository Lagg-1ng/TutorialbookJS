function mT1(){
function makeUser() {
        return {
        name: "John",
        ref() {
            return this;
        }
        };
    }
    
    let user = makeUser();
    
    console.log( user.ref().name );
}
mT1();//John

function mT2(){
    let calculator = {
        sum() {
          return this.a + this.b;
        },
      
        mul() {
          return this.a * this.b;
        },
      
        read() {
          this.a = 3;
          this.b = 2;
        }
      };
      
      calculator.read();
      console.log( calculator.sum() );
      console.log( calculator.mul() );
}
mT2();

function mT3(){
    let ladder = {
        step: 0,
        up() {
          this.step++;
          return this;
        },
        down() {
          this.step--;
          return this;
        },
        showStep() {
          alert( this.step );
          return this;
        }
      };
      
      ladder.up().up().down().showStep().down().showStep(); 
}
mT3();// показывает 1 затем 0