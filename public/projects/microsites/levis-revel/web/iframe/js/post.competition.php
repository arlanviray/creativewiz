<?php

	// +----------------------------------------------------------------------
	// | PHP version 5.0
	// +----------------------------------------------------------------------
	// | Copyright (c) 2014
	// +----------------------------------------------------------------------
	// | Author: Arlan Viray <arlanv555@gmail.com>
	// +----------------------------------------------------------------------
	
	$email     = $_POST['email'];
	$friend1   = $_POST['friend1'];
	$friend2   = $_POST['friend2'];
	$urlhash   = $_POST['urlhash'];
	$subscribe = $_POST['subscribe'];
	$agree     = $_POST['agree'];
	
	if(isset($email) && isset($friend1) && $agree === 'yes'){
		
		$recipients = array($friend1, $friend2);
		$user_subject = "Want to win £100 to spend in-store at Levi’s®?";
		$user_message = "I just entered a competition to win one of 10 vouchers worth £100 each to spend in-store at Levi’s®. Click on the link to create your own bespoke Levi’s® Revel™ look for your chance to do the same. Levi’s® Revel™ is the pinnacle of denim innovation that shapes, lifts and lengthens.\n\n";
		$user_message.= "http://www.elleuk.com/promotion/levis-revel". $urlhash ."\n\n";
		$success = mail(implode(",", $recipients), $user_subject, $user_message, "From: ". $email);
		if($success){
		
			echo "Success";
			$admin_subject = "Levi's Revel";
			$admin_message = "Competitions entries:\n\n";
			$admin_message.= "Email: ". $email ."\n\n";
			$admin_message.= "Wish to receive info and offers from Levi's: ". $subscribe ."\n\n";
			mail("hearstcompetitions@gmail.com", $admin_subject, $admin_message, "From: postmaster@elleuk.com");//
			
		} else {
			echo "Error";
		}
		
	} else {
		echo "Server Error";
	}
	
?>
