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
        $codigo = $_POST['codigo'];

        switch ($codigo) {
            case 1:
                echo "<p>Secretária</p>";
                break;
            case 2:
                echo "<p>Gerente</p>";
                break;
            case 3:
                echo "<p>Operário</p>";
                break;
            case 4:
                echo "<p>Analista</p>";
                    break;
            case 5:
                    echo "<p>Faxineiro</p>";
                    break;
            default:
                echo "<p style='color: red;'>Código inválido</p>";
                break;
        }
    ?>
</body>
</html>