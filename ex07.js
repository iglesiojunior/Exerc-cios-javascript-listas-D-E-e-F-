import {question} from "readline-sync"

function classificar_triangulo(num1, num2, num3){
    if (num1+num2 < num3 || num1+num3 < num2 || num2+num3 < num1){return 'Por favor, insira um triângulo válido'}
    else if(num1 === num2 && num1===num3 && num3 === num2){return 'Este triângulo é classificado como equilátero'}
    else if(num1 === num2 || num1===num3 || num3 === num2){return 'Este triângulo é classificado como isóceles'}
    else{return 'Este triângulo é classificado como escaleno'}
}

function verificar_tringulo(num1, num2, num3){
    if (num1+num2 > num3 && num1+num3 > num2 && num2+num3 > num1){return 'Os lados inseridos formam um triângulo!!'}
    else{return 'Os lados inseridos não formam um triângulo, desculpe :('}
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function mostrar(mensagem){
    console.log(mensagem)
}

function main(){
    const lado1 = pegar_numero('Digite o primeiro lado')
    const lado2 = pegar_numero('Digite o segundo lado')
    const lado3 = pegar_numero('Digite o terceiro lado')
    
    const verificação = verificar_tringulo(lado1, lado2, lado3)
    const classificação = classificar_triangulo(lado1, lado2, lado3)
    
    mostrar(`Olá, tudo bem? A verificação do seu triâgulo é a seguinte:
    ${verificação}
    ${classificação}`)
}
main()