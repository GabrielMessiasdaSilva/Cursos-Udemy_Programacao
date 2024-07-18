<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculo_salario.php</title>
</head>
<body>
<?php

$salario_bruto = 5000;

$gratificacao = $salario_bruto * 0.1;
$imposto_renda = $salario_bruto * 0.2;
$salario_liquido = $salario_bruto + $gratificacao - $imposto_renda;

echo "Salário bruto: R$ $salario_bruto <br>";
echo "Gratificação: R$ $gratificacao <br>";
echo "Imposto de renda: R$ $imposto_renda <br>";
echo "Salário líquido: R$ $salario_liquido";

?>
    
</body>
</html>