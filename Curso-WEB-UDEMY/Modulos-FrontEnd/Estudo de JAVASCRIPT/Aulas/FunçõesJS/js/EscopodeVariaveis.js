       //existem 3 escopos: Global, Função e o bloco
       var serie = 'amigos'


       //Escopo de blocos 
       if (true) {
           var serie2 = ' eu a patroa e as crianças'
           document.write(serie)
       }

       document.write(serie2)
       document.write('<br />')


       function x() {
           document.write(serie)

           document.write(serie2)
       }

       x()
       