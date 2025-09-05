/*
1. var let const
2. default parameters
3. template string `` and also for multiline
4. arrow function
5. destructuring and spread operator
6. Object.keys , Object.values es6 na but Object.entries holo es6
7. for of (es6 er part) : array and string e use hoy
8. for in used in object
*/

//template string
const a = 56;
const numbers = [4, 5, 6];
const person = {
    name: 'Sakib'
};
const message = `Hi, ${person.name} has a: ${a} access to ${numbers[2]}`;
console.log(message)

//arrow function
const square = x => x * x;
const value = square(5);
console.log(value)

const sum = (a, b) => a + b;
const values = sum(5, 6);
console.log(values)

// destructuring 
// age , z nilam ar alada arekta object create kori ...others diye
const {age, z, ...others} = {x: 2, y: 5, z: 3, name: 'Ovi', age: 30};
console.log(age)
console.log(z)
console.log(others)

const [first, second, ...rest] = ['ram', 'sham', 'jodu', 'modhu'];
console.log(first)
console.log(second)
console.log(rest)