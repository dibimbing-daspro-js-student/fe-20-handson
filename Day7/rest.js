function contohRestOperator(a, b, ...x) {
    console.log(x)
    x.map((number) => console.log(number))
    const filterX = x.filter((number) => number > 5)
    console.log(filterX)
}

contohRestOperator(1, 2, 3, 4, 5, 6, 7, 8, 9)

console.log("============================================================")

const student = {
    name: 'Joni',
    address: 'Jakarta',
    status: 'single'
}

const student2 = {
    name: 'Bima',
    address: 'Surabaya',
    status: 'WNI'
}

const { name, address, status } = student
const { name: student2Name, address: student2Address, status: student2Status} = student2

console.log(name, address, status)
console.log(student.name, student.address, student.status)

console.log(student2Name, student2Address, student2Status)

const fruits = ['grape', 'watermelon', 'apple', 'orange', 'banana']
const [anggur, semangka] = fruits
console.log(anggur, semangka)

console.log("============================================================")

const teacher = {
    name: 'Susi',
    item: 'Matematika',
    age: 30,
    address: 'Jogja',
    car: 'Avanza',
    motor: 'Jupiter'
}

const { name: teacherName, age, ...propertiSisa } = teacher
console.log(propertiSisa)

const teachers = ['Susi', 'Andi', 'Budi', 'Ihsan', 'Nona', 'Asep']
const [x, z,...teachersSisa] = teachers
console.log(teachersSisa)
console.log(budi)