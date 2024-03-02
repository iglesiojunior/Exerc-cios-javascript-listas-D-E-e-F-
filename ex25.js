import { question } from "readline-sync"

function validar_senha(senha){
    let nova_senha = 0
    const num =1234
    if (senha === num){
        return 'A senha foi validada com sucesso!, seja bem vindo!'
    }else if(senha !== num){
        mostrar('Desculpe, senha incorreta')
        return validar_senha(nova_senha = pegar_numero('Insira novamente a senha: '))
    }

}

function mostrar(mensagem){
    console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
 let senha = pegar_numero('Insira a senha de 4 números:')
 
 let validação = validar_senha(senha)

 mostrar(`${validação}`)
}
main()