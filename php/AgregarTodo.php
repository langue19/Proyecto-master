<?php



include 'conexion.php';

include 'crearBD.php';

include 'crearTabla.php';



$dni = $_POST['documento'];



$reingreso = $_POST['pasa'];


$conn->exec("USE $dbname");




if($reingreso != "reingreso"){

    $nomb = $_POST['nombre'];

    $ape = $_POST['apellido'];
    
    $genero = $_POST['genero'];
    
    $dom = $_POST['domicilio'];
    
    $fecha_nac = $_POST['fecha_nacimiento'];
    
    $nombTutor = $_POST['nombre_tutor'];
    
    $sql = "SELECT * FROM datos_personales WHERE Dni = :dni"; // Usar marcador de posición

    $consulta = $conn->prepare($sql);
    
    $consulta->bindParam(':dni', $dni); // Vincular el valor a la consulta
    
    $consulta->execute();
    
    
    
    // Verificar si se encontraron filas en el resultado de la consulta
    
    if ($consulta->rowCount() > 0) {
    
    ?>
    
        <script>
    
            alert("El DNI ingresado ya existe.");
    
            window.location.href = "agregarA.php";
    
        </script>
    
    <?php
    
    }
    
    $stmt = $conn->prepare("INSERT INTO datos_personales(Dni, Nombre, Apellido, Sexo, Domicilio, Fecha_nacimiento, Nombre_del_tutor) VALUES (?, ?, ?, ?, ?, ?, ?)");
    
    $stmt->execute([$dni, $nomb, $ape, $genero, $dom, $fecha_nac, $nombTutor]);
    
}


$fecha_ing = $_POST['fecha_ingreso'];
$estado = $_POST['estado'];

$stmt = $conn->prepare("INSERT INTO personales_fechas(Dni, Fecha_registro, Estado) VALUES (?,?,?)");

$stmt->execute([$dni, $fecha_ing,$estado]);

if ($fecha_ing != "") {



    $escRef = $_POST['escRef'];

    $grado = $_POST['grado'];

    $poseEsc = $_POST['posE'];

    $escComun = $_POST['escC'];

    $LecturaCont = $_POST['lectC'];

    $InterpText = $_POST['interpT'];

    $opBasicas = $_POST['resuelvOpBas'];

    $lectYesct = $_POST['LectyEsc'];

    $obs_resuelvOpBas = $_POST['obs_resuelvOpBas'];
    $obs_LectyEsc = $_POST['obs_LectyEsc'];
    $obs_interpT = $_POST['obs_interpT'];
    $obs_lectC = $_POST['obs_lectC'];



    $conn->exec("USE $dbname");



    $stmt = $conn->prepare("INSERT INTO datos_pedagogicos(Dni, Fecha_registro, escRef, Grado, poseeEsc, escComun, lectContinua,obs_lectC, interpTextos,obs_interpT, resuelvOpBas,obs_resuelvOpBas, lectyescri,obs_LectyEsc) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

    $stmt->execute([$dni, $fecha_ing, $escRef, $grado, $poseEsc, $escComun, $LecturaCont,$obs_lectC, $InterpText,$obs_interpT, $opBasicas,$obs_resuelvOpBas, $lectYesct,$obs_LectyEsc]);





    $estado = $_POST['estado'];




    $conn->exec("USE $dbname");

}



if ($estado == "Internacion") {

    $sala = $_POST['sala'];

    $habitacion = $_POST['habitacion'];

    $cama = $_POST['cama'];

    $disc1 = $_POST['disc1'];

    $obs1 = $_POST['obs1'];

    $diag1 = $_POST['diag1'];

    $stmt = $conn->prepare("INSERT INTO datos_internacion(Dni, Fecha_registro, Sala, Habitacion, Cama, Discapacidad, Observacion, Diagnostico, Estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");



    $stmt->execute([$dni, $fecha_ing, $sala, $habitacion, $cama, $disc1, $obs1, $diag1, $estado]);

}

if ($estado == "Domiciliario") {

    $direccion = $_POST['dire'];

    $disc = $_POST['disc'];

    $obs = $_POST['obs'];

    $diag = $_POST['diag'];



    $stmt = $conn->prepare("INSERT INTO datos_domiciliario(Dni, Fecha_registro, Direccion, Discapacidad, Observacion, Diagnostico, Estado) VALUES (?,?,?,?,?,?,?)");



    $stmt->execute([$dni, $fecha_ing, $direccion, $disc, $obs, $diag, $estado]);

}





header("location: formularioAlumno.php");



?>