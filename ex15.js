import {question} from 'readline-sync'

function salrio_maior(salario1, salario2){
    if(salario1>salario2){
        return 'O maior salário é do professor 1!!'
    }else{
        return 'O maior salário é do professor 2!!'
    }
}

function calculo_salario2(horas2, valorhora2){
    return horas2*valorhora2
}

function calculo_salario1(horas1, valorhora1){
    return horas1*valorhora1
}

function mostrar(mensagem){
    console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    const horas1 = pegar_numero('Insira as horas-aula do primeiro professor')
    const valorhora1 = pegar_numero('Insira a quantia das horas-aula do segundo professor: ') 
    const horas2 = pegar_numero('Insira as horas-aula do primeiro professor')
    const valorhora2 = pegar_numero('Insira a quantia das horas-aula do segundo professor: ') 

    const salario1 = calculo_salario1(horas1, valorhora1)
    const salario2 = calculo_salario2(horas2, valorhora2)
    const maior_salario = salrio_maior(salario1, salario2)

    mostrar(`O salário do primeiro professor será de: ${salario1} e do segundo professor: ${salario2}, sendo: ${maior_salario}`)
}
main()