import { question } from "readline-sync"

function validar_minutos(minutoscomeço, minutosfinais){
    if (minutoscomeço < minutosfinais){
        return minutosfinais-minutoscomeço
    }else{
        return (60-minutoscomeço)+ minutosfinais}
}

function validar_horas(horascomeço, horasfinais, minutoscomeço, minutosfinais){
    if (horascomeço < horasfinais && minutoscomeço>minutosfinais){
        return (horascomeço-horasfinais)+1
    }else if(horascomeço<horasfinais){
        return horasfinais-horascomeço
    }else if(horascomeço > horasfinais){
        return ((24-horascomeço) + horasfinais)
    }else{return ''}  
    
}

function mostrar(mensagem){
    console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    const horascomeço = pegar_numero('Insira as horas do início do jogo: ')
    const minutoscomeço = pegar_numero('Insira os minutos do início do jogo: ')
    const horasfinais = pegar_numero('Insira as horas do término do jogo: ')
    const minutosfinais = pegar_numero('Insira os minutos do término do jogo: ')
    
    let horastotais = validar_horas(horascomeço, horasfinais, minutoscomeço, minutosfinais)
    let minutostotais = validar_minutos(minutoscomeço, minutosfinais)

    mostrar(`
    Olá, seu jogo 
    que começou às ${horascomeço}:${minutoscomeço}
    e terminou às ${horasfinais}:${minutosfinais}
    teve uma duração de: ${horastotais}:${minutostotais} horas
    `)
}
main()