<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maior-e-Menor.php</title>
</head>
<body>
<?php
$num1 = $_POST["num1"];
$num2 = $_POST["num2"];
$num3 = $_POST["num3"];


if ($num1 >= $num2 && $num1 >= $num3) {
    $maior = $num1;
} elseif ($num2 >= $num1 && $num2 >= $num3) {
    $maior = $num2;
} else {
    $maior = $num3;
}

if ($num1 <= $num2 && $num1 <= $num3) {
    $menor = $num1;
} elseif ($num2 <= $num1 && $num2 <= $num3) {
    $menor = $num2;
} else {
    $menor = $num3;
}

echo "Maior Numero: " . $maior . "<br>";
echo "Menor Numero: " . $menor;
?>
    
</body>
</html>