<?php
	session_start();
	include "config.php";

	$mysqli = new mysqli("$dbHost", "$dbUsername", "$dbPass", "$dbName");

	$SESSION_ID = $_SESSION['id'];
	$SESSION_VISITS = $_SESSION['visits'];
	$game_mode = $_SESSION['game_sequence'][$_SESSION['pair']];
	$incentive_mode = $_SESSION['incentive_sequence'][$_SESSION['pair']];
	$enjoy = $_POST['enjoy'];
	$challenge = $_POST['challenge'];
	$similar = $_POST['similar'];
	$enjoy_similar = $_POST['enjoy-similar'];
	$replay = $_POST['replay'];
	if(!empty($_POST["incentive"]))
		$incentive = $_POST['incentive'];
	else
		$incentive = 0;

	$elapsed = $_SESSION['time_elapsed'];


	if(!$mysqli->connect_errno) {
		$result=$mysqli->query("INSERT INTO game (id, visits, game, incentive, time_elapsed, enjoy_q, challenge_q, similar_q, enjoy_similar_q, replay_q, incentive_q) VALUES ('$SESSION_ID', '$SESSION_VISITS', '$game_mode', '$incentive_mode', '$elapsed', '$enjoy', '$challenge', '$similar', '$enjoy_similar', '$replay', '$incentive')");
    }

    $_SESSION['pair'] = $_SESSION['pair']+1;
    if($_SESSION['pair']>2) {
    	$game_mode='debrief';
    } else {
    	$game_mode = $_SESSION['game_sequence'][$_SESSION['pair']];
		$incentive_mode = $_SESSION['incentive_sequence'][$_SESSION['pair']];
    }
	header("Location: ". $game_mode. ".php"); 

?>