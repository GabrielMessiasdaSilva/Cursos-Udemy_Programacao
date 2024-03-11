<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicio 13</title>
</head>
<body>

<?php
    echo "Números divisíveis por 4 menores de 20: ";
    for ($i = 1; $i < 20; $i++) {
        if ($i % 4 == 0) {
            echo "$i ";
        }
    }
?>
    
</body>
</html>