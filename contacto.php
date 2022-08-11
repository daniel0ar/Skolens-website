<?php
  ini_set('display_errors', 1);
  $errors = '';
  $statusMsg = '';
  $msgClass = '';
  $myemail = 'skolenslab@gmail.com';
  if(empty($_POST['name'])  || 
    empty($_POST['email']) || 
    empty($_POST['message']))
  {
      $errors .= "\n Error: No se llenaron los campos requeridos";
  }

  $name = $_POST['name']; 
  $email_address = $_POST['email'];
  $message = $_POST['message']; 

  if (!preg_match(
  "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
  $email_address))
  {
      $errors .= "\n Error: El correo ingresado no es válido";
  }


  if( empty($errors))

  {

    $to = $myemail;

    $email_subject = "Nuevo mensaje del sitio web de Skolens";

    $email_body = "Has recibido un nuevo mensaje de una persona desde tu página web.".

    " Detalles:\n Nombre: $name\n".

    " Correo: $email_address\n Mensaje: \n\t $message";

    $headers = "From: $myemail\n";

    $headers .= "Reply-To: $email_address";

    
    mail($to,$email_subject,$email_body,$headers);
  }
  header("location: index.html")
  die();
?>