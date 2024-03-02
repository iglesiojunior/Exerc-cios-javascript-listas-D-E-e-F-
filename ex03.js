import {question} from 'readline-sync'

function comparar_numero(num1, num2, num3){
    if (num1 > num2 > num3){
        return `O número ${num1} é maior que os demais!`
    }else if (num2 > num1 > num3){
       return `O número ${num2} é maior que os demais!`
    }else{
        return`O número ${num3} é maior que os demais!`
    }
}


function mostrar(mensagem){
    console.log(mensagem)
}

function pega_o_numero(mensagem){
  return  Number(question(mensagem))
}


function main(){
const num1 = pega_o_numero('Digite o primeiro numero a ser comparado: ')
const num2 = pega_o_numero('Digite o segundo numero a ser comparado: ')
const num3 = pega_o_numero('Digite o terceiro numero a ser comparado: ')

const comparacao = comparar_numero(num1, num2, num3)

mostrar(`Olá, a comparação entre ${num1}, ${num2} e ${num3} é igual a: ${comparacao}`)

}
main()
