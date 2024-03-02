import { question } from "readline-sync"

function validar_lados(lado1, lado2, lado3){
    if(lado1 > lado2 && lado1 > lado3){
        return `lado ${lado1} é a hipotenusa e os catetos: ${lado2} e ${lado3}`
    }else if(lado2 > lado1 && lado2 > lado3){
        return `lado ${lado2} é a hipotenusa e os catetos: ${lado1} e ${lado3}`
    }else{
        `lado ${lado3} é a hipotenusa e os catetos: ${lado1} e ${lado2}`
    }
}

function mostrar(mensagem){
    console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
const lado1 = pegar_numero('Insira o primeiro lado do triângulo: ')
const lado2 = pegar_numero('Insira o segundo lado do triângulo: ')
const lado3 = pegar_numero('Insira o terceiro lado do triângulo: ')

const validação = validar_lados(lado1, lado2, lado3)

mostrar(`
Olá, de acordo com a análise os resultados foram:
${validação}
`)
}
main()