function soma (a,b){
    return a+b 
}
console.log(soma(7,7))
//podemos passar mais parametros
console.log(soma(7,7,9,9))

//passamos mais parametros,porem ele descarta ou desconsideram os parametros adicionados

//o acontece se passarmos só um parametro

// exemplo abaixo:
console.log(soma(7))

/*
pois bem a variavel  A 
*   function soma (a,b){
*   return a+b 
*}
*receberá o valor 7, e variavel b receberá o valor Undefined
* o resultado será= not a number
* */

//oq acontece se chamamos a nossa função sem nenhum parametros
console.log(soma())