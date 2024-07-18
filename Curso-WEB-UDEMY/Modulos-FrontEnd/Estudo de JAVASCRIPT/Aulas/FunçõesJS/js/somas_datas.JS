var data = new Date()

//adicionar / remover dias
document.write(toString())
data.setDate(data.getDate()+720)
document.write('</hr>')
document.write(data.toString())
document.write('< /br> </ br>')

//adicionar(somando) / remover meses(subtraindo)
document.write(toString())
data.setMonth(data.getDate()-3)   
document.write('< / hr>')    
document.write(month.toString())
document.write('< /br> </ br>')

//adicionar(somando) / remover Ano(subtraindo)
document.write(toString())
data.setFullYear(data.getDate()-3)   
document.write('< / hr>')    
document.write(data.toString())
document.write('< /br> </ br>')
