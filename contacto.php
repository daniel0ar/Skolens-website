<?php
  /**
  * Requires the "PHP Email Form" library
  * The "PHP Email Form" library is available only in the pro version of the template
  * The library should be uploaded to: vendor/php-email-form/php-email-form.php
  * For more info and help: https://bootstrapmade.com/php-email-form/
  */

  // Replace contact@example.com with your real receiving email address
  ini_set('display_errors', 1);
  $errors = '';
  $statusMsg = '';
  $msgClass = '';
  $myemail = 'ventas@mahisa.com.pe';
  if(empty($_POST['name'])  || 
    empty($_POST['email']) || 
    empty($_POST['message']))
  {
      $errors .= "\n Error: No se llenaron los campos requeridos";
  }

  $name = $_POST['name']; 
  $email_address = $_POST['email'];
  $telephone = $_POST['telephone'];
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

    $email_subject = "Nuevo mensaje desde mahisa.com.pe";

    $email_body = "Has recibido un nuevo mensaje de una persona desde tu página web.".

    " Detalles:\n Nombre: $name\n Teléfono: $telephone \n".

    " Correo: $email_address\n Mensaje: \n\t $message";

    $headers = "From: $myemail\n";

    $headers .= "Reply-To: $email_address";

    
    mail($to,$email_subject,$email_body,$headers);
  }
  //header("location: mensaje-enviado");
?>