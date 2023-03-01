function obj1(){
    let user = {};
    user.name = "John";
    user.surname = "Smith";
    user.name = "Pete";
    delete user.name;
}

function obj2(){
    function isEmpty(obj) {
        for (let key in obj) {
          // если тело цикла начнет выполняться - значит в объекте есть свойства
          return false;
        }
        return true;
      }
}

function obj3(){
    const user = {
        name: "John"
      };
      
      // Работает!
      user.name = "Pete";
      
      // Ошибка
      user = 123;
}

function obj4(){
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
      };
      
      let sum = 0;
      for (let key in salaries) {
        sum += salaries[key];
      }
      
      console.log(sum); // 390
}

function obj5(){
    function multiplyNumeric(obj) {
        for (let key in obj) {
          if (typeof obj[key] == 'number') {
            obj[key] *= 2;
          }
        }
      }
}