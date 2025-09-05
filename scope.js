//if we declare a variable in the function then we have to console in function not outside in the scope
function add(a, b){
    const total = a+b;
    console.log(a,b);
    // console.log(total)

    if(b > 5){
        const sum = 25 + a + b;
    }
    else{
        const sum = 5 + a + b;
        // var diye kono variable declare korle, shei declaration ke scope(if/else...or func/for...) theke ber kore upore ney mane hoisting hoy that means block scope manena
        //var diye declare korbona
        // b>5 hole undefined hove karon var current nibe man set thakena
        var current = sum;
    }
    // console.log(sum)
    console.log(current)
    return total;
}
// console.log(total)
add(5,3);


//hoisting when using var
for(var i = 0; i < 5; i++){
    console.log(i)
}
 console.log('outside:',i)

// //let outside e hoist hoyna
// for(let i = 0; i < 5; i++){
//     console.log(i)
// }
//  console.log('outside:',i)

//function scope er moddhe declare korle full function hoist kore fele
print5()
function print5(){
    console.log('inside print5',5);
}

print10()

// initialize er upore function call kora jabena 
// var diye declare korle just print10 nibe tar vitorer man na so undefined dibe
var print10 = function print10(){
    console.log('inside print10',10);
}

//function  e scope thake and block e scope thake , const jekhane thakbe shekhane available thakbe

