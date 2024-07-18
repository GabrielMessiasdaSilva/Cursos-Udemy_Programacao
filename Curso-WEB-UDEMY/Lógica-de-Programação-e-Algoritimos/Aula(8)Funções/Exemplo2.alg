algoritmo "semnome"
// Função :
// Autor :
// Data : 04/03/2023
// Seção de Declarações 
var
N:Inteiro
R:Caractere
Funcao parouimpar (V:Inteiro):Caractere
inicio
      Se(V%2=0) entao
      retorne "Par"
senao
     retorne "Impar"
     fimse
FimFuncao
inicio
Escreva("Digte um numero :")
leia(N)
R<-parouimpar(N)
escreva("o numero ",N, "  é um valor ", R)
fimalgoritmo
