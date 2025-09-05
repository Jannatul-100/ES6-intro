const glass = {
    name: 'glass', 
    color: 'golden', 
    price: 100, 
    isCleaned: true
};
console.log(glass);

//all properties name
const keys = Object.keys(glass);
console.log(keys);
// output: [ 'name', 'color', 'price', 'isCleaned' ]

//all property values
const values = Object.values(glass);
console.log(values);
// [ 'glass', 'golden', 100, true ]

const pair = Object.entries(glass);
console.log(pair)
//array of array, two dimensional array
// [
//   [ 'name', 'glass' ],
//   [ 'color', 'golden' ],
//   [ 'price', 100 ],
//   [ 'isCleaned', true ]
// ]

// delete keys
// delete glass.isCleaned;
// console.log(glass)

//...shortGlass jeshob property nilam oita bade notun arekta object create kore others properties dibe, ... por jekono nam deya jay
const {isCleaned, ...shortGlass} = glass;
console.log(shortGlass)

//freeze: eta kore rakhle add remove hobena
// Object.freeze(glass)
// glass.source = 'Made in China';
// glass.price = 500;
// delete glass.name;
// console.log(glass)

//seal: existing properties change kore , add or remove korena
Object.seal(glass)
glass.source = 'Made in China';
glass.price = 500;
delete glass.name;
console.log(glass)