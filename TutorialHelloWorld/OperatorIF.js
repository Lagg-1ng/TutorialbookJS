function oper1(){
   if ("0") {
        console.log( 'Привет' );
    }
}

function oper2(){
    let value = 0;

if (value > 0) {
  console.log( 1 );
} else if (value < 0) {
  console.log( -1 );
} else {
  console.log( 0 );
}
}
oper2();

function oper3(){
    let result,a=3,b=6;
    result = (a + b < 4) ? 'Мало' : 'Много';
}

function oper4(){
    let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';
}