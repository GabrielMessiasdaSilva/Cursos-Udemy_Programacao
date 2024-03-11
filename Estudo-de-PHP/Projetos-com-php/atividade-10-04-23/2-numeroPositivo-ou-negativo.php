<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php

if ($_POST) {
    $numero = $_POST["numero"];

    // Verificar se o número é positivo ou negativo
    if ($numero >= 0) {
        echo "<p style='color: blue;'>Número positivo</p>";
    } else {
        echo "<p style='color: red;'>Número negativo</p>";
    }
}

?>

</body>
</html>