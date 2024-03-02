import {question} from 'readline-sync'

function validar_posiçãomin(num1,num2,num3,num4,num5){
    if(num1<num2<num3<num4<num5){
        return num1
    }else if(num2<num1<num3<num4<num5){
        return num2
    }else if(num3<num1<num2<num4<num5){
        return num3
    }else if(num4<num1<num3<num2<num5){
        return num4
    }else if(num5<num1<num3<num4<num2){
        return num5
    }
}

function validar_posição(num1, num2, num3, num4, num5){
    if(num1>num2>num3>num4>num5){
        return num1
    }else if(num2>num1>num3>num4>num5){
        return num2
    }else if(num3>num2>num1>num4>num5){
        return num3
    }else if(num4>num2>num3>num1>num5){
        return num4
    }else if(num5>num2>num3>num4>num1){
        return num5
    }
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

    let maximo = validar_posição(num1, num2, num3, num4, num5)
    let minimo = validar_posiçãomin(num1, num2, num3, num4, num5)
    mostrar(`O maior número entre:${num1}, ${num2}, ${num3}, ${num4}, ${num5} é: ${maximo} e o mínimo: ${minimo}`)
 }
 main()