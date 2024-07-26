import express from 'express';
import path from 'path'

const app = express();
const __dirname = path.resolve();

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/Html/index.html');
});

app.get("/sobre",function(req,res){
res.sendFile(__dirname+ '/Html/sobre.html' )
});

app.listen(8084, function () {
    console.log("Testando");
});
