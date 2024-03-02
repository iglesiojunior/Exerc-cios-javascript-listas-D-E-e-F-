import {question} from 'readline-sync'

function main(){
const numero1 = pega_o_numero('Digite o primeiro numero: ')
const numero2 = pega_o_numero('Digite o segundo numero: ')
const numero3 = pega_o_numero('Digite terceiro numero: ')

mostrar(`O número ${numero1}${numero2}${numero3} tem como algarismos iguais:`)

if (todos_iguais(numero1, numero2, numero3)){
    mostrar('três números são iguais!!')
}else if (dois_iguais(numero1, numero2, numero3)){
    mostrar('dois(2) números iguais!!')
}else{
    mostrar('Desculpe, mas nenhum dígito igual!')
}

}

function pega_o_numero(mensagem){
return Number(question(mensagem))
}

function mostrar(mensagem){
    console.log(mensagem)
}

function todos_iguais(numero1, numero2, numero3){
    if (numero1 === numero2 && numero1 === numero3){
        return todos_iguais
    }
}

function dois_iguais(numero1, numero2, numero3){
    if (numero1 === numero2 || numero1 === numero3 || numero2 === numero3){
        return dois_iguais
    }
}

main()