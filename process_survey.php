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
	$incentive = $_POST['incentive'];
	echo 'incentive = '. $incentive;

	if(!isset($incentive)) $incentive = 0;

	echo 'enjoy = '. $enjoy;
	echo 'challenge = '. $challenge;
	echo 'similar = '. $similar;
	echo 'enjoy_similar = '. $enjoy_similar;
	echo 'replay = '. $replay;
	echo 'incentive = '. $incentive;


	$mysqli->query("INSERT INTO game (user,
									  views,
									  game,
									  incentive,
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
							'$enjoy',
							'$challenge',
							'$similar',
							'$enjoy_similar',
							'$replay,
							'$incentive')");
?>