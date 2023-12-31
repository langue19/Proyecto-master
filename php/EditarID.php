<?php
include 'conexion.php';
include 'crearBD.php';
include 'crearTabla.php';

$dni = intval($_POST['dni']);
$estado = $_POST['estado'];
$fecha = $_POST['fechaI'];


    $conn->exec("USE $dbname");

    // Consulta para verificar si existe un registro con el DNI y la fecha especificada en datos_internacion
    $sqlInternacion = "SELECT * FROM datos_internacion WHERE Dni = :dni AND Fecha_registro = :fecha";
    $consultaInternacion = $conn->prepare($sqlInternacion);
    $consultaInternacion->bindParam(':dni', $dni);
    $consultaInternacion->bindParam(':fecha', $fecha);
    $consultaInternacion->execute();

    // Consulta para verificar si existe un registro con el DNI y la fecha especificada en datos_domiciliario
    $sqlDomiciliario = "SELECT * FROM datos_domiciliario WHERE Dni = :dni AND Fecha_registro = :fecha";
    $consultaDomiciliario = $conn->prepare($sqlDomiciliario);
    $consultaDomiciliario->bindParam(':dni', $dni);
    $consultaDomiciliario->bindParam(':fecha', $fecha);
    $consultaDomiciliario->execute();

    // Verificar si se encontraron filas en el resultado de la consulta en datos_internacion
    if ($estado == "Internacion") {
        // Actualizar datos_internacion
        $sala = $_POST['sala'];
        $habitacion = $_POST['habitacion'];
        $cama = $_POST['cama'];
        $disc1 = $_POST['disc1'];
        $obs1 = $_POST['obs1'];
        $diag1 = $_POST['diag1'];

        $stmt = $conn->prepare("UPDATE datos_internacion SET Sala = ?, Habitacion = ?, Cama = ?, Discapacidad = ?, Observacion = ?, Diagnostico = ?, Estado = ? WHERE Dni = ? AND Fecha_registro = ?");
        $stmt->execute([$sala, $habitacion, $cama, $disc1, $obs1, $diag1, $estado, $dni, $fecha]);

    } elseif ($estado == "Domiciliario") {
        // Actualizar datos_domiciliario
        $direccion = $_POST['dire'];
        $disc = $_POST['disc'];
        $obs = $_POST['obs'];
        $diag = $_POST['diag'];

        $stmt = $conn->prepare("UPDATE datos_domiciliario SET Direccion = ?, Discapacidad = ?, Observacion = ?, Diagnostico = ?, Estado = ? WHERE Dni = ? AND Fecha_registro = ?");
        $stmt->execute([$direccion, $disc, $obs, $diag, $estado, $dni, $fecha]);
    }

    header("location: formularioAlumno.php");

?>
