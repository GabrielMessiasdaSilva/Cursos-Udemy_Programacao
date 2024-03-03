var valor1 = parseInt(prompt("Digite o Primeiro Valor"));
var valor2 = parseInt(prompt("Digite o Segundo Valor"));
var valor3 = parseInt(prompt("Digite o Terceiro Valor"));

var numero_maior = valor1;

if (valor2 > numero_maior) {
    numero_maior = valor2;
}
if (valor3 > numero_maior) {

    numero_maior = valor2;
}

document.write("o numero maior é "+ numero_maior);
