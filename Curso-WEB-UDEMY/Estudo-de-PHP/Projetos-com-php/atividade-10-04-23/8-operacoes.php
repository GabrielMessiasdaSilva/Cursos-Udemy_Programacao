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
        $v1 = $_POST['v1'];
        $v2 = $_POST['v2'];
        $codigo = $_POST['codigo'];
        $resultado = 0;

        switch ($codigo) {
            case 1:
                $resultado = $v1 + $v2;
                echo "<p>Resultado: $resultado</p>";
                break;
            case 2:
                $resultado = $v1 - $v2;
                echo "<p>Resultado: $resultado</p>";
                break;
            case 3:
                if ($v2 == 0) {
                    echo "<p style='color: red;'>Erro: Divisão por zero não é permitida!</p>";
                } else {
                    $resultado = $v1 / $v2;
                    echo "<p>Resultado: $resultado</p>";
                }
                break;
            case 4:
                $resultado = $v1 * $v2;
                echo "<p>Resultado: $resultado</p>";
                break;
            default:
                echo "<p style='color: red;'>Erro: Código inválido!</p>";
                break;
        }
    ?>

</body>
</html>