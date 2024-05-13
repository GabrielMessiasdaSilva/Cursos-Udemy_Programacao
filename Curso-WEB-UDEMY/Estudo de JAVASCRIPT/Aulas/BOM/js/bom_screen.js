  var largura =  window.screen.availWidth // propriedade recuperada do navegador recuperado pelo o BOM Screen
   var altura = window.screen.availHeight
   
   document.write("A altura de navegador é  " + altura+'</br>')
document.write(" e a largura é: " + largura)

if(largura<500){
    document("lógica para o menu desktop")
}
else{
    document.write("Lógica para o menu mobile")
}