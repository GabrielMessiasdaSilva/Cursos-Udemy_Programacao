algoritmo "Listagem de alunos"

var
NOME:VETOR[1..4] de Caractere
n1:vetor[1..4] de Real
n2:vetor[1..4] de Real
m:vetor[1..4] de Real
c:Inteiro
i:Inteiro
sm,mt:real
tot:inteiro

inicio
Para i<-1 ate 4 faca
   Escreval("Aluno",i)
   Escreval("Nome :")
   Leia(nome[i])
   Escreval("Primeira nota:")
   leia(n1[i])
   Escreva("A segunda nota: ")
   Leia(n2[i])
   m[i]<-(n1[i]+n2[i])/2
Fimpara
mt<-sm/4
limpatela
escreva("Listagem de alunos")
escreval("------------")
para i <-1 ate 4 faca
   escreva(nome[i],m[i])
   //tarefa adicional
   se(m[i]>mt)entao
   tot<tot+1
   
fimpara
escreval("ao todo temos,"tot"alunos acima da media da tuma que é ",mt)
fimalgoritmo
