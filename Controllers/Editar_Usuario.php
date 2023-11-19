<?php

include("db.php");
$USUARI_ConsInte__b = $_REQUEST['USUARI_ConsInte__b'];

$Name_usuarios = $_POST['Name_usuarios'];
$Email_usuarios=$_POST['Email_usuarios'];
$USUARI_passCorreo_b=$_POST['Password_usuarios'];
$Id_usuarios=$_POST['Id_usuarios'];
$Image_usuarios=addslashes(file_get_contents($_FILES['Image_usuarios']['tmp_name']));
$Role_usuarios =$_POST['Role_usuarios'];
$sql = "UPDATE usuari SET
        USUARI_Nombre____b = '$Name_usuarios',
        USUARI_Correo___b = '$Email_usuarios',
        USUARI_Identific_b = $Id_usuarios,
        USUARI_Foto______b = '$Image_usuarios',
        USUARI_Cargo_____b = '$Role_usuarios',
        USUARI_passCorreo_b = '$USUARI_passCorreo_b'
        WHERE USUARI_ConsInte__b = $USUARI_ConsInte__b";






$resultado = $conn ->query($sql);

if($resultado){
    echo "si se pudo";
    header("location:../View/Pagina_Principal.php");
}else{
    echo "mal ñero";
}

?>