// if 
const totalBelanja = 5000

if (totalBelanja > 6000) {
    console.log("Selamat anda dapat hadiah!")
}

// console.log("Terimakasih sudah belanja!")

// if/else
const password = "Dibimbing"

const userInput = "Dibimbing"

const userName = "Ihsan"

if (userInput === password) {
    if (userName === "Ihsan") {
        console.log("Hi Ihsan " + "Selamat datang di web")
    } else {
        console.log("Hi user " + "Selamat datang di web")
    }
} else {
    console.log("Password salah!")
}
userInput === password ? console.log("Selamat datang di web") : console.log("Password salah!")

console.log("Terimakasih sudah berkunjung di web ini!")

const umur = 20
if (umur === 20) {
    console.log(20)
} else {
    console.log("umur invalid")
}

umur === 20 ? console.log(20) : console.log("umur invalid")

// if/else/if
const nilaiStudent = 90
let grade = ""

if (nilaiStudent > 80) {
    grade = "A"
} else if (nilaiStudent > 70) {
    grade = "B"
} else {
    grade = "error"
}
// console.log(grade)

// switch-case
const nilaiStudent2 = 85
let grade2 = ""

switch (true) {
    case nilaiStudent2 > 80:
        grade2 = "A"
        break;
    case nilaiStudent2 > 70:
        grade2 = 'B'
        break;
    default:
        grade2 = "error"
        break;
}
// console.log(grade2)

let nomorBulan = 0
let stringBulan = "Desember"

switch (true) {
    case (stringBulan === "Januari"):
        nomorBulan = 1
        break;
    case (stringBulan === "Maret"):
        nomorBulan = 3
        break;
    case (stringBulan === "Desember"):
        nomorBulan = 12
        break;
    default:
        nomorBulan = "Invalid"
        break;
}
// console.log(nomorBulan)

let namaHari = "Selasa"
let jenisHari = ""

switch (namaHari) {
    case "Senin":
    case "Selasa":
    case "Rabu":
    case "Kamis":
    case "Jumat":
        jenisHari = "Hari Kerja"
        break;
    case "Sabtu":
    case "Minggu":
        jenisHari = "Hari Libur"
        break;
    default:
        jenisHari = "Invalid"
        break;
}
console.log(jenisHari)

if (namaHari === "Senin" || namaHari === "Selasa" || namaHari === "Rabu" || namaHari === "Kamis" || namaHari === "Jumat") {
    jenisHari = "Hari Kerja"
} else if (namaHari === "Sabtu" || namaHari === "Minggu") {
    jenisHari = "Hari Libur"
} else {
    jenisHari = "Invalid"
}