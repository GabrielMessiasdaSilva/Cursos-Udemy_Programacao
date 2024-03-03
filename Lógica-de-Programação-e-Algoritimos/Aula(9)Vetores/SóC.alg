algoritmo "socomC"

var
nome:caractere
soc:vetor[1..10]de caractere
c:inteiro
tot:inteiro
inicio
tot<-0
Para c<-1 ate tot faca
   escreva("digite seu nome")
   leia(nome)
   se(copia(maiusc(nome),1,1)="C")entao
      tot<-tot+1
      soc[tot]<-nome
   fimse
fimpara

para c<-1 ate tot faca
   escreva(soc[c])
   fimpara
fimalgoritmo
