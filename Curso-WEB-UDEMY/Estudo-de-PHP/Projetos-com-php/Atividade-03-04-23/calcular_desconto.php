<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calcular_Desconto.php</title>
</head>
<body>
    <?php

	$preco = $_POST["preco"];
	$porcentagem = $_POST["porcentagem"];

	$valor_com_desconto = $preco - ($preco * ($porcentagem / 100));

	echo "O valor com desconto é: " . $valor_com_desconto;


?>

    
</body>
</html>