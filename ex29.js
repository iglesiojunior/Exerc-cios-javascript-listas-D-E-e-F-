import { question } from "readline-sync"

function verificar_quadradoprft(num){
    const milhar_centena = Math.trunc(num/100)
    const dezena_unidade = num%100
    if(Math.sqrt(num) === (milhar_centena+dezena_unidade)){
        return 'Esse número é um quadrado perfeito!'
    }else{
        return 'Esse número não é um quadrado perfeito'
    }
}


function mostrar(mensagem){
    console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    const num = pegar_numero('Insira o número para a verificação: ')

    const verificação = verificar_quadradoprft(num)

    mostrar(`
    Olá o seu número: ${num}, após a verificação teve como resultado:
    ${verificação}
    `)
}
main()