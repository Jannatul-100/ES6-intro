/*
truth:
- true
- any number(+ve, -ve) will be truth other than 0
- any string except empty string
- '0', 'false' as truth
- empty object {} or object
- empty array [] or array

false:
- false
- 0
-empty string('') but space dile truth hoy
- undefined => let x;
- null
 */
// const x = false;
// const x = 4;
// const x = 0;
// const x = 'string';
// const x = 'false';
// let x = null;
// let x = {};
// let x = {a:5};
// let x = [];
// let x = [45];
let x = [45];
console.log(x)
if(x){
    console.log('value of x is truth');
}
else{
    console.log('value of x is false');
}

//optional
//check falsy
const y = '';
if(!y){
    console.log('value is falsy')
}
//check true
const z = ' ';

if(!!z){
    console.log('value is truthy')
}