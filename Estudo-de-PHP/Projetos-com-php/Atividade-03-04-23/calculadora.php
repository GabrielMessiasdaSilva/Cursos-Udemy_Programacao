<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora em PHP</title>
</head>
<body>
<?php
    $valor1 = $_POST["valor1"];
    $valor2 = $_POST["valor2"];
    $operacao = $_POST["operacao"];

    switch ($operacao) {
        case "+":
            $resultado = $valor1 + $valor2;
            echo "<p>A soma de $valor1 e $valor2 é igual a $resultado.</p>";
            break;
        case "-":
            $resultado = $valor1 - $valor2;
            echo "<p>A subtração de $valor1 e $valor2 é igual a $resultado.</p>";
            break;
        case "/":
            if ($valor2 == 0) {
                echo "<p>Erro: divisão por zero.</p>";
            } else {
                $resultado = $valor1 / $valor2;
                echo "<p>A divisão de $valor1 por $valor2 é igual a $resultado.</p>";
            }
            break;
        case "*":
            $resultado = $valor1 * $valor2;
            echo "<p>A multiplicação de $valor1 e $valor2 é igual a $resultado.</p>";
            break;
        default:
            echo "<p>Operação inválida.</p>";
            break;
    }
    ?>
</body>
</html>