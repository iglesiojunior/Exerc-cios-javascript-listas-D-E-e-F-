import { question } from "readline-sync"

function operação_com_numeros(num1, num2, numero_operação){
    let novonúmero = numero_operação

    if(novonúmero === 1){
        return num1+num2
    }else if(novonúmero === 2){
        return num1-num2
    }else if(novonúmero === 3){
        return num1*num2
    }else if(novonúmero === 4){
        return num1/num2
    }else if(novonúmero > 5 || novonúmero < 1){
        return operação_com_numeros(num1, num2, numero_operação)
    }else{return ''}

}

function mostrar(mensagem){
    console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    const num1 = pegar_numero('Insira o primeiro número: ')
    const num2 = pegar_numero('Insira o segundo número: ')
    const numero_operação = pegar_numero(`
    Insira os seguintes valores para determinadas ações:
    1 -> adição
    2 -> subtração
    3 -> Multiplicação
    4 -> Divisão`)
    
    const validação = validar_operação(numero_operação)
    const resultado_operação = operação_com_numeros(num1, num2, numero_operação)

    mostrar(resultado_operação)
}
main()