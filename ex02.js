import {question} from 'readline-sync'

function comparar_numero(num1, num2){
    if (num1>num2){
        return `O número ${num1} é maior que o ${num2}!`
    }else{
       return `O número ${num2} é maior que ${num1}!`
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

const comparacao = comparar_numero(num1, num2)

mostrar(`Olá, a comparação entre ${num1} e ${num2} é igual a: ${comparacao}`)

}
main()
