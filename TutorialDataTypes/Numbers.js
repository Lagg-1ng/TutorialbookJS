function Numbers1(){
    let a = 6;
    let b = 2;//не нашел наналог prompt на nodeJS

    console.log(a+b);
}
Numbers1();

function Numbers2(){
    console.log(6.35.toFixed(20));//6.3499999999999964473
    console.log(1.35.toFixed(20));//1.3500000000000008882

    console.log(6.35.toFixed(5));//6.35000
}
Numbers2();

function Numbers3(){
    let num ;

    do{
        num = 12;

    }while (!isFinite(num));
    if (!num === null || num === '') return null;

    return +num;

}

console.log(`Число ${Numbers3()}`);//число 12

function Numbers4(){
    let i = 0;
    while (i < 11){
        i += 0.2;
        if (i>9.8 && i < 10.2){
            console.log(i);
        }
    }
}
Numbers4();//9.99999999999996 and 10.19999999999996

function Numbers5(min, max){
    return min + Math.random() * (max - min);
}

console.log(Numbers5(1,5));//3.383647847973551
console.log(Numbers5(1,5));//2.188983845944895
console.log(Numbers5(1,5));//3.079015406977219

function Numbers6(max,min){
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
console.log(Numbers6(1,10));//8