// Cálculo da soma de dois números
function Soma(numOne, numTwo) {
    return numOne + numTwo
}

console.log('O valor da soma é: ',Soma(10, 15))


// Cálculo da subtração de dois números
function Subtracao(numOne,numTwo) { 
    return numOne - numTwo
}

console.log('O valor da subtração é',Subtracao(10,15))


// Cálculo da multiplicação de dois números
function Multi(numOne,numTwo) { 
    return numOne * numTwo
}

console.log('O valor da multiplicação é',Multi(10,15))


// Cálculo da divisão de dois números
function Divi(numOne,numTwo) { 
    return numOne / numTwo
}

console.log('O valor da divisão é',Divi(70,7))


// Programa que pede um nome e retorna uma mensagem de acordo com o número de caracteres
function ValidaNome(name) {

    if (name.length > 8) {
        return "inventou moda"
    } else if (name.length < 5) {
        return "tava sem criatividade"
    } else {
        return "nem o cartório aceita"
    }
}
console.log(ValidaNome("Maycon Douglas"))


// Te dá retorno de valores, assim como o if e o else (Só pode ser usado com mais de 3 opções)
function ValidaCPF(name) {
    switch (name) {
        case "Clóvis": return 120923842304
        case "Cláudio": return 204198203292
        case "Cleber": return 123321231325
        default: "esse nome não possui cadastro"
    }
}
console.log(ValidaCPF("Clóvis"))


// Te dá retorno de um nome com "Sr." na frente
function AddSr(name) {

    if (typeof(name) === 'string'){
        return `Sr. ${name}`
    } else {
        return "digite um número válido"
    }
}
console.log(AddSr("Noel"))


// Te dá retorno se vc está aprovado ou não de acordo com a média
function Aprovacao(nota) {
        return ((typeof(nota) === 'number') && (nota > 7 ? "Aprovado" : "Reprovado"))
    }
console.log(Aprovacao(4))


// Te dá retorno se vc está aprovado ou não de acordo com a média
function Aprovacao(media) {
    return media > 6 ? "Aprovado" : "Reprovado"
}

console.log(Aprovacao(8))



// Te dá retorno se vc está aprovado ou não de acordo com a média
function ValidaNota(nota) {

    if (nota > 7) {
        return "Aprovado"
    } else if (nota >= 5 && nota <= 6) {
        return "Recuperação"
    } else {
        return "Reprovado"
    }
}
console.log(ValidaNota(3))
