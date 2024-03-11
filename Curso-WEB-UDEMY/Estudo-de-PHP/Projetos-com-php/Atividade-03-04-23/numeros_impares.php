<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Numeros Impares</title>
</head>
<body>
<?php

    $inicio = $_POST["inicio"];
    $fim = $_POST["fim"];
    $soma = 0;
    for ($i = $inicio; $i <= $fim; $i += 2) {
        $soma += $i;
    }

?>
</body>
</html>