// task - 1: write an arrow function that will tkae 3 parameters, will multiply the parameters and will return the result
const multiply = (num1, num2, num3) => num1 * num2 * num3;
const mult = multiply(8, 9, 7);
console.log(mult);

//task-2: string in 3 lines in the output
const line = `I am a web developer.
I love to code.
I love to eat biryani.`
console.log(line)

// task-3: write an arrow function that will take 2 parameters, one from me and another default and add those and return the result
const add = (a, b=50) => a + b;
const sum = add(85);
console.log(sum);

// task-4:take an array where the array elements of name, check if length of each elements is even , push ekements with even length to a new array and return it
const friends = ['Alex', 'John', 'Sab', 'Shopnil', 'Rahi'];
const newArray = [];

for(const friend of friends){
    if(friend.length % 2 === 0){
        newArray.push(friend);
    }
}
console.log(newArray);

//task-5: square each element, calculate the sum of squared ,and return the avg of the sum squared

const doMath = (x, y, z) => {
    const square1 = x * x;
    const square2 = y * y;
    const square3 = z * z;
    const sum = square1 + square2 + square3;
    const avg = sum / 3;
    return avg;
};
const result = doMath( 2, 4, 6);
console.log(result.toFixed(2))


//task-6: two array inputs, combine twi arrays and assign them in a new array, find the maximum num from new array
const num1 = [2, 4, 56, 78];
const num2 = [5, 6, 65, 87];

const newNum = [...num1, ...num2];
console.log(newNum)

const max = Math.max(...newNum);
console.log(max)