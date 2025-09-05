const max = Math.max(5,6,74, 66,53,24);
console.log(max)

const numbers = [ 3, 4,56, 67,89,45];
const arrayMax = Math.max(...numbers);
// console.log(numbers)
// //...numbers just give me a numbers
// console.log(...numbers)
console.log(arrayMax)

//used spread operator to copy

const nums = [2, 4, 56, 78];
const numb = nums;
// numb.push(12);
// duitai same array dibe with 12, jokhon numb e nums set kori ete push/pop korle duita array e same hobe
// console.log(nums);
// console.log(numb);

//spread operator ...nums diye korate shudhu nums er push hoy new number mane reference dhore rakhena but normal array dile newNum o add hoy 100
const newNum = [...nums];
console.log(newNum)
nums.push(100);
console.log(newNum)
console.log(nums)

//advanced
const numbs = [...nums, 999]; // add extrs elements while copy
console.log(numbs)


let numm = [3,4,5];
let allNum = [1, 2, ...numm, 6, 7];
console.log(allNum)