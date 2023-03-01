function OW1(){
    let i = 3;

console.log(i--); // выведет 3, затем уменьшит i до 2

console.log(i--) // выведет 2, затем уменьшит i до 1

console.log(i--) // выведет 1, затем уменьшит i до 0

// все, проверка while(i) не даст выполняться циклу дальше
}
OW1();
/*
function OW2(){
    let i = 0;
        while (++i < 5) console.log( i );//1-4

    let i = 0;
while (i++ < 5) console.log( i );//1-5
}
*/
function OW3(){
    for (let i = 0; i < 5; ++i) console.log( i );//0-4

for (let i = 0; i < 5; i++) console.log( i );//0-4
}

function OW4(){
    for (let i = 2; i <= 10; i++) {
        if (i % 2 == 0) {
          console.log( i );
        }
      }
}

function OW5(){
    let i = 0;
    while (i < 3) {
    console.log( `number ${i}!` );
    i++;
    }
}

function OW6(){
    let num;

    do {
    num = 88;
    } while (num <= 100 && num);
}

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  console.log( i ); // простое число
}