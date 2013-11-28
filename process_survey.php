<?php
	session_start();
	include "config.php";

	$mysqli = new mysqli("$dbHost", "$dbUsername", "$dbPass", "$dbName");

	$SESSION_ID = $_SESSION['id'];
	$SESSION_VIEWS = $_SESSION['views'];
	$game_mode = $_SESSION['game_sequence'][$_SESSION['pair']];
	$incentive_mode = $_SESSION['incentive_sequence'][$_SESSION['pair']];
	$enjoy = $_POST['enjoy'];
	$challenge = $_POST['challenge'];
	$similar = $_POST['similar'];
	$enjoy_similar = $_POST['enjoy-similar'];
	$replay = $_POST['replay'];
	var_dump(empty($_POST["incentive"]));

	if(!empty($_POST["incentive"]))
		$incentive = $_POST['incentive'];
	else
		$incentive = 0;

	$time = time();

	if(!$mysqli->connect_errno)
	{
		echo $mysqli->query("INSERT INTO game (user,
										  views,
										  game,
										  incentive,
										  start_time,
										  end_time,
										  enjoy_q,
										  challenge_q,
										  similar_q,
										  enjoy_similar_q,
										  replay_q,
										  incentive_q) 
						VALUES ('$SESSION_ID',
								'$SESSION_VIEWS',
								'$game_mode',
								'$incentive_mode',
								'$time',
								'$time',
								'$enjoy',
								'$challenge',
								'$similar',
								'$enjoy_similar',
								'$replay,
								'$incentive')");

		echo 'id = '. $SESSION_ID;
		echo ' views = '. $SESSION_VIEWS;
		echo ' enjoy = '. $enjoy;
		echo ' challenge = '. $challenge;
		echo ' similar = '. $similar;
		echo ' enjoy_similar = '. $enjoy_similar;
		echo ' replay = '. $replay;
		echo ' incentive = '. $incentive;
	}

?>