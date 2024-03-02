import { question } from "readline-sync"

function numero_meio(num1, num2, num3){
    let menor = Math.min(num1, num2, num3)
    let maior = Math.max(num1, num2, num3)
    
    if (num1 === menor && num2 === maior || num2 === menor && num1 === maior){
        return num3
    }else if(num1 === menor && num3 === maior || num3 === menor && num1 === maior){
        return num2
    }else{
        return num1
    }
}

function pega_o_numero(mensagem){
    return  Number(question(mensagem))
  }

function mostrar(mensagem){
    console.log(mensagem)
}

function main(){
    const num1 = pega_o_numero('Digite o primeiro número: ')
    const num2 = pega_o_numero('Digite o segundo número: ')
    const num3 = pega_o_numero('Digite o terceiro número: ')

    let menor = Math.min(num1, num2, num3)
    let maior = Math.max(num1, num2, num3)
    let meio = numero_meio(num1, num2, num3)

    mostrar(`A ordem crescente dos números será:${menor}, ${meio}, ${maior}`)
}
main()