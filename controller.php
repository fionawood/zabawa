<?	
	session_start();

	if(isset($_SESSION['views']))
	    $_SESSION['visits'] = $_SESSION['visits']+ 1;
	else
	    $_SESSION['visits'] = 1;

	echo "visits = ". $_SESSION['visits']; 

	include "config.php";
	$SESSION_ID = $_SESSION['id'];
	echo "hello";
	echo "id = ". $SESSION_ID;

	$mysqli = new mysqli("$dbHost", "$dbUsername", "$dbPass", "$dbName");

	$game_sequence = array('text-adventure','word-bounce','word-scramble');
	shuffle($game_sequence);
	echo $game_sequence[0];
	echo $game_sequence[1];
	echo $game_sequence[2];

	$mysqli->query("INSERT INTO user (id, first_game, second_game, third_game) VALUES ('$SESSION_ID', '$game_sequence[0]', '$game_sequence[1]', '$game_sequence[2]')");

	$incentive_sequence = array('badges','levels','leader');
	shuffle($incentive_sequence);
	echo $incentive_sequence[0];
	echo $incentive_sequence[1];
	echo $incentive_sequence[2];
	$mysqli->query("INSERT INTO user (id, first_incentive, second_incentive, third_incentive) VALUES ('$SESSION_ID', '$incentive_sequence[0]', '$incentive_sequence[1]', '$incentive_sequence[2]')");
?>