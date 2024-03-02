import { question } from 'readline-sync'

function calcular_idade(antigo, atual, dia_atual, mês_atual, ano_atual, dia_nascimento, mês_nascimento, ano_nascimento){
    if(dia_nascimento > 31 || dia_atual > 31 ){
    return 'Insira um dia válido'}
    else if(mês_atual > 12 || mês_nascimento > 12){
    return 'Insira um mês válido'}
    else if(ano_nascimento > ano_atual){
    return 'Segundo meus cálculos, você não existe'}
    else if(atual - antigo > 0){
    return atual - antigo + " anos!"
    }else{
    return 'Acho que sua data de nascimento está errada :('}
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

    const dia_nascimento = pegar_numero('Digite seu dia de nascimento: ')
    const mês_nascimento = pegar_numero('Digite o mês do seu nascimento: ')
    const ano_nascimento = pegar_numero('Digite o ano de seu nascimento: ')
    
    const idade = calcular_idade(ano_nascimento, ano_atual, dia_atual, mês_atual, ano_atual, dia_nascimento, mês_nascimento, ano_nascimento)
    
    mostrar(`Olá, segundo a data que você inseriu, sua idade deve ser de: ${idade}`)

}
main()