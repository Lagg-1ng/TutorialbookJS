function maths1(){
    let a = 1, b = 1;

    let c = ++a; // ?
    let d = b++; // d=1 , все ост будет 2 разница в порядке выполнений ++х и х++
}

function maths2(){
    let a = 2;//2

let x = 1 + (a *= 2);//5
}

function maths3(){
    let a = "" + 1 + 0;
    console.log(a);//10
    a = "" - 1 + 0;
    console.log(a);//-1
    a = true + false;
    console.log(a);//1
    a = 6 / "3";
    console.log(a);//2
   a =  "2" * "3";
   console.log(a);//6
    a = 4 + 5 + "px"
    console.log(a);//9px
    a = "$" + 4 + 5; 
    console.log(a);//$45
    a = "4" - 2;
    console.log(a);//2
    a = "4px" - 2 ;
    console.log(a);//NaN
    a = "  -9  " + 5;
    console.log(a);//- 9 5
    a = "  -9  " - 5;
    console.log(a);//-14
    a = null + 1 ;
    console.log(a);//1
    a = undefined + 1;
    console.log(a);//NaN
    a = " \t \n" - 2; 
    console.log(`${a}`);//-2
}
maths3();

function maths4(){
    let a = "1";
    let b = "2"; 

console.log(a + b); // 3
}
maths4();