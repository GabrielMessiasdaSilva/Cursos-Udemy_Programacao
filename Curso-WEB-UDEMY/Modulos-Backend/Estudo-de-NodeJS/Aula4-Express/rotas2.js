import express from 'express'

const app = express()



app.get(("/"), function (req, res) {
    res.send("Bom dia")
})


//vamos criar um parametro
app.get(("/Bom/:Dia"), function (req, res) {
    res.send("Bom dia")
})

//para que é util
app.get('/Teste/:nome/:cargo', function (req,res) {
    res.send("<h1>Olá</h1> </ br>"+ req.params.nome);
})

//o send só enviado uma vez dentro de uma rota,não é  possivel enviar mais de um



app.listen(8084, function () {
    console.log("Testando")
})