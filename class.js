const products = [
    {id: 1, name: 'lenevo', price: 55000},
    {id: 2, name: 'dell', price: 65000},
    {id: 3, name: 'hp', price: 75000},
    {id: 4, name: 'macbook', price: 95000},
]

//similar type method , has some properties
class Product{

    country = 'Bangladesh';
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`talking about ${talk}`);
    }
}

// new keyword diye notun object ready kore
const lenevo = new Product('lenevo');
console.log(lenevo)
lenevo.speak('programming')


class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;

    }
    lecture(){
        console.log('Sir is also teaching math')
    }
}
const tapan = new Teacher('Tapan', 'Physics');
console.log(tapan);
tapan.lecture();

const rashid = new Teacher('Rashid', 'Chemistry');
console.log(rashid)