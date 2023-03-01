function logick1(){
    console.log( null || 2 || undefined );//2
}

function logick2(){
    console.log( console.log(1) || 2 || console.log(3) );//1 -> 2
}
logick2();

function logick3(){
    console.log( 1 && null && 2 );//null
}

function logick4(){
    console.log( console.log(1) && console.log(2) );//1 -> undef
}

function logick5(){
    console.log( null || 2 && 3 || 4 );//3
}

function logick6(){
    if (age >= 14 && age <= 90);
}

function logick7(){
    if (!(age >= 14 && age <= 90));
}

function logick8(){
if (-1 || 0) alert( 'first' );//выполнится -1 

// Не выполнится 0
if (-1 && 0) alert( 'second' );

// Выполнится 1
if (null || -1 && 1) alert( 'third' );
}

function logick9(){
    let userName = "Админ";

if (userName === 'Админ') {

  let pass = "Пароль";

  if (pass === 'Я главный') {
    console.log( 'Здравствуйте!' );
  } else if (pass === '' || pass === null) {
    console.log( 'Отменено' );
  } else {
    console.log( 'Неверный пароль' );
  }

} else if (userName === '' || userName === null) {
  console.log( 'Отменено' );
} else {
  console.log( "Я вас не знаю" );
}
}