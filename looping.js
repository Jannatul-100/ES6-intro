//for of use on array or string not in onject
//for in used in object

const numbers = [1, 6, 8, 9];
//kom use korbo
// for(let i = 0; i < numbers.length; i++){

// }

//for of es6 er
for (const num of numbers){
    console.log(num);
}

const nobab = 'Siraj Uddilla';
for(const char of nobab){
    console.log(char);
}

const glass = {
    name: 'glass', 
    color: 'golden', 
    price: 100, 
    isCleaned: true
};
//for object used for in directly
for(const key in glass){
    const value = glass[key];
    console.log(key, value)
}

// for of indirectly: optional object theke array banay oikhan theke keys and value pabo
const keys = Object.keys(glass);
console.log(keys)

for(const key of keys){
    const value = glass[key];
    console.log(key, value)
}