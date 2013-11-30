<?

    session_start();
    include "config.php";

    $mysqli = new mysqli("$dbHost", "$dbUsername", "$dbPass", "$dbName");


    $email =  $_POST['email'];

    $result=$mysqli->query("INSERT INTO emails (email) VALUES ('$email')");
    header("Location: final.html"); 


?>