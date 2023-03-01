function firstnumber(){
    function unique(arr) {
        return Array.from(new Set(arr));
    }
    let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];

    console.log( unique(values) ); // Hare,Krishna,:-O
}
firstnumber();

function twonumber(){
    function aclean(arr) {
        let obj = {};
      
        for (let i = 0; i < arr.length; i++) {
          let sorted = arr[i].toLowerCase().split("").sort().join("");
          obj[sorted] = arr[i];
        }
      
        return Object.values(obj);
      }
      
      let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
      
      console.log( aclean(arr) );
}
twonumber();//[ 'PAN', 'hectares', 'era' ]

function threnmber(){
    let map = new Map();

    map.set("name", "John");

    let keys = Array.from(map.keys());

    keys.push("more");

    console.log(keys); // name, more
}
threnmber();//[ 'name', 'more' ]