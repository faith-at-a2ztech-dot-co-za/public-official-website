<?php

    function protect($data){
        $data = trim($data);
        $data = stripcslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    $school_name = protect($_POST['school-name']);
    $school_email = protect($_POST['school-email']);

    $subject = "Domain Registration Query";
    $message = "I want domain name ".$school_name.".school.za";

    $mailheader = "From: ".$school_email."\r\n";
    $recipient = "keletso@a2ztech.co.za";

    mail($recipient, $subject, $message, $mailheader)
    or die('failed to send message');

?>