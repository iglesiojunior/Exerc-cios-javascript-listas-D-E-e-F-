import { question } from "readline-sync"

function media_póspf(nota1, nota2, nova_situção){
    return (nova_situção+nota1+nota2)/3
}

function novavalidação(nova_media, nota1, nota2){
    if (((nova_media+nota1+nota2)/3 >= 5)){
        return 'Você foi aprovado na recuperação'
        }else if(((nova_media+nota1+nota2)/3)<= 5){
        return 'Você foi reprovado de vez amigão :('
      }else{
        return 'Parabéns pela aprovação, meu patrão!!'
      }
    }

function novanotapf(media, nova_media){
    if(media <= 7 && media >= 4){
        return nova_media = pegar_numero('Insira sua nota final: ')
        }
    }

function foi_aprovado(media){
    if (media >= 7){
        return 'Você foi aprovado!'
    }else if(4 <= media <= 7){
        return 'Você está de prova final'
    }else {
        return 'você está reprovado'
    }
}

function media_notas(nota1, nota2){
    return (nota1+nota2)/2
}

function mostrar(mensagem){
    console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
   const nota1 = pegar_numero('Insira sua primeira nota: ')
   const nota2 = pegar_numero('Insira sua segunda nota: ')

   const media = media_notas(nota1, nota2)
   const validação = foi_aprovado(media)
   let nova_media = 0
   const nova_situção = novanotapf(media, nova_media)
   const pos_pf = novavalidação(nova_situção, nota1, nota2)
   const mediapf = media_póspf(nova_situção, nota1, nota2)

   mostrar(`
   Olá, sua media foi de:
   nota 1: ${nota1}
   nota 2: ${nota2}
   média: ${media.toFixed(2)}
   situação: ${validação}
   média pós final: ${mediapf.toFixed(2)}
   situação pós final: ${pos_pf}
   
   `)
}
main()