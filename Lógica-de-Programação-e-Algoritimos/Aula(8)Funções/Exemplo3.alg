algoritmo "fatorial"
var
N,F:inteiro
funcao Fatorial(V:inteiro):inteiro
var
C,R :Inteiro
inicio
R<-1
Para C<-1 ate V faca
   R<-R*C
   fimPara
   Retorne R
Fimfuncao
Inicio
      escreva("digite um numero")
      leia(N)
      F <-Fatorial(N)
      Escreval("o valor de",N, "é igual a",F)
      
fimalgoritmo
