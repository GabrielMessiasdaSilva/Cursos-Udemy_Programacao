<html>
<head>
<title>Página dosalunos.php</title>
</head>
<body>
    <?php
    echo"Segue abaixo as informções digitadas na página anterior". '<br>';
    echo "Nome digitado ....:".$_POST['txtnome'].'<br>';
    echo "Telefone.....:".$_POST['txttelefone'].'<br>';
    echo "Curso .....:".$_POST['cbocurso'].'<br>';
    echo "RG ......".$_POST['txtRG'].'<br>';
    echo"Módulo......:".$_POST['txtmodulo'].'<br>';
?>
</body>
</html>