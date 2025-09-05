// var: no reason to use var
// let , const : usable
// let: allow it to reassign
//const: do not allow it to reassign, but if directly assign na kori tokhon

const money = 200;
const newMoney = money + 500;
console.log(newMoney)

// man jodi abar assign korte hoy tokhon let
let count = 0;
count = count + 10;
console.log(count)

const numbers = [23, 89, 77, 56];
// array er vitore kono element change korte chaile 
// full array reassign kora jabena const e but vitore change hoy
numbers[1] = 55;
numbers.push(7, 9, 66);
console.log(numbers)

//object, const e properties change kora jay but full na eta let diye kore
const students = {
    name: 'moni',
    class: 12
}
students.name = 'raha';
console.log(students)

let student = {
    name: 'moni',
    class: 12
}
student = {name: 'riha', class: 11};
console.log(student);

//loop
let sum = 0;
for(let i = 0; i < 10; i++){
    //num man change hocche but assign hocchena, ekhane num e block e notun kore create kore loop e, 
    // notun kore variable set hoy & man assign hoy loop shesh hole o num rakhe na tai kono jhamela korena
    const num = i;
    sum = sum + num;
}
console.log(sum)