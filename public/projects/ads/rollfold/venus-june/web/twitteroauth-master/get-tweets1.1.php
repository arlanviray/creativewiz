<?php
//session_start();
require_once("twitteroauth/twitteroauth.php"); //Path to twitteroauth library
 
$twitteruser = "GilletteVenusUK";
$notweets = 2;
$consumerkey = "Da47HNNNSsr5RG8vx5Q";
$consumersecret = "ZljFvcNbw1QNDqSSDYnttHmgDXBts4RjtogXyZ9I";
$accesstoken = "253132244-qCNM9buYwdLOQaraEVpaC2zJzCZor0mS13WOsiU0";
$accesstokensecret = "YLSB40IalZtHEMAYlf6yJEQjODvsiNJRzOFl9wc0yDCsr";
 
function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
  $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
  return $connection;
}
 
$connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
 
$tweets = $connection->get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=".$twitteruser."&count=".$notweets);
 
echo json_encode($tweets);
?>