<?php
	$name = trim(strip_tags($_POST['name']));
	$email = trim(strip_tags($_POST['email']));
	$subject = trim(strip_tags($_POST['subject']));
	$message = htmlentities($_POST['message']);
	
	$to = 'ivan_leong@hotmail.com';
	
	$body = $message;

	$headers = "From: $email\r\n";
	$headers .= "Content-type: text/html\r\n";
	
	mail($to, $subject, $body, $headers);
	
    //header('Location: thanks.html');
?>