import { question } from "readline-sync"

function comparar_datas(dia_1, dia_2, mes_1, mes_2, ano_1, ano_2){
   if(ano_1 > ano_2){
    return 'A primeira data é a mais recente'
   }else if(ano_2 > ano_1){
    return 'A segunda data é a a mais recente'
   }else if(mes_1 > mes_2){
    return 'A primeira data é a mais recente'
   }else if(mes_2 > mes_1 ){
    return 'A segunda data é a mais recente'
   }else if(dia_1 > dia_2){
    return 'A primeira data é a mais recente'
   }else{
    'A segunda data é a mais recente'
   }
}

function mostrar(mensagem){
    console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
const dia_1 = pegar_numero('Insira o primeiro dia: ')
const mes_1 = pegar_numero('Insira o primeiro mês: ')
const ano_1 = pegar_numero('Insira o primeiro ano: ')
const dia_2 = pegar_numero('Insira o segundo dia: ')
const mes_2 = pegar_numero('Insira o segundo mês: ')
const ano_2 = pegar_numero('Insira o segundo ano: ')

const comparar = comparar_datas(dia_1, dia_2, mes_1, mes_2, ano_1, ano_2)

mostrar(`
Olá, a comparação entre as datas:
${dia_1}/${mes_1}/${ano_2}
${dia_2}/${mes_2}/${ano_2}
é igual a: ${comparar} 
`)
}
main()