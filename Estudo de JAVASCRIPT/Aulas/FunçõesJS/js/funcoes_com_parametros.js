function soma(){
   

    var resultado = 0
    for (var i in arguments) {
        resultado += arguments[i]
       // console.log(arguments[i]) //arguments é uma palavra reservada.
    } 
    return resultado
}

console.log(soma(7,5,3.2,0.8, 'Texto'))
/**
 * está como void.Passando os parametros,que fica de uma forma analoga a um array*/