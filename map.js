const numbers = [4, 5, 2, 8, 10];

// double the array numbers first process:
// const doubled = [];
// for(const num of numbers){
//     const double = num * 2;
//     doubled.push(double);
// }
// console.log(doubled)

// map => loops through each element of the array and 
// do the operation that you passed in the call back function and 
// hold the result from each operation in an array and finally returns the array
//second process:
function doubleIt(num){
    console.log('Num now:', num)
    return num * 2;
}
const result = numbers.map(doubleIt);
console.log(result)

//shortcut
const double2 = n => n* 2;
const output = numbers.map(double2)
console.log('Shortcut: ',output)

//more shortcut
const output2 = numbers.map(n => n*2);
console.log('More Shortcut: ',output2)