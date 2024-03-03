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
    $nome = $_POST['nome'];
    $peso = $_POST['peso'];
    $sexo = $_POST['sexo'];
    $altura = $_POST['altura'];

    if ($sexo == 'masculino') {
        $peso_ideal = $altura * $altura * 23;
    } else {
        $peso_ideal = $altura * $altura * 22;
    }

    echo "<p>Peso ideal para $nome: $peso_ideal kg</p>";

    if ($peso > $peso_ideal) {
        echo '<p style="color: red;">Acima do peso ideal</p>';
    } elseif ($peso < $peso_ideal) {
        echo '<p style="color: yellow;">Abaixo do peso ideal</p>';
    } else {
        echo '<p style="color: blue;">Dentro do peso ideal</p>';
    }
}
?>


</body>
</html>