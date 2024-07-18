//o while é "enquanto" ou seja vamos fazer a repetição até a condição se tornar "True" 


var x = 1


document.write('Inicio <br />')
//false 
while(x <= 10){
    document.write(x + '<br />')

    if(x === 5){
        break
    }     
     x++
}


document.write('<br /> Fim')