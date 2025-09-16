//practice1
function delayGreetings(name, delayTime) {
  setTimeout(() => {
    console.log(`Hello, ${name}!`);
  }, delayTime);
}

delayGreetings('Alice', 2000);


//practice2
function tellJoke(){
    console.log("Why don't scientists trust atoms? Because they make up everything!")
}

const jokeInterval = setInterval(() =>{
    tellJoke();
}, 2000)

setTimeout(function () {
    clearInterval(jokeInterval);
    console.log("No more jokes!");
}, 10000);


//practice3
async function loadApi(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data)
}

loadApi()