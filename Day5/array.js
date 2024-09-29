const fruits = ['mangga', 'jeruk', 'apel', 'anggur', 'jambu']

for (let index = 0; index < fruits.length; index++) {
//    console.log(fruits[1])
}

console.log("=================================================")

// console.log(fruits.length)

// method push: menambahkan data di akhir array
fruits.push('leci')
console.log(fruits)

// method unshift: menambahkan data di awal array
fruits.unshift('semangka')
console.log(fruits)

// method shift: menghapus data di awal array
fruits.shift()
console.log(fruits)

// method pop: menghapus data di akhir array
fruits.pop()
console.log(fruits)

// ganti isi array
fruits[3] = 'melon'
console.log(fruits)

const findIndex = fruits.indexOf('naga')
console.log(findIndex)

console.log(fruits.reverse())
console.log(fruits.sort())

fruits.splice(3, 1, "pepaya", "stroberi")
console.log(fruits)

fruits.splice(5, 1)
console.log(fruits)

console.log("=================================================")

const nama = "Dani Pedrosa"
const arrayNama = nama.split(' ')

const arrayJoin = arrayNama.join(' ')
console.log(arrayJoin)

console.log("=================================================")

const array = [1, "Dibimbing", 3, true]
array.unshift([1, 2, 3, 4, 5])
array[3] = 5

console.log(array)



