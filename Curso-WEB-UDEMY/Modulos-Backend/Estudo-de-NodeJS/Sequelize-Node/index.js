import { Sequelize } from "sequelize";


const sequelize = new  Sequelize('SistemaDeCadastro','root','',{
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("Falha ao se conectar:" +erro)
})

//criando os models 

const Postagem = sequelize.define('postagem',{
    Titulo:{
        type:Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

Postagem.create({
    Titulo: "Um título",
    conteudo: "conteudo qualquer",
    Titulo: "Segundo Tiitulo",
    conteudo: "Conteudo 2 "
})

//Postagem.sync({force: true})