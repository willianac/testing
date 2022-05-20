const input = document.querySelector('#input')
const button = document.querySelector('#button')

function numeroAleatorio () {
     return Math.round(Math.random() *10)
}

function geraNumeros(quantidade) {
    var numerosPossiveis = []
    let index = 0
    while(index < quantidade) {
        let achou = false
        let numero = numeroAleatorio()
        for(let i = 0; i < numerosPossiveis.length; i++) {
            if(numero === numerosPossiveis[i]) {
                achou = true
                break;
            }  
        }   if(achou === false) {
                numerosPossiveis.push(numero)
                index++
            }
    }
    return numerosPossiveis
}

var numerosPossiveis = geraNumeros(5)
console.log(numerosPossiveis)

function verificaNumeros() {
    let achou = false
    for(posicao = 0; posicao < numerosPossiveis.length; posicao++) {
        if(parseInt(input.value) === numerosPossiveis[posicao]) {
            alert('Achou um numero!!')
            achou = true
            break;
        } 
    }   if(achou === false) {
        alert('Nao ha esse numero.')
        }
    input.value = ""
    input.focus()
}

button.onclick = verificaNumeros
input.addEventListener('keydown', function verificaNumerosKey(evento) {
    var codigo = evento.keyCode
    if(codigo === 13) {
        verificaNumeros()
    }
})
