const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const { engine } = require('express-handlebars'); // Importação correta

const app = express();

//a configuração de usar o handlebars mudou agora é assim
// Configuração do Template Engine (express-handlebars)
app.engine('handlebars', engine({ defaultLayout: 'main' })); // Use "engine" em vez de "handlebars"
app.set('view engine', 'handlebars');





// Conexão com o banco de dados MySQL
const sequelize = new Sequelize('aula10', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

// Configuração do Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rota para exibir o formulário
app.get('/add', (req, res) => {
    res.render('formulario'); // Corrigido "res.sender" para "res.render"
});

// Rota para processar o formulário (método POST)
app.post('/add', (req, res) => {
    res.send("titulo:  "+req.body.titulo +"</br>"+"  conteudo:   "+req.body.conteudo);
});

// Iniciando o servidor
app.listen(8081, function () {
    console.log('servidor iniciado')
})