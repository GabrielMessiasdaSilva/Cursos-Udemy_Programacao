algoritmo "ValoresPares"
// Função :
// Autor :
// Data : 06/03/2023
// Seção de Declarações 
var
val:vetor[1..7]de inteiro
i,totpar:inteiro


inicio
Para i<-1 ate 7 faca
escreva("digite o",i,"o valor:")
leia(val[i])
se (val[i]%2=0)entao
totpar <-totpar+1
Fimse
fimpara
escreva("o total de pares foi:",totpar)

//adicional,mostrar as posiçoes dos valores
Para i<-1 ate 7 faca
se (val[i]%2=0)entao
escreval("valor par na posição",i)

fimse
fimpara
fimalgoritmo
