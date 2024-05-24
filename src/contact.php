<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

if($_POST){
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $headers = 'From: ' . $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
    
    //send email
    $isMailSent = mail("contact@meteoben.com", "Nouveau message de: $firstName $lastName", "Phone: $phone\n\n$message", $headers);
    echo $isMailSent ? "Mail sent" : "Mail failed";
}
?>