import { question } from "readline-sync"

function calcular_baskara(coeficiente_A, coeficiente_B, coeficiente_C){
    const resultado_delta = (coeficiente_B**2)-(4*coeficiente_A*coeficiente_C)
    const resultado_baskara_negativo = -(coeficiente_B-Math.sqrt(resultado_delta))/(2*coeficiente_A)
    const resultado_baskara_positivo = -(coeficiente_B+Math.sqrt(resultado_delta))/(2*coeficiente_A)

    if(resultado_delta < 0){
        return 'Não existe raiz real :('
    }else if(resultado_delta > 0){
        return [resultado_baskara_positivo, resultado_baskara_negativo]
    }else {
        return resultado_baskara_positivo
    }
}

function calcular_delta(coeficiente_A, coeficiente_B, coeficiente_C){
    const resultado = (coeficiente_B**2)-(4*coeficiente_A*coeficiente_C)
    if (resultado > 0){
        return 'Existem duas raízes reais!'
    }else if (resultado === 0){
        return 'Existe apenas uma raiz real'
    }else{
        return 'Não existem raízes reais'
    }
}

function mostrar(mensagem){
    console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
   const coeficiente_A = pegar_numero('Insira o coeficiente A: ')
   const coeficiente_B = pegar_numero('Insira o coeficiente B: ')
   const coeficiente_C = pegar_numero('Insira o coeficiente C: ')

   const delta = calcular_delta(coeficiente_A, coeficiente_B, coeficiente_C)
   const baskara = calcular_baskara(coeficiente_A, coeficiente_B, coeficiente_C)

   mostrar(`
   Olá, sua equação:
   ${coeficiente_A}x²${coeficiente_B}x${coeficiente_C}=0
   tem como raíz(es):
   ${delta}
   ${baskara}
   `)
}
main()