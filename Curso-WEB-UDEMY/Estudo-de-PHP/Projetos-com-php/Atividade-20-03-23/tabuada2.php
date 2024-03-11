<html>
<head>
<title>Página tabuada2.php</title>
</head>
<body>
    <?php
    $i=0;
   
    do($i<=10){
        $tab=2*$i;
        echo 2.'X'.$i.'='$tab.
        '<br>';
        $i++;
    }while($i<-10);
?>

</body>
</html>