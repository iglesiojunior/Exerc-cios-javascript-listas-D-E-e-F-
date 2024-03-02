import { question } from "readline-sync"

function validar_idade(dia_atual, mês_atual, ano_atual){
    if(dia_atual > 31 ){
    return 'Insira um dia válido!'}
    else if(mês_atual > 12){
    return 'Insira um mês válido!'}
    else if(ano_atual > 2024){
    return 'Bem, acho que estamos no futuro :)'
    }else {return 'Tá tudo certo meu patrão!! :)'}   
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function mostrar(mensagem){
    console.log(mensagem)
}

function main(){
    const dia_atual = pegar_numero('Digite o dia de hoje: ')
    const mês_atual = pegar_numero('Digite o mês de hoje: ')
    const ano_atual = pegar_numero('Digite o ano de hoje: ')
    
    const data = validar_idade (dia_atual, mês_atual, ano_atual)
    
    mostrar(`Olá, a validação da sua data diz que: ${data}`)

}
main()