// Função que calcula a área de um quadrado elevando o lado ao quadrado
let calcularAreaQuadrado = (lado) => lado ** 2;

document.write('Resultado do quadrado foi: ' + calcularAreaQuadrado(4));
document.write('<hr>');

// Função que calcula a área de um triângulo isósceles.
// Assumimos que a altura deve ser calculada com base no teorema de Pitágoras.
let calcularAreaTrianguloIsoscele = (base, altura) => (base * altura) / 2;

// Para exemplificar, podemos calcular a altura de um triângulo isósceles dado base e lado:
let calcularAlturaTrianguloIsoscele = (base, lado) => {
  if (lado <= base / 2) {
    throw new Error("Lado deve ser maior que metade da base.");
  }
  return Math.sqrt(lado ** 2 - (base / 2) ** 2);
};

// Exemplo de cálculo:
let base = 6;
let lado = 5;
let altura = calcularAlturaTrianguloIsoscele(base, lado);
document.write(
  `Resultado do triângulo isósceles foi: ${calcularAreaTrianguloIsoscele(base, altura)}`
);
document.write('<hr>');

// Capturando evento e usando arrow function
const verificarParOuImpar = () => {
  const numero = parseInt(document.querySelector("input").value);
  if (isNaN(numero)) {
    alert("Por favor, insira um número válido.");
    return;
  }
  const resultado = numero % 2 === 0 ? "par" : "ímpar";
  alert(`${numero} é ${resultado}`);
};


let verificarParidade = (numero) => {
  if (isNaN(numero)) {
    return "Entrada inválida";
  }
  return numero % 2 === 0 ? "par" : "ímpar";
};

let numeroExemplo = 9;
document.write(
  `O número ${numeroExemplo} é ${verificarParidade(numeroExemplo)}.`
);
document.write('<hr>');


document.write(`

  <button onclick="verificarParOuImpar()">Verificar Par ou Ímpar</button>
`);
