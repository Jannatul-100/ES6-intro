function kitchen(){
    let roast = 0;
    return function(){
        roast++;
        return roast;
    }

}
const firstServer = kitchen();
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());

// kono fucntion vitor theke arekta function ke return korle, inner scope er variable outer scope er variable access korte parche -> closure
// outer function call er jonno koyekta new variable create korle tokhon alada alada instance hobe variable function er, alada copy of variable thake jotobar call korbo
