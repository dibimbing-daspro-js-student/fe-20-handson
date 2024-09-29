const student = {
    name: 'Rifqi',
    age: 18,
    address: 'Bekasi'
}

console.log(student.name)
console.log(student['name'])

student.age = 20
student.office = 'Dibimbing'

console.log(student)

console.log('==========================================')

const car = {
    // properti
    type: 'Fiat',
    model: '500',
    color: 'white',

    // method
    start: function () {
        console.log('Ini method start')
    },
    drive: function () {
        console.log('Ini method start')
    },
    brake: function () {
        console.log('Ini method start')
    },
    stop: function () {
        console.log('Ini method start')
    },
}

const car2 = {
    // properti
    type: 'Jazz',
    model: 'All New',
    color: 'red',

    // method
    start: function () {
        console.log('Ini method start')
    },
    drive: function () {
        console.log('Ini method start')
    },
    brake: function () {
        console.log('Ini method start')
    },
    stop: function () {
        console.log('Ini method start')
    },
}

console.log(car)

// for (const properti in car) {
//     console.log(car[properti])
// }

console.log('==========================================')

function Car(type, model, color) {
    this.type = type
    this.model = model
    this.color = color

    this.start = function () {
        console.log('Ini method start')
    }

    this.drive = function () {
        console.log('Ini method start')
    }

    this.brake = function () {
        console.log('Ini method start')
    }

    this.stop = function () {
        console.log('Ini method start')
    }
}

const fiat = new Car("Fiat", "500", "white")
const jazz = new Car("Jazz", "All New", "red")
const fortuner = new Car("Fortuner", "All New", "black")

console.log(fiat.model)
console.log(jazz.type)

console.log('==========================================')

const student2 = {
    nama: "Ronaldo",
    nilaiRataUjian: [50, 80, 90],
    rataNilaiUjian: 0,

    hitungRataNilaiUjian: function () {
        let totalNilaiUjian = 0

        for (let index = 0; index < this.nilaiRataUjian.length; index++) {
            totalNilaiUjian += this.nilaiRataUjian[index]
        }

        this.nilaiRataUjian = totalNilaiUjian / this.nilaiRataUjian.length

        console.log(this.nilaiRataUjian)
    }
}

student2.hitungRataNilaiUjian()

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(typeof array)
// console.log(typeof student2)

// console.log(Array.isArray(array))
// console.log(Array.isArray(student2))