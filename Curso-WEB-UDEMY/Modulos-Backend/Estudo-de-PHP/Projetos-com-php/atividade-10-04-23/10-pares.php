<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Números Pares e Soma<</title>
</head>
<body>
<h1>Números Pares e Soma</h1>
    <?php
        $soma = 0;
        echo "<p>Números pares: ";
        for ($i = 1; $i <= 10; $i++) {
            if ($i % 2 == 0) {
                echo "$i ";
                $soma += $i;
            }
        }
        echo "</p>";
        echo "<p>Soma dos números pares: $soma</p>";
    ?>
</body>
</html>