<?

    session_start();
    include "config.php";

    $mysqli = new mysqli("$dbHost", "$dbUsername", "$dbPass", "$dbName");


    $elapsed =  $_GET['elapsed'];

    $SESSION_ID = $_SESSION['id'];
    $SESSION_VISITS = $_SESSION['visits'];
    $_SESSION['time_elapsed'] = $elapsed;
	// $game_mode = $_SESSION['game_sequence'][$_SESSION['pair']];
	// $incentive_mode = $_SESSION['incentive_sequence'][$_SESSION['pair']];

    // $result = $mysqli->query("UPDATE game SET time_elapsed='$t' WHERE id='$SESSION_ID')");

    // $result = $mysqli->query("UPDATE game SET time_elapsed='$t' WHERE id='$SESSION_ID' AND visits='$SESSION_VISITS' AND game='$game_mode')");

    //$result = $mysqli->query("INSERT INTO game (id, visits, time_elapsed)  VALUES ('$SESSION_ID', '$SESSION_VISITS', '$elapsed')");

?>