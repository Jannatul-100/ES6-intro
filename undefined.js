/* 
8 ways to get undefined
1. variable that is not initialized will give undefined
2. function with no return
3. parameter that is not passed will be undefined
4. if return has nothing on the right side will return undefined
5.property that doesn't exists on an object will give undefined
6. accessing array elements outside of the index range
7. deleting an element inside an array
8. set a value to directly undefined
*/
//1
let first;
console.log(first)

//2
function second(a, b){
    const total = a + b;
}
const result = second();
console.log(result)

//3
function third(a, b, c, d){
    const total = a + b + c + d;
    console.log(a, b, c, d)
}
third(2, 5);

//4
function noNegative(a, b){
    if(a<0 || b<0){
        return;
    }
    return a+b;
}
const result2 = noNegative(2, -5);
console.log(result2)

//5
const fifth = {id:2, name:'Shopno', age: 24};
console.log(fifth.age, fifth.salary)

//6
const sixth = [4, 5, 6, 7, 89];
console.log(sixth[1], sixth[5], sixth[10])

//7
const sixth2 = [4, 5, 6, 7, 89];
delete sixth2[1]
console.log(sixth2[1], sixth2[5], sixth2[10])
console.log(sixth2)

//8
const eighth = undefined;
const ninth = null;
const data = {results: [], updated: null};
console.log(typeof undefined, typeof null)