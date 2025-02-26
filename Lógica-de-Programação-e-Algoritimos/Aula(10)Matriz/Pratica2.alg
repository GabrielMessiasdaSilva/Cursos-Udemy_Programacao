algoritmo "matrizPar"
// Função :
// Autor :
// Data : 09/03/2023
// Seção de Declarações
var
valores:vetor [1..3,1..3]de inteiro
l,c     :inteiro


inicio
Para l <- 1 ate 3 faca
   para c <- 1 ate 3 faca
      escreva ("Digite o valor da posicao [",1,",",c,"]:")
      leia (valores[l,c])
   fimpara
fimpara
escreval()
escreval("MATRIZ")
Escreval("--------------------")
Para l <- 1 ate 3 faca
   para c <-1 ate 3 faca
      se(valores [l,c]%2=0)entao
         escreva ("{",valores[l,c]:2,"}")
           senao
         escreva (valores[l,c]:4)
         fimse
      fimpara
   fimpara
   escreval()
fimalgoritmo
