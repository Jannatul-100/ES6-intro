// primitive type pass by value
let num1 = 5;
let num2 = 7;

function multiply(a, b){
    a = 27
    const result = a * b;
    return result;
}

//primitive type number/string kono function er parameter hishebe pass kori, func er vitore jodi parameter change kori shei outside scope e man change korena
console.log(num1)
const output = multiply(num1, num2);
console.log(output)
console.log(num1)


// kono function e non primitve var pass kori, then vitore change kori tahole outer scopre value ta change kore - pass by reference (object and array)
let student1 = {name: 'Rim', partner: 'Jim'};
let student2 = {name: 'Tim', partner: 'Kim'};
function makeMovie(couple1, couple2){
    couple1.name = 'Rom';
    couple2.partner = 'Mim';
}
console.log(student1, student2)
makeMovie(student1, student2)
console.log(student1, student2)


//example1
function changeNumber(num){
    num = num+10;
    console.log(num)
}
const newNum = 10;
changeNumber(newNum);
console.log(newNum)

//example2
function changeName(p){
    p.name = 'kim';
    console.log(p.name)
}
const newName = {name: 'jim'};
changeName(newName);
console.log(newName.name)