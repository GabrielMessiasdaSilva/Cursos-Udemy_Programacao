var lista_nomes = Array()

lista_nomes[0] = 'Gabriel'

lista_nomes[1] = 'Tchita'

lista_nomes[2] = 'Mucael'

lista_nomes[3] = 'Moneqee'

lista_nomes[4] = 'Édénelson'

console.log(lista_nomes.sort()) // tal comando nativo do JS,ele faz a ordenação alfa-numerica ou seja ele organiza os indices e o array em "ordem alfabética"



var listas_numeros = Array()

listas_numeros[0] = 12

listas_numeros[1] = 40

listas_numeros[2] = 3

listas_numeros[3] = 7

listas_numeros[4] = 19

console.log(listas_numeros.sort(ordenaNumero))

// nesse caso com numeros,o sort ainda organizar de forma que seja alfabética,porem devemos usar uma função que ajuste para isso se tornar alfa-numerica

//aqui é uma função padrão

function ordenaNumero(a,b){
    return a-b 
}

// um valor < 0 é ordenado antes de B 

//ja um   valor > 0 será ordenado antes dde A 

// == a ordem é mantida