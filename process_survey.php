<?php
	session_start();

	$mysqli = new mysqli("$dbHost", "$dbUsername", "$dbPass", "$dbName");


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
					VALUES ('$_SESSION['id']', 
							'$_SESSION['views']', 
							'$_SESSION['game_sequence'][$_SESSION['pair']]'',
							'$_SESSION['incentive_sequence'][$_SESSION['pair']]'',
							'$_GET['enjoy']',
							'$_GET['challenge']',
							'$_GET['similar']',
							'$_GET['enjoy_similar']',
							'$_GET['replay']',
							'$_GET['incentive']')");
?>