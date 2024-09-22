// for loop
for (let i = 3; i < 10; i++) {
    // console.log(i)
}

// while loop
let i = 10
while (i > 3) {
    // console.log(i)
    i--
}

// const password = "Dibimbing"
// let userInput = "Dibimb1ng"

// while (userInput !== password) {
    // user input password lagi
// }

// do while loop
let index = 1

do {
    console.log(index)
    index++
} while (index < 1);

// for in loop
const user = {
    nama: "Budi",
    umur: 30,
    alamat: "Jakarta"
}

console.log(user.nama)
console.log(user['nama'])

for (const key in user) {
    console.log(key + ": " + user[key])
}

// for of loop
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

for (const element of numbers) {
    console.log(element)
}

// for each loop
const fruits = ["Apple", "Banana", "Grape", "Orange", "Mango"]

fruits.forEach(function (x) {
    if (x !== "Mango") {
        console.log(x)
    }
})