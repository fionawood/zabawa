<?

    session_start();
    include "config.php";

    $mysqli = new mysqli("$dbHost", "$dbUsername", "$dbPass", "$dbName");


    $t =  $_GET['elapsed'];
    $SESSION_ID = $_SESSION['id'];
    $SESSION_VISITS = $_SESSION['visits'];

    $result = $mysqli->query("INSERT INTO game (id, visits, game, incentive, time_elapsed)  VALUES ('$SESSION_ID', '$SESSION_VISITS', $game_mode, $incentive_mode, '$t')");

?>