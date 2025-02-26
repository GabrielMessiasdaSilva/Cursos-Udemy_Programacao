//como criar um server em node js, requisição http:

//var http = require('http') 

import http from 'http'

http.createServer (function(req,res){
    res.end("fiz o meu exercicio de nodejs")
}).listen(8081);

console.log("servidor rodando")