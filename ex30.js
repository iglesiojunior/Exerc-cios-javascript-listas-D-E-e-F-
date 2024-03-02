import { question } from "readline-sync"

function eh_igual(num){
    const milhar_centena = Math.trunc(num/100)
    const dezena_unidade = num%100
    const soma = milhar_centena+dezena_unidade
    if(soma**2 === num){
        return 'Esse número é válido e obdece a regra!!'
    }else{
        return 'Esse número não é válido a regra'
    }
}

function mostrar(mensagem){
    console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    const num = pegar_numero('Insira um número de 4 dígitos: ')

    const validar = eh_igual(num)

    mostrar(`
    Olá, o seu número: ${num}
    após a análise de que:
    se dividirmos
    o número em dois números de dois dígitos, um composto pela dezena e pela unidade, e outro pelo
    milhar e pela centena, se somarmos estes dois novos números gerando um terceiro, o quadrado deste
    terceiro número é exatamente o número original de quatro dígitos.

    A validação foi de que: ${validar}
    `)
}
main()