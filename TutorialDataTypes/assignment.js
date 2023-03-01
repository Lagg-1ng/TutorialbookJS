function firstnumber(){
let user = {
        name: "John",
        years: 30
    };
    
    let {name, years: age, isAdmin = false} = user;
    
    console.log( name ); // John
    console.log( age ); // 30
    console.log( isAdmin ); // false
}
firstnumber();

function twonumber(){
    function topSalary(salaries) {
        salaries = {
            "John": 100,
            "Pete": 300,
            "Mary": 250
          };
        let max = 0;
        let maxName = null;
      
        for(const [name, salary] of Object.entries(salaries)) {
          if (max < salary) {
            max = salary;
            maxName = name;
          }
        }
      
        return maxName;
    }
}
twonumber();