<?php
  $name = $_POST["name"];
  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $message = $_POST["message"];
  $toEmail = "mahdi3mohammad@gmail.com";

  $mailHeaders = "Name: " . $name .
  "\r\n Email: " . $email .
  "\r\n Subject: " . $subject .
  "\r\n Message: " . $message . "\r\n";

  if(mail($toEmail, $name, $mailHeaders)) {
    $return = "Your email was successfully sent.";
  }
  ?>