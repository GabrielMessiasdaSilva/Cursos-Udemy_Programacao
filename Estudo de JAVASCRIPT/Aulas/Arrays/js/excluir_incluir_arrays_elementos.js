var listas_frutas = []

listas_frutas[0] = 'banana';
listas_frutas[1] = 'Maçã';


//Adicionar um elemento no final do array 
listas_frutas.push('uva')
console.log(listas_frutas)




//incluir elemento no inicio do array 
listas_frutas.unshift('Laranja')
/** * perceba que ao incluir no inicio os indices são modificados que usamos o metodo "unshift" 
 * para reogarnizar os indices
 * 
 **/


/*********************************************************************************************** */

/**excluir o elemento no final do aray  usamos o metodo "pop",não é necessario passar nenhum 
 * parametro pois o elemento a ser removido será aquele do final do array
 */

listas_frutas.pop()

/**excluir o elemento no inicio do aray  usamos o metodo "shift",não é necessario passar nenhum 
 * parametro pois o elemento a ser removido será aquele no inicio do array
 */

listas_frutas.shift()