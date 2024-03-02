import {question} from 'readline-sync'

function eh_par(num){
    if(num%2 === 0){
    return 'par'
    }else {
        return 'ímpar'
    }
}

function mostrar(mensagem){
    console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}
 function main(){
    const num = pegar_numero('Digite um número: ')

    const validação = eh_par(num)

    mostrar(`O seu número é: ${validação}`)
 }
 main()