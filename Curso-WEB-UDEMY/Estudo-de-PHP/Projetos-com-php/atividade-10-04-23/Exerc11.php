<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicio 11</title>
</head>
<body>
<?php
    $inicio = 3;
    $fim = 8;
    $soma = 0;

    for ($i = $inicio; $i <= $fim; $i++) {
        $soma += $i;
    }

    echo "A soma do intervalo de $inicio a $fim é: $soma";
?>
</body>
</html>