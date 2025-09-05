//function declaration:
// function add(a,b){
//     const result = a + b;
//     return result;
// }

function add(a,b){
    return a + b;
}
const sum = add(5, 90);
console.log(sum);

//function expression
const add2 = function(a, b){
    return a+b;
}
const sum2 = add2(55, 90);
console.log(sum2);

// arrow function
const add3 = (a, b) => a + b;
const sum3 = add3(85, 90);
console.log(sum3);

const add4 = (num1, num2, num3) => num1 + num2 + num3;
const sum4 = add4(85, 90, 77);
console.log(sum4);

const multiply = (n1 , n2) => n1 * n2;
const mult = multiply(85, 9);
console.log(mult);