<?

	session_start();
	include "config.php";

	$mysqli = new mysqli("$dbHost", "$dbUsername", "$dbPass", "$dbName");


    $test =  $_GET['test'];
    $SESSION_ID = $_SESSION['id'];
    $SESSION_VISITS = $_SESSION['visits'];

    echo "test = ". $test;
    $result = $mysqli->query("INSERT INTO game (id, visits, time_elapsed)  VALUES ('$SESSION_ID', '$SESSION_VISITS', '$test')");

?>