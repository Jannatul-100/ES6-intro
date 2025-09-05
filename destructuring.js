const actor = {
    name: 'Ananta',
    age: 30,
    phone: '0178888888',
    money: 12333555544
};

//object destructuring
//if right side is an object left side of destructuring will be object as well
//use property name as a variable that contains the property
//age: boyosh e change kora jay
const {phone, age: boyosh} = actor;


// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;

console.log(phone);
console.log(boyosh);
// console.log(age);

// array destructuring
const numbers = [90, 89];
const [first, sec] = numbers;
console.log(first)

const [x, y] = [12, 99];
console.log(x,y)

//advance
function doubleIt(a, b){
    return [a*2, b*2];
}
const [prothom, ditiyo] = doubleIt(6, 9);
console.log(prothom, ditiyo)
