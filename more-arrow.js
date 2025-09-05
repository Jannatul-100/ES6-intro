const diff = (x, y) => x - y;
const sub = diff(89, 77);
console.log(sub)

const multiply = (first, second, third) => first * second * third;
const mult = multiply(34, 56, 78);
console.log(mult);

//implicit return
const getAge = (person) => person.age;

const student = {name: 'Rahi', age: 25};
const age = getAge(student);
console.log(age)

//single parameter e bracket charao possible
const getThird = numbers => numbers[2];
const third = getThird([5, 8 , 9 ,7]);
console.log(third)

const doubleIt = num => num * 2;
const result = doubleIt(45);
console.log(result)

//no parameter
const getPi = () => Math.PI;
console.log(getPi());

// large arrow function , if you want to get anything return from this function, 
// then you have to use the return keyword
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mul = x * y * z;
    const res = sum + mul;
    return res;
}
const resultMain = doMath(6, 7 , 8);
console.log(resultMain)