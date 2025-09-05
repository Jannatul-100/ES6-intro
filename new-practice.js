//practice-1: odd to even numbers, means num + 1
const oddNumbers = [1, 3, 5, 7, 9];

// for of loop
const evenArray = [];
for (let num of oddNumbers) { 
    num = num + 1;            
    evenArray.push(num);      
}

console.log('Using loop:',evenArray); 

//map
const evenNumbers = oddNumbers.map(num => num + 1);
console.log('Even the numbers:',evenNumbers);

//practice-2: given a array which all numbers are divisible by 10
const numbers = [33, 50, 79, 78, 90, 101, 30];

//filters
const filters = numbers.filter(n => n % 10 === 0)
console.log(filters)

//find
const finds = numbers.find(n => n % 10 === 0)
console.log(finds)


//practice-3:
const instructor = [
    {name: 'Nodi', age: 28, position: 'Senior'},
    {name: 'Akil', age: 26, position: 'Junior'},
    {name: 'Shobuj', age: 30, position: 'Senior'}
]

//for loop
for(const ins of instructor){
    if(ins.position === "Senior"){
        console.log(ins.name);
    }
}
// using filter
const instructorFilter = instructor.filter(i => i.position === "Senior")
console.log(instructorFilter.map(i => i.name))

//practice-4:
const people = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22}
]

//using for loop
let sum = 0;
for(const p of people){
    sum = sum + p.age;
}
console.log('Using for loop:',sum)

// using reduce
const total = people.reduce((p, c) => p + c.age, 0);
console.log('Using reduce function:',total)
