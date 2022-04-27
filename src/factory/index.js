const factory = require('./factory');

const myLaptop = factory.createDevice('Laptop', {
    ram: 16,
    ssd: 512,
    name: 'MacBook Pro'
});
const myTablet = factory.createDevice('Tablet', {
    ram: 4,
    hdd: 128,
    name: 'iPad do Marcos',
    network: '5G'
});
// const myOther = factory.createDevice('Other', {
//     ram: 4,
//     hdd: 128,
//     name: 'iPad do Marcos',
//     network: '5G'
// });

console.log(myLaptop);
console.log(myTablet);
