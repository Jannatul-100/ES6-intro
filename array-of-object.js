const products = [
    {id: 1, name: 'lenevo', price: 55000},
    {id: 2, name: 'dell', price: 65000},
    {id: 3, name: 'hp', price: 75000},
    {id: 4, name: 'macbook', price: 95000},
]
//map 
const names = products.map(product => product.name);
console.log(names)
const prices = products.map(product => product.price);
console.log(prices)

//forEach
const ids = products.forEach(product => product.id);
console.log(ids)
products.forEach(product => console.log(product.id));

//filter
const expensive = products.filter(product => product.price > 60000);
console.log(expensive)

// find
const cheap = products.find(product => product.price < 60000);
console.log(cheap)

//reduce
const total = products.reduce((prev, curr) => prev + curr.price, 0);
console.log(total)