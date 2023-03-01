function camelize(str) {
    str = "list-style-image";
    return str
      .split('-')
      .map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join('');
}

function filterRange(arrF, a, b) {  
  
  let arrF = [5, 3, 8, 1];
  
  let filtered = filterRange(arrF, 1, 4);
  
  console.log( filtered ); // 3,1 (совпадающие значения)
  
  console.log( arrF ); // 5,3,8,1 (без изменений)
}
  filterRange();   

function filterRangeInPlace(arr2, a, b) {
    arr2 = [5, 3, 8, 1];
    for (let i = 0; i < arr2.length; i++) {
      let val = arr2[i];
  
      if (val < a || val > b) {
        arr2.splice(i, 1);
        i--;
      }
    }
  
  }
  
  filterRangeInPlace(arr2, 1, 4); // удалены числа вне диапазона 1..4
  
  console.log( arr2 ); // [3, 1]

function array2(){
    let arr3 = [5,2,1,-10,8];
    arr3.sort((a,b)=> b -a);
    console.log(arr3);
}

function copySorted(arr4) {
    return arr4.slice().sort();
  }
  
  let arr4 = ["HTML", "JavaScript", "CSS"];
  
  let sorted = copySorted(arr4);
  
  console.log( sorted );
  console.log( arr4 );

  function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2]
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    }
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }

  function arr5(){
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let users = [ vasya, petya, masha ];

    let names = users.map(item => item.name);

    console.log( names ); // Вася, Петя, Маша
  }
  arr5();

  function arr6(){
    let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
    let petya = { name: "Петя", surname: "Иванов", id: 2 };
    let masha = { name: "Маша", surname: "Петрова", id: 3 };

    let users = [ vasya, petya, masha ];

    let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
    }));

    console.log( usersMapped[0].id ); // 1
    console.log( usersMapped[0].fullName ); // Вася Пупкин
}
arr6();

function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
  }
  
  let vasya = { name: "Вася", age: 25 };
  let petya = { name: "Петя", age: 30 };
  let masha = { name: "Маша", age: 28 };
  
  let name = [ vasya, petya, masha ];
  
  sortByAge(names);
  
  console.log(names[0].name); // Вася
  console.log(names[1].name); // Маша
  console.log(names[2].name); // Петя


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  // подсчёт вероятности для всех возможных вариантов
  let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
  };
  
  for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
  }
  
  // показать количество всех возможных вариантов
  for (let key in count) {
    console.log(`${key}: ${count[key]}`);
  }

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
  
  let vasyaa = { name: "Вася", age: 25 };
  let petyaa = { name: "Петя", age: 30 };
  let mashaa = { name: "Маша", age: 29 };
  
  let arrname = [ vasyaa, petyaa, mashaa ];
  
  console.log( getAverageAge(arrname) ); // 28


function unique(arrunic) {
    let result = [];
  
    for (let str of arrunic) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  console.log( unique(strings) ); // кришна, харе, :-O

function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }