
let altura = 0
let largura = 0
var vidas =1
var tempo =10


function tamanhoTela() {
    altura = window.innerHeight
    largura = window.innerWidth
    //console.log(largura, altura)
}
tamanhoTela()
var cronometro = setInterval(function(){
    tempo-=1
    document.getElementById('cronometro').innerHTML= tempo
}, 1000)

function posicaRadomica() {
    if (document.getElementById('mosquito')) {
        //remover o mosquito anterior(caso exista)
        document.getElementById('mosquito').remove()

        if (vidas > 3) {
       window.location.href="fim_de_jogo.html"
        } else {
            document.getElementById('v' + vidas).src = "assets/imagens/coracao_vazio.png"
            vidas++
        }

    }

    let posicaoX = Math.floor(Math.random() * largura) - 100;
    let posicaoY = Math.floor(Math.random() * altura) - 100;

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    console.log(posicaoX, posicaoY)

    //criando o elemento html
    let mosquito = document.createElement('img')
    mosquito.src = 'assets/imagens/mosca.png'
    document.body.appendChild(mosquito)
    mosquito.className = tamanhoaleatório() + ' ' + ladoAleatorio();
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    document.body.appendChild(mosquito) //adicionando uma vez
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()              //this faz referencia a proprio o elemento html

    }


}

function tamanhoaleatório() {
    var classe = Math.floor(Math.random() * 3)



    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}


function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)
    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'

    }
}