const person = {
    name: 'Ali',
    job: 'teacher',
    3: 'third',
    'add-ress': 'farmgate'
}

const prof = 'job';
//dot
console.log(person.job)
//bracket
console.log(person['job'])
console.log(person[prof])
// dot notun  var e key set kore jeta sheta kaj korena
console.log(person.prof)
//3 number dot e kaj hoyna
console.log(person['3'])
// '' quotation e 'add-res' type keys use hoyna ,
//  " " use kore, keys gulate -/space thakle bracket notation use hoy dot kaj hoyna
const address = 'add-ress';

console.log(person[address])
console.log(person["add-ress"])

//dot diye clean vabe access kora jay but numbers, 'name', 123name, name-123, $name etc access hoyna but bracket notation diye hoy tai eta powerful