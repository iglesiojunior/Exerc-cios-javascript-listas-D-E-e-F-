import { question} from "readline-sync"

function separar_unidade(num){
    const unidade = Math.trunc(num%10)
    return unidade
}

function separar_dezena(num){
    const dezena = Math.trunc(num/10)
    return dezena
}

function mostrar(mensagem){
    console.log(mensagem)
}

function pega_o_numero(mensagem){
    return  Number(question(mensagem))
  }

function main(){
    const num = pega_o_numero('digite um número de 2 algarismos: ')
    const dezena = separar_dezena(num)
    const unidade = separar_unidade(num)
    
    mostrar(`o seu número tem como dezena ${dezena} e unidades ${unidade}`)

    if (dezena === unidade){
        return mostrar(`O seu número tem como unidade e dezena iguais!`)
    }else{
       return mostrar(`Desculpe, mas os algarismos são diferentes entre si :(`)
    }

    
}
main()