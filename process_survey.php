<?php
	session_start();
	include "config.php";

	$mysqli = new mysqli("$dbHost", "$dbUsername", "$dbPass", "$dbName");

	$SESSION_ID = $_SESSION['id'];
	$SESSION_VIEWS = $_SESSION['views'];
	$game = $_SESSION['game_sequence'][$_SESSION['pair']];
	$incentive = $_SESSION['incentive_sequence'][$_SESSION['pair']];
	$enjoy = $_GET['enjoy'];
	$challenge = $_GET['challenge'];
	$similar = $_GET['similar'];
	$enjoy_similar = $_GET['enjoy_similar'];
	$replay = $_GET['replay'];
	$incentive = $_GET['incentive'];

	echo 'enjoy = '. $enjoy;


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
							'$game',
							'$incentive',
							'$enjoy',
							'$challenge',
							'$similar',
							'$enjoy_similar',
							'$replay,
							'$incentive')");
?>