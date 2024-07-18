var lista_nomes = Array() //não existe a utilidade de criar um operador new =


/**
 * Existe uma forma de realizar ou criar um array somente com [], o js reconhece o parenterses como um array
 */

//vou criar um indice para o array nomes com as suas posições
lista_nomes[1] ='Bi'
lista_nomes[2] ='Luquetas'
lista_nomes[3] ='Ticha'
lista_nomes[4] ='Mone'
lista_nomes[5] ='nenzinho'
 //observação: o indice não necessariamente precisa ser um numero pode ser uma String por exemplo





 //acessamos o array e recuperamos todos os valores dentro do array
document.write(lista_nomes)
document.write('<hr>');

//podemos chamar só o indice especifico
/**
 * exemplo :
 * document.write(lista_nomes[1])
 */

document.write('<br><br>');
document.write('<p>Perceba que aqui embaixo, nesse momento chamei o Indice [1] com o nome "Bi" e somente ele retornou,isso facilita muito na hora do desenvolvimento</p>')
document.write(lista_nomes[1])





var category = 'faith'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key': 'YOUR_API_KEY'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
