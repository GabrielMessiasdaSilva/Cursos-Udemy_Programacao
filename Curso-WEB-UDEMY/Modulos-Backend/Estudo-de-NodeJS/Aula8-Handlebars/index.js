import express from 'express'
import { engine } from 'express-handlebars'
import { Sequelize } from "sequelize";

const app = express();
// Conexão com o banco de dados MySQL
const sequelize = new Sequelize('BdHand', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function() {
    console.log("Conectado com sucesso");
}).catch(function(erro) {
    console.log("Falha ao se conectar: " + erro);
});
//fim da conexao com o Mysql



app.get('/cada',function(req,res){
    res.render("formulario")
})

//enviando o formulario,ela está enviando para a rota add
app.post('/add',function(req,res){
    res.send("Formulário Recebido")
    
})


// Configuração
// Template engine
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.listen(8084, function () {
    console.log("Testando na url http://localhost:8084");
});
