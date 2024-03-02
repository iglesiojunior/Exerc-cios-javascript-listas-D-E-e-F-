import { question } from "readline-sync"

function verificar_primo(numero){
    if(numero === 2|| numero === 3|| numero === 5|| numero===7){
        return 'primo'
    }
    else if(numero%2 === 0 || numero%3 === 0 || numero%5 === 0 || numero%7 === 0){
        return 'não é primo'
    }else{
        return 'primo'
    }
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function mostrar(mensagem){
    console.log(mensagem)
}

function main(){
   const numero = pegar_numero('Insira um número para a verificação:')

   const primo = verificar_primo(numero)

   mostrar(`Olá, após a análise, verificamos que o número ${numero} é: ${primo}`)
}
main()