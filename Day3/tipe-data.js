let angka = 1.5
let fruit = "Grape"
let isNumber = typeof angka === "string"

console.log(isNumber)

// if (isNumber) {
//     console.log(typeof angka === "number")
// }

const student = {
    nama: "Ihsan",
    umur: 23,
    alamat: "Jogja"
}

// console.log(`Namaku adalah ${student.nama}, umurku ${student.umur}, aku berasal dari ${student.alamat}`)

let a = 20
const b = 12
a += b
a = a + b // ini sama aja kaya di baris 21

a -= b
a = a - b // ini sama aja kaya di baris 24
console.log('a: ', a)

const total = a + b
const totalPengurangan = a - b

const hasilPerkalian = total * totalPengurangan
const hasilPembagian = total / totalPengurangan
// console.log(hasilPerkalian, hasilPembagian, total)


const validasiPertama = a > 10 && b < 24
const validasiKedua = hasilPerkalian < hasilPembagian || a < total

if (!validasiPertama) {
    console.log("Masuk kondisi if pertama")
} else if (validasiKedua) {
    console.log("Masuk kondisi if kedua")
}

// let user = "Bima"

// if (user === "Bima") {

// }

console.log(2 === "2")

const aneh = 1 + '1'
console.log(typeof aneh)

let isTidur

console.log(!isTidur)



