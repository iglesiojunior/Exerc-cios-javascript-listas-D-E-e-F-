import {question} from 'readline-sync'

function validar_quadrante(ângulo){
    if (ângulo === 0 || ângulo > 0 && ângulo < 90){
        return 'Primeiro quadrante'
    }else if(ângulo > 90 && ângulo <= 180){
        return 'Segundo quadrante'
    }else if(ângulo > 180 && ângulo <= 270){
        return 'Terceiro quadrante'
    }else{
        return 'Quarto quadrante'
    }
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function mostrar(mensagem){
    console.log(mensagem)
}

function main(){
    const ângulo = pegar_numero('Insira um ângulo entre 0 e 360º: ')

    const quadrante = validar_quadrante(ângulo)

    mostrar(`
    Olá, seu ângulo: ${ângulo}
    pertence ao: ${quadrante}
    `)
}
main()