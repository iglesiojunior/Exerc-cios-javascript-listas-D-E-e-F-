import { question } from "readline-sync"

function validar_arredondamento(número_fracionario){
    const parte_inteira = Math.trunc(número_fracionario)
    const parte_fracionária = número_fracionario - parte_inteira
    if (parte_fracionária >= 0.5){
        return Math.ceil(número_fracionario)
    }else{
        return Math.floor(número_fracionario)
    }
}

function mostrar(mensagem){
    console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    const número_fracionario = pegar_numero('Insira seu número fracionário: ')

    const arredondamento = validar_arredondamento(número_fracionario)

    mostrar(`
    Olá, o seu número arredondado é igual a:
    ${arredondamento}
    `)
}
main()