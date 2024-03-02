import {question} from 'readline-sync'

function media_numeros(num1, num2,num3, num4, num5){
    return (num1+num2+num3+num4+num5)/5
}

function mostrar(mensagem){
    console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}
 function main(){
    const num1 = pegar_numero('Digite o primeiro número da comparação')
    const num2 = pegar_numero('Digite o segundo número da comparação')
    const num3 = pegar_numero('Digite o terceiro número da comparação')
    const num4 = pegar_numero('Digite o quarto número da comparação')
    const num5 = pegar_numero('Digite o quinto número da comparação')
    
    let media = media_numeros(num1, num2, num3, num4, num5)

    mostrar(`A média entre os cinco números é igual a ${media}, sendo os maiores que a média:`)
    
    if(num1>media){mostrar(`${num1}`)}
    if(num2>media){mostrar(`${num2}`)}
    if(num3>media){mostrar(`${num3}`)}
    if(num4>media){mostrar(`${num4}`)}
    if(num5>media){mostrar(`${num5}`)}

 }
 main()