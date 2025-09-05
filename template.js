const first = 'jaan';
const last = 'pakhi';
const middle = 'tia moyna';

const name = first + ' ' + last + " " + middle ;
console.log(name);

const a = 10;
const b = 20;
const result = 'The sum of ' + a + ' and ' + b + ' is ' + (a+b);
console.log(result)

//backquote/ backtick
const num = [56, 78, 90, 55];
const stud = {name: 'john', age: 20};
// const math = `The sum of ${a} and ${b} is ${a + b}`;
const math = `The sum of num ${num[0]} and john age ${stud.age} is ${num[0] + stud.age}`;
console.log(math)

const email = 'hi john \n' + 
'how are you? \n' + 
'what do you do?';
console.log(email)

const email2 = `Hello alex,
how are you?
what are you doing?
are you free at night?`;
console.log(email2)