function calcularAreaTerreno(largura, comprimento) {

    //vamos iniciar a lógica aqui

    var area = largura * comprimento

    //document.write('o terreno possui ' +area+ ' metros quadrados') isso seria do tipo void

    //agora vamos usar o tipo retorno
    return area

}
var largura = prompt("digite a largura em metros")
var comprimento = prompt("digite o comprimento do terreno")

var area = calcularAreaTerreno(largura, terreno)


document.write('o terreno possui ' + calcularAreaTerreno(largura, metros) + ' metros quadrados')

//efetuamos a nossa chamada da função.OU seja vai chamar aquilo que está la em cima,por exemplo o 15 indica a largura e o 25 o comprimento
