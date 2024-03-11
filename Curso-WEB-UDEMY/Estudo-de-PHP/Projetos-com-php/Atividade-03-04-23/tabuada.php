<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabuada.php</title>
</head>
<body>
<h1>Tabuada</h1>
<?php
		$numero = $_POST['numero'];

		echo "<h2>Tabuada do $numero:</h2>";
		echo "<table>";
		for($i=1; $i<=10; $i++){
			echo "<tr><td>$numero x $i = </td><td>" . ($numero*$i) . "</td></tr>";
		}
		echo "</table>";
	?>
    
</body>
</html>