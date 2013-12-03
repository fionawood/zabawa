<?
    session_start();
    include "config.php";

    $mysqli = new mysqli("$dbHost", "$dbUsername", "$dbPass", "$dbName");


    $email =  $_POST['email'];
    $comment =  $_POST['comments'];

    $result=$mysqli->query("INSERT INTO emails (email, comment) VALUES ('$email', '$comment')");
    header("Location: final.html"); 
?>