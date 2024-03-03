var ListaHeroisMarvel = ['Biex', 'Bruce Banner', 'Stephen Strange', 'Peter Parker', 'Steve Rogers', 'Scott Lang', 'Tony Stark', 'Howard Stark', 'Frank Castle', 'Jessica Jone', 'Reed Richards', 'Johnny Storm', 'Sam Wilson', 'Victor Von Doom', 'James Barnes', 'Max Eisenhardt']


console.log(ListaHeroisMarvel)


ListaHeroisMarvel.forEach(function (valor, indice, array) {
    console.log('indice' + indice + ' valor: ' + valor)
    console.log(array)
}) 
// uma função de callback


document.write(ListaHeroisMarvel)