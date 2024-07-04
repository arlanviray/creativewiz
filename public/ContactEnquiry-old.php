<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type");
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);
    
    $name    = $_POST["name"];
	$email   = $_POST["email"];
	$message = $_POST["message"];

    if (empty($name) && empty($email) && empty($message)) die();

    if ($_POST && ($_SERVER["SERVER_NAME"] === "www.creativewiz.net" || $_SERVER["SERVER_NAME"] === "localhost")) {
        // set response code - 200 OK
        http_response_code(200);

        $to = "arlan.viray@creativewiz.net, hang.dam@creativewiz.net"; //
        $subject = "Creativewiz: Contact Enquiry";
        $from = $email;

        // data
        $msg = "";
        $msg.= "Name: ". $name ."\r\n";
        $msg.= "Email: ". $email ."\r\n";
        $msg.= "Message:\r\n". $message ."\r\n";

        // headers
        // $headers = "";
        // $headers.= "MIME-Version: 1.0" . "\r\n";
        // $headers.= "Content-type: text/html; charset=iso-8859-1" . "\r\n";
        // $headers.= "From: <". $from .">";

        // send email
        mail($to, $subject, $msg, "From: ". $from);

        echo json_encode([
            "sent" => true, 
            "message" => "Thank you for contacting Creativewiz!<br>We'll get back to you shortly."
        ]);
    }
    else {
        // tell the user about error
        echo json_encode(["sent" => false, "message" => "Something went wrong!<br>Please try again later."]);
    }

?>