<?php
/*$resultado = array('mensaje' => '');
if( isset($_POST['data']) ) {
    $resultado['mensaje'] = "Viene el valor : ".$_POST['data'];
    echo json_encode($resultado);
    
    exit;
}

echo(isset($_POST['data']));*/

 // Definir el tiempo de respuesta
 header('Content-Type: application/json');
 // Permitir CORS
 header('Access-Control-Allow-Origin: *');
 header('Access-Control-Allow-Methods: GET, POST');
 header("Access-Control-Allow-Headers: X-Requested-With");

    function ajax_response ($data = null, $error = false){
     $response = [
         'content' => $data,
         'error' => $error
     ];
     //echo json_encode($data);


        $decode=json_decode($data, true);
        echo $decode[0]['nombre'];
        echo $decode[0]['precio'];
//...





     //echo "Normal", json_encode($data),"\n";

    // echo($data->{'nombre'});

    }

 if (isset($_REQUEST['data'])){
     ajax_response($_REQUEST['data']);
 }else{
     ajax_response(null, true);
 }

?>