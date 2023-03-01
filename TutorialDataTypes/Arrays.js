function arrays1(){
let fruits = ["Яблоки", "Груша", "Апельсин"];

let shoppingCart = fruits;

shoppingCart.push("Банан");

console.log( fruits.length ); // 4
}
arrays1();

function arrays2(){
    let styles = ["Джаз", "Блюз"];
    styles.push("Рок-н-ролл");
    styles[Math.floor((styles.length - 1) / 2)] = "Классика";
    console.log( styles.shift() );
    styles.unshift("Рэп", "Регги");
}
arrays2();//Джаз

function arrays3(){
    let arr = ["a", "b"];

    arr.push(function() {
        console.log( this );
    })

    arr[2](); // [ 'a', 'b', [Function (anonymous)] ]
}
arrays3();

function arrays4(){

  let numbers = [];

  while (true) {

    let value = "Введите число";

    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

console.log(arrays4());//0

function arrays5(arr) {
    let maxSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      let sumFixedStart = 0;
      for (let j = i; j < arr.length; j++) {
        sumFixedStart += arr[j];
        maxSum = Math.max(maxSum, sumFixedStart);
      }
    }
  
    return maxSum;
  }
  
  console.log( arrays5([-1, 2, 3, -9]) ); // 5
  console.log( arrays5([-1, 2, 3, -9, 11]) ); // 11
  console.log( arrays5([-2, -1, 1, 2]) ); // 3
  console.log( arrays5([1, 2, 3]) ); // 6
  console.log( arrays5([100, -9, 2, -3, 5]) ); // 100