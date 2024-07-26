
//jeito antigo
/*var http= require('http');

http.createServe().listen(8087);
console.log("Criando meu primeiro servidor");*/


//jeito novo (2024)

import http from 'http';

//o req é de requisição
//o res é de resposta

http.createServer(function(req,res){
    res.end("meu primeiro servidor com Node")
}).listen(8084)

console.log("Meu primeiro servidor,rodando no http://localhost:8084")