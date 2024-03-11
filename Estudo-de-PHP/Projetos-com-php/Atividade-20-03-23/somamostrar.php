<html>
    <head>
        <title>Página calcularsomamostrar.php </title>
    </head>
    <body>
        <br>
        <?php 
         $A = $_POST['txtta'];
          $B = $_POST['txttb']; 
           $soma= $A + $B;
           echo "A soma dos valores é".$soma.'<br>';
           if($soma>10){
            echo "Soma maior que dez";
           }
           ?>
</body>
</html> 