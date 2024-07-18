
setTimeout(function(){
    document.write("a palavra terá seu retorno ao abrir a página e fechar"+'</br>')
},2000)

var janela
setInterval(
    function TesteCallback()
    { 
        janela = window.open('https://www.google.com.br/books/edition/O_XYZ_das_Impress%C3%A3o_3D/lbrLDwAAQBAJ?hl=pt-BR&gbpv=0','testeDeCalback','width=200;','height=200;')
    },)