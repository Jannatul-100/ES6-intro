class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;

    }
    sleep(){
        console.log(`Sleeping now ${this.name}`)
    }
    activity(){
        this.sleep();
    }
}
const ali = new Person('Ali', 25);
console.log(ali)
ali.sleep()
const rahim = new Person('Rahim', 25);
rahim.sleep();

const lazy = ali.sleep;