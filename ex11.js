import {question} from 'readline-sync'

function validar_opção(opção, num1, num2, num3){
    if(opção === 1){return num1}
    else if(opção === 2){return num2}
    else{return num3}
}

function mostrar(mensagem){
    console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
 const opção = pegar_numero('Insira um núero de um a três:')
 const num1 = pegar_numero('Insira o primeiro núero da sua escolha: ')
 const num2 = pegar_numero('Insira o segundo número de sua escolha: ')
 const num3 = pegar_numero('Insira o terceiro número de sua escolha: ')

 const validação = validar_opção(opção, num1, num2, num3)

 mostrar(`O seu número selecionado por: ${opção} é igual a ${validação}`)
}
main()