// default => if value is not provided, take this as a default
function add(num1 = 99, num2 = 0, num3){
    const result = num1 + num2 + num3;
    console.log(num1, num2, result);
    return result;
}
// const sum = add(5, 7);

// number na dile undefined dekhay
// const sum = add(5);
const sum = add(5);

//for string
function fullName(first, last=''){
    const full = first + ' ' + last;
    console.log(full)
    return full;
}
const name = fullName('jan','nat');

// default man array er jonno empty array
function friends(numbs = []){

}

//empty object for default
function person(human = {}){

}