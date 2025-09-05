// == check kore man same kina, ar === check kore typeof the value
// 1 ar true val equal dekhay, eta type coercion/conversion jekhane 1 ke true vebe boolean e convert kore same for 0 as false
//== string/boolean ke convert kore compare jodi diff type hoy, ar same type duita hoile just compare
//== or === compare check korte chaile primitive thik moto kore but non-primitve kaj hoyna shetate value check korena jay reference e
//non-primitive same val reference hishebe use kore oi variable er nam diye arekta var save kore tokhon equal hobe nahole hoyna

// always use ===
//comparison equal doesnt work for non-primitve type

// const first = [1, 2, 3];
// const second = [1, 2, 3];
// duitake compare korte chaile jekono ektake loop kore dekhba oigular index and valu nibo same porer array er index and value niye compare korbo

// object er ekta var er shob properties nibo first obj value nibp same porer var niye compare korbo loop niye

const first = [];
const second = first;
if(first == second){
    console.log('values are equal')
}
else{
    console.log('values are not equal')
}

// true as 1 and false 0, so the suma of them is 1
const a = true + false;
console.log(a)