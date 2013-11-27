<?
	session_start();
	include "config.php";
	$SESSION_ID = $_SESSION['id'];
	echo $SESSION_ID;

	$mysqli = new mysqli("$dbHost", "$dbUsername", "$dbPass", "$dbName");

	$game_sequence = array('text-adventure','word-bounce','word-scramble');
	shuffle($game_sequence);
	echo $game_sequence[0];
	$mysqli->query("INSERT INTO user (id, first_game, second_game, third_game) VALUES ('$SESSION_ID', '$game_sequence[0]', '$game_sequence[1]', '$game_sequence[2]')");

	$incentive_sequence = array('badges','levels','leader');
	shuffle($incentive_sequence);
	$mysqli->query("INSERT INTO user (id, first_incentive, second_incentive, third_incentive) VALUES ('$SESSION_ID', '$incentive_sequence[0]', '$incentive_sequence[1]', '$incentive_sequence[2]')");
?>