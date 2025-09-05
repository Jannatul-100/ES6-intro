// onno language type bolte hoy like int, string, bool, object, array...strictly / strongly type language
//  but js e korte hoyna , dynamic type language

// primitive type
const a = 5;
const b = 'Programming';
const c = true;

// non-primitive type
const ages = [45, 44, 54];
const student = {id: 23, class: 7};

console.log(typeof a, typeof b, typeof c, Array.isArray(ages), typeof student)

// value reassign kora
let x = 5;
let y = x;
console.log(x, y)
y = 7;
console.log(x, y)

//non-primitve like array / object jokhon create kore tokhon memory te reference er moddhe thake, value reassign alada bishoy
let p = {job: 'Frontend web developer'};
let q = p;
// partially man set korle ek e jaygay refer korbe tokhon p, q duitai same dibe
q.job = 'Backend web developer';

// p,q ek e jaygay refer kore just new man q te dile tar refer change hoy
// q = {job: 'Backend web developer'};
console.log(p, q)