//exemplo de situação de erro e o seu tratamento
var video = Array()

video[1] = Array()
video[1]['nome'] = 'Fullmeta Alchemist'
video[1]['categoria'] = 'Anime'

function getVideo(video) {

    try {
        //lógica,vamos forçar uma situação de erro
        //http
        console.log(video[0]['nome'])
    } catch (e) {
        console.log('Agora estou tratando o erro')
    }

    finally {
        console.log('Passou por aqui (try/catch)')
    }
    console.log("A aplicação não morreu")
}
getVideo(video);


//no catch deve ter um parametro
console.log(e);