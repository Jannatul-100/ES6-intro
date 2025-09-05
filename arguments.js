function sum(a,b,c){ // parameters
    // eta just fucntion er moddhe pawa jay
    console.log(arguments)
    console.log(typeof arguments)
    console.log('index 4 of the array like object',arguments[4])

    // array create kora jay
    const args = [...arguments];
    console.log(args)

    //for loop o use kore protteckta pawa jay ar push kora jayna new element and map , filter use kora jayna
    for(const arg of arguments){
        console.log('forof loop each elements in index',arg)
    }


    const result = a + b + c;
    return result;
}

// // outside arguments pawa jayna
// console.log(arguments)

const total = sum(45, 67, 89, 12, 33, 43); //arguments
console.log('total',total);
console.log(typeof sum)
console.log(sum.length)