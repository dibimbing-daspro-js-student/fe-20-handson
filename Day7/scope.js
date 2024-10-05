// import { name, age } from './export.js'
const profil = require('./export.js')

let globalVar = 'Ini adalah global variable'

function myFunction(arguments) {
    let functionVar = 'Ini adalah function variable'
    var tipeVar = 'Ini adalah tipe variable var'

    if (arguments) {
        let scopeVar = 'Ini adalah scope variable'

        console.log(`Inside if block: ${globalVar}, ${functionVar}, ${scopeVar} ${tipeVar}`)
    } else {
        let scopeVar = 'Ini adalah scope variable'

        console.log(`Inside if block: ${globalVar}, ${functionVar}, ${scopeVar}, ${tipeVar} 2`)
    }
}

myFunction(false)
console.log(profil)
console.log(`My name is ${profil[0]} and I'm ${profil[1]} years old`)