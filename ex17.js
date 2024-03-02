import { question } from "readline-sync"

function quadrado(num1, num2){
    const quadnum1 = num1*num1
    const quadnum2 = num2*num2
    return [quadnum1, quadnum2]
}

function eh_par(num1){
    if(num1%2 === 0){
        return 'par'
    }else{
        return 'ímpar'
    }
}

function qual_eho_resto(num1, num2, num1_validação, num2_validação, quadrados){
   
    if(num1%num2 === 1){
    return (num1+num2+num1%num2)
   }else if(num1%num2 === 2){
      return [num1_validação, num2_validação]
   }else if(num1%num2 === 3){
      return (num1+num2)*num1
   }else if(num1%num2 === 4){
    return (num1+num2)/num2
   }else if(num1%num2 > 4){
    return quadrados
   }
}

function mostrar(mensagem){
    console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    const num1 = pegar_numero(`Insira o primeiro numero: `)
    const num2 = pegar_numero(`Insira o segundo numero: `)
    const num1_validação = eh_par(num1)
    const num2_validação = eh_par(num2)
    const quadrados = quadrado(num1, num2)
    const resto = qual_eho_resto(num1, num2, num1_validação, num2_validação, quadrados)

    mostrar(`A análise dos dois valores revelou o resultado: ${resto} `)
}
main()