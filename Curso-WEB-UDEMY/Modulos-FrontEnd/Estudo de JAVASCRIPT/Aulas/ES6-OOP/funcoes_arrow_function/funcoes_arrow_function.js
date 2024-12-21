// Comentário sobre o código: 
// Este código contém duas funções que calculam áreas de figuras geométricas.
// A primeira função, 'quadrado', calcula a área de um quadrado elevando o lado ao quadrado.
// A segunda função, 'trianguloIsoscele', calcula a área de um triângulo isóscele usando a fórmula (base * altura) / 2, 
// mas como não há altura informada, assume-se que a altura é igual à base, o que não é correto para todos os triângulos isósceles.

// Comentário sobre a arrow function:
// A arrow function é uma forma concisa de criar funções em JavaScript. 
// Ela é definida usando a sintaxe: parâmetros => expressão.
// No caso da função 'trianguloIsoscele', ela é equivalente a:
// let trianguloIsoscele = function(x) {
//   return (x * x) / 2;
// }

let quadrado= function(x){
    return x*x;

}
document.write(quadrado(4))


let trianguloIsoscele = (x) => {
  return (x * x) / 2;
}
document.write('</br></br>' + trianguloIsoscele(6))