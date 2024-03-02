import { question } from "readline-sync"

function calcular_area(cantoX1, cantoX2, cantoY1, cantoY2){
    const difx = Math.abs(cantoX1-cantoX2)
    const dify = Math.abs(cantoY1-cantoY2)
    
    if(difx < 0){
        return Math.abs(difx)*dify
    }else if(dify < 0){
        return difx*Math.abs(dify)
    }else{
        return difx*difx
    }
}

function mostrar(mensagem){
    console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
 const cantoX1 = pegar_numero('Insira a coordenada x do primeiro canto: ')
 const cantoY1 = pegar_numero('Insira a coordenada y do primeiro canto: ')
 const cantoX2 = pegar_numero('Insira a coordenada x do segundo canto: ')
 const cantoY2 = pegar_numero('Insira a coordenada y do segundo canto: ')

 const area = calcular_area(cantoX1, cantoX2, cantoY1, cantoY2)

 mostrar(`
 Olá, seu retângulo de pontos: (${cantoX1},${cantoY1}) e (${cantoX2},${cantoY2})
 terá como área total: ${area}
`)
}
main()