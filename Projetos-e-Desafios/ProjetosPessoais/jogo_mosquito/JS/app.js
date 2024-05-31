
let altura = 0
let largura = 0

function tamanhoTela() {
    altura = window.innerHeight
    largura = window.innerWidth
    //console.log(largura, altura)
}
tamanhoTela()


function posicaRadomica() {
    let posicaoX = Math.floor(Math.random() * largura) - 100;
    let posicaoY = Math.floor(Math.random() * altura) - 100;

posicaoX =  posicaoX<0?0: posicaoX
posicaoY =  posicaoY<0?0: posicaoY
    console.log(posicaoX, posicaoY)

    //criando o elemento html

    let mosquito = document.createElement('img')
    mosquito.src = 'assets/imagens/mosca.png'
    document.body.appendChild(mosquito)
    mosquito.className = "mosca1"
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
}