
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>verificar_aprovacao.php</title>
</head>
<body>

<?php

    $nota1 = $_POST["nota1"];
    $nota2 = $_POST["nota2"];
    $nota3 = $_POST["nota3"];
    $nota4 = $_POST["nota4"];

    $media = ($nota1 + $nota2 + $nota3 + $nota4) / 4;

    if ($media >= 5) {
        echo " Aluno:Aprovado";
    } else {
        echo "Aluno : Reprovado";
    }

?>

    
</body>
</html>