<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php

if ($_POST) {
    $usuario = $_POST["usuario"];
    $senha = $_POST["senha"];

    if ($usuario == "ETE" && $senha == "ETE") {
        echo "<h2>Bem-vindo ao Sistema, $usuario!</h2>";
    } else {
        echo "<h2>Usuário ou senha inválidos, tente novamente!</h2>";
    }
}

?>
    
</body>
</html>