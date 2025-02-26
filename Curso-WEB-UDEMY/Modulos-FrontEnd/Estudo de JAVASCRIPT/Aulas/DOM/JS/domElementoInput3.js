function acao1() {
    //selecionar o valor digitado
    var caracter = document.getElementById('entrada').value;

    //colocamos o .value para recuperar o valor que foi colocado na caixa de texto,usei o document.write para escrever na tela o valor digitado


    //agora recuperamos o valor e limpamos a caixa de texto
    document.getElementById('entrada').value = '';
//limpar espaços em brancos na extremidade da String
caracter.trim()//trim é um função nativa para o tipo de tratamento

    switch (caracter) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':

            //adicionar o caracter no campo referente a número
            document.getElementById('numeros').value+=caracter;
            break;
            
        default:
        //adicionar o caracter no campo referente a letras
        document.getElementById('letras').value += caracter;
    }


    //pegamos o valor de acordo com o Id do input da pagina html 
}