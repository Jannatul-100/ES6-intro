//data access 
// array er moddhe object
const data = [{id: 1, name: 'ali', address: 'farmgate'}];
console.log(data[0].address);

const products = {
    count: 5000,
    data: [
        {id: 1, name: 'lenevo laptop', price: 65000},
        {id: 2, name: 'macbook', price: 120000}
    ]
};
console.log(products.data[1].price)

const user = {
    id: 100,
    name: 'Raj',
    address: {
        street: {
            first: '54/1 north side',
            second: 'jahanra garden' ,
            third: 'farmgate'
        },
        city: 'dhaka',
    }

};

const user2 = {
    id: 101,
    name: 'Mithai',
    address: {
        city: 'Noakhali',
        country: 'Bangladesh'
    }

};

//optional chain, ? diye bujhai jodi street er man pai tahole shamne agabe nahole undefined
console.log(user.address.street?.second)
console.log(user2.address.street?.second)
