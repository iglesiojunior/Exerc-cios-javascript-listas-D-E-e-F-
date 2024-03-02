import {question} from "readline-sync"

function classificar_triangulo(num1, num2, num3){
    if (num1 + num2 + num3 !== 180){return 'Por favor, insira um triângulo válido'}
    else if(num1 < 90 && num2 > 90 && num3 < 90){return 'Este triângulo é classificado como acutângulo'}
    else if(num1 ===90 || num2 ===90 || num3 === 90){return 'Este triângulo é classificado como retângulo'}
    else{return 'Este triângulo é classificado como obtusângulo'}
}

function verificar_tringulo(num1, num2, num3){
    if (num1+num2+num3 === 180){return 'Os angulos inseridos formam um triângulo'}
    else{return 'Os ângulos inseridos não formam um triângulo, desculpe :('}
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function mostrar(mensagem){
    console.log(mensagem)
}

function main(){
    const angulo1 = pegar_numero('Digite o primeiro ângulo')
    const angulo2 = pegar_numero('Digite o segundo ângulo')
    const angulo3 = pegar_numero('Digite o terceiro ângulo')
    
    const verificação = verificar_tringulo(angulo1, angulo2, angulo3)
    const classificação = classificar_triangulo(angulo1, angulo2, angulo3)
    
    mostrar(`Olá, tudo bem? A verificação do seu triâgulo é a seguinte:
    ${verificação}
    ${classificação}`)
}
main()