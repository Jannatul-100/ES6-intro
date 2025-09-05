// function greeting(person){
//     console.log(person);
// }
// const name = 'Hello';
// greeting(name)

// // const num = 66;
// const num = [4, 5, 6];
// greeting(num)

// const laptop = {price: 50000, brand: 'lenevo', memory: '8gb'};
// greeting(laptop)


// uporer function er parameter function dile vitore call kora jay
// kono fucntion ke onno functione parameter hishebe pathale eta ke callback function bole
// arekta parameter newa jay function er shathe and func call korle new para oi function e boshano jabe 
function greeting(greetingHandler, name){
    greetingHandler(name);
}
function greetingHandler(name){
    console.log('Good Morning', name);
}

function greetEvening(name){
    console.log('Good Evening', name);    
}

function greetNight(name){
    console.log('Good Night', name);    
}

greeting(greetingHandler, 'Tom')
greeting(greetingHandler, 'Rom')
greeting(greetEvening, 'Kim')
greeting(greetNight, 'Rim')

//call back function for document
function submitHandler(){
    console.log('Submit button clicked');    
}
document.getElementById('btn-submit').addEventListener('click', submitHandler)