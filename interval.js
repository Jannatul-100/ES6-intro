console.log(1);
console.log(2);

// setTimeout(() => {
//     console.log(3);
// })

// setTimeout(() => {
//     console.log(3);
// }, 3000)

console.log(4);
console.log(5);
console.log(6);

// interval always cholte thake tai clockid use korbo, then clear korle stop hoy
let num = 0;
const clockId = setInterval(()=>{
    num++
    if(num > 6){
        clearInterval(clockId);
    }
    // console.log('i h u')
    console.log(clockId,num)
},2000)


//settimeout
// let myVar = setTimeout(function, millisecond);
// clearTimeout(myVar)

setTimeout(function () {
    something();
}, 1000);