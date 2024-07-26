

import express from 'express'
// aqui é um módulo,retornando-o uma função

const app = express();

//criando um rota ="caminho para aplicação"
//é dessa maneira que criamos rotas com NodeJS
//o express é orientado a rotas
app.get("/", function (req, res) {
    res.send("Meu App com Express")
});

app.get("/sobre", function (req, res) {
    res.send("minha pagina")
});


app.get("/blog", function (req, res) {
    res.send("Bem vindo ao meu Blog")
});



console.log("testando rotas")

//criamos um servidor com express
app.listen(8083, function () {//criando uma função de callback
    console.log("rodando na url http://localhost:8083")
});// essa deve ser a ultima linha do código para funcionar


