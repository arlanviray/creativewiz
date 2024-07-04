<?php

    // Import PHPMailer classes
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    use PHPMailer\PHPMailer\SMTP;

    require "vendor/phpmailer/src/PHPMailer.php";
    require "vendor/phpmailer/src/Exception.php";
    require "vendor/phpmailer/src/SMTP.php";
    require "vendor/Autoloader.php";

    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);
    $debug = false;

    try {
        // Create instance of PHPMailer class
        $mail = new PHPMailer($debug);
        if ($debug) {
            // issue a detailed log
            $mail->SMTPDebug = SMTP::DEBUG_SERVER; 
        }

        // Authentication with SMTP
        $mail-> isSMTP();
        $mail->SMTPAuth = true;
        
        // Login
        $mail->Host = "smtp.ionos.co.uk";
        $mail->Port = 587;
        $mail->Username = "contact@creativewiz.uk";
        $mail->Password = "Cw1z-avionosemail!";
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->setFrom("contact@creativewiz.uk", "Creativewiz");
        $mail->addAddress("arlan.viray@gmail.com", "Arlan Viray");
        // $mail->addAddress("hang2dam@gmail.com", "Hang Dam);
        // $mail->addReplyTo("contact@creativewiz.uk", "Creativewiz Information");
        $mail->CharSet = "UTF-8";
        $mail->Encoding = "base64";
        $mail->isHTML(true);
        $mail->Subject = "Contact Enquiry";
        $mail->Body = "<b>Name:</b> ". $_POST["name"] ."<br><b>Email:</b> ". $_POST["email"] ."<br><b>Message:</b><br>". nl2br($_POST["message"]);
        // $mail->AltBody = "The text as a simple text element";
        $mail->send();

        echo json_encode([
            "sent" => true, 
            "message" => "Thank you for contacting Creativewiz!<br>We'll get back to you shortly."
        ]);

    } catch (Exception $e) {
        // echo "Message could not be sent. Mailer Error: ".$e->getMessage();
        echo json_encode(["sent" => false, "message" => "Something went wrong!<br>Please try again later."]);
    }

?> 