// metodos de console

console.log("Hello Node!")
console.info("Alert")
console.warn("Warn")
console.error("Error")

// variáveis

var a =10
let b = 15
const c = 20

a = 'oi'
b = 500

console.log(a,b)

// tipos de dados

// string
const name = "Dobby"
console.log(typeof name)
// number
const age = 120
console.log(typeof age)
// boolean
const isApproved = false 
console.log(typeof isApproved)
// nulo
let lastName = null
console.log(typeof lastName)
// undefined
let address
console.log(typeof address)
// array - lista
const languages = ['JavaScripto', 'Python']
console.table(typeof languages) // o 'table' cria uma tabela dos elementos 
// objeto
const user = {name: 'Dobby', email: 'dobby@gmail.com'}
console.log(typeof user)

// metodos strigs

const fullName = "Albus Wulfric Percival Brian Dumbledore"

// conta os caracteres de uma variável
console.log(fullName.length)

// split separa as palavras
const stringToArray = fullName.split(' ')
console.log(stringToArray)

// deixa a string com caracteres maiúsculos
console.log(fullName.toUpperCase())

// deixa a string com caracteres minúsculos
console.log(fullName.toLowerCase())

// encontra o índice do início da palavra
console.log(fullName.indexOf("Wulfric"))

// retirs a string pelo índice
console.log(fullName.slice(5, 13)) 

// métodos de Array

const list = ['w', 'u', 'l', 'f', 'r']

// conta os caracteres do array
console.log(list.indexOf("i"))

// busca um item específico 
console.log(list[2])


// inserir item no array sem método
list[5] = 'i'
console.table(list)

// inserir item no array com método
console.log(list.push('c'))
console.table(list)

// trazer o último item
console.log(list[list.length - 1])

// remove o último item do array
list.pop()
console.log(list)

// remove o primeiro item do array
list.shift()
console.log(list)

list.unshift('início')
console.log(list)

// retira um pedaço do array pelo indice
console.log(list.splice(1,5))

// metodo do objeto