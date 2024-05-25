// COnchete "[]"no final significa array
const lastName = "Veloso"
const age = 27
const shoes = {
    sizes: [
        33, 34, 35, 36
    ],
    brand: "velnic",
    since: 2006
}

const users = [
    {
        name: "Bibs",
        gender: "Female",
        age: 17,
        sociaMedias: {
            linkedin: "",
            x: "",

        }
    },

    {
        name: "Thor",
        gender: "Male",
        age: 11,
        sociaMedias: {
            linkedin: "",
            x: "",
        }
    },

    {
        name: "Lion",
        gender: "Male",
        age: 4,
        sociaMedias: {
            linkedin: "",
            x: "",
        }
    }
]

const numbers = [1, 2, 3, 4, 5]

const brands = ["velnic", "adidas", "redley"]

const isAprovved = true

console.log(lastName.length) // length é de contar caracteres
console.log(age.toString().length) //método encima de um number, dps um método encima de uma string
console.table(shoes.sizes) // transforma os elementos da lista em tabela
// retorna o primeiro número da lista - o primeiro tá na posição 0
console.log(shoes.sizes[0]) // percorri os objetos, achei o size e puxei os índices
console.log(shoes.sizes[1])
console.log(shoes.sizes[2])
console.log(shoes.sizes[3])

// retorna o nome
const filterUser = users.filter(user => user.name === "Bibs")
const findUser = users.find(user => user.name === "Bibs")

console.log(filterUser) // trás o primeiro elemento que ele achar chamado "Bibs" 
console.log(users[1])

// retorna o primeiro nome e o último
const namer = "Albus Percival Wulfric Brian Dumbledore"

const arrayName = namer.split(" ")

console.log(arrayName)

const firstName = arrayName[0]

const sobreName = arrayName[arrayName.length -1]

console.log(firstName, sobreName)

const dubleNumbers = numbers.map((num) => {
    return num * 2
})

console.log(dubleNumbers)