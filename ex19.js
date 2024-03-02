import {question} from 'readline-sync'

function validar_imc(altura, peso){
    const media = peso/(altura**2)
    if (media < 25){
        return 'Você está com um peso normal!!'
    }else if(media >= 25 && media <= 30){
        return 'Você está obeso, cuidado com seu peso!'
    }else{
        return 'você tem obesidade mórbida!!!'
    }
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function mostrar(mensagem){
    console.log(mensagem)
}

function main(){
    const altura = pegar_numero('Insira seu altura em kg: ')
    const peso = pegar_numero('Insira sua peso em metros: ')

    const imc = validar_imc(altura, peso)

    mostrar(`
    Olá, tudo bem?
    seu peso:${peso}
    altura: ${altura}
    sua situação: ${imc}
    `)
}
main()