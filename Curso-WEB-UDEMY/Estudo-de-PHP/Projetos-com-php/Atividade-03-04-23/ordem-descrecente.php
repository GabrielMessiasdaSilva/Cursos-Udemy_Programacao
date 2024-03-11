<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exeibir Numero Impares.php</title>
</head>
<body>
<h1>Exibir números ímpares em ordem decrescente</h1>
	<?php
	
		$numero1 = $_POST["numero1"];
		$numero2 = $_POST["numero2"];

	
		if ($numero1 > $numero2) {
			$maior = $numero1;
			$menor = $numero2;
		} else {
			$maior = $numero2;
			$menor = $numero1;
		}

		for ($i = $maior; $i >= $menor; $i--) {
			if ($i % 2 == 1) {
				echo "$i<br>";
			}
		}
	?>
    
</body>
</html>