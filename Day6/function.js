greet("M Ihsan")

function greet(name) {
    console.log('Hello world!' + ' My name is ' + name);
}

const greetArrowFunction = (name) => {
    console.log('Hello world!' + ' My name is ' + name)
};

greetArrowFunction("Ihsan")

function add(a, b) {
    const result = a + b

    console.log(result)
}

// add(5, 6)
// add(8, 3)
// add(5, 6)

// console.log(hasilAdd)
// console.log(add(7, 2))

function pengurangan(num1, num2) {
    const result = num1 - num2
    
    if (result < 0) {
        return 
    }

    return result
}

let hasilPengurangan = pengurangan(4, 2)
console.log(hasilPengurangan)

function isTrue(parameter) {
    return parameter
}

isTrue(true)

console.log("===================================================")

const x = (num) => {
    return num * num
}

console.log(x(3))

let hasilPengurangan2 = function (num1, num2) {
    const result = num1 - num2
    
    if (result < 0) {
        return 
    }

    return result
}

console.log("===================================================")

function greet2(name, createCircleFunction) {
    console.log('Hi ' + name)
    createCircleFunction()
}

function createCircle() {
    console.log('I am callback function')
}

greet2("Ihsan", createCircle)