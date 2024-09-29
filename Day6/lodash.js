const _ = require('lodash')

const fruits = ['Apel', 'Jeruk', 'Mangga', 'Semangka', 'Anggur']

// const mapFruits = (fruit) => {
//     console.log(fruit)
// }

fruits.map(n => console.log(n))

console.log('===================================')

_.map(fruits, n => console.log(n))

console.log('===================================')

const fruits2 = [
    {
        name: 'Apel',
        color: 'red',
        price: 2000,
    },
    {
        name: 'Jeruk',
        color: 'orange',
        price: 1500,
    },
    {
        name: 'Mangga',
        color: 'green',
        price: 3000,
    },
    {
        name: 'Semangka',
        color: 'green',
        price: 5000,
    },
    {
        name: undefined,
        color: 'green',
        price: 3000
    }
]

// map
const mapFruits2 = fruits2.map((fruit) => fruit.price)
console.log(mapFruits2)

const mapFruits2WithLodash = _.map(fruits2, 'price')
console.log(mapFruits2WithLodash)

// filter
const filterFruits2 = fruits2.filter((fruit) => fruit.name).map(fruit => fruit.name)
console.log(filterFruits2)

const filterFruits2WithLodash = _.filter(fruits2, x => x.price > 2000)
console.log(filterFruits2WithLodash)
