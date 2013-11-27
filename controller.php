<?	
	echo session_start();

	if(isset($_SESSION['views']))
	    $_SESSION['visits'] = $_SESSION['visits']+ 1;
	else
	    $_SESSION['visits'] = 1;

	echo "visits = ". $_SESSION['visits']; 
	$SESSION_VISITS = $_SESSION['visits'];

	include "config.php";
	$SESSION_ID = $_SESSION['id'];
	echo "hello";
	echo "id = ". $SESSION_ID;
	echo session_id();

	$mysqli = new mysqli("$dbHost", "$dbUsername", "$dbPass", "$dbName");

	$game_sequence = array('text-adventure','word-bounce','word-scramble');
	$incentive_sequence = array('badges','levels','leader');

	shuffle($game_sequence);
	shuffle($incentive_sequence);

	echo $game_sequence[0];
	echo $game_sequence[1];
	echo $game_sequence[2];
	echo $incentive_sequence[0];
	echo $incentive_sequence[1];
	echo $incentive_sequence[2];

	$mysqli->query("INSERT INTO user (id, visits, game0, game1, game2, incentive0, incentive1, incentive2) VALUES ('$SESSION_ID', '$SESSION_VISITS', '$game_sequence[0]', '$game_sequence[1]', '$game_sequence[2]', '$incentive_sequence[0]', '$incentive_sequence[1]', '$incentive_sequence[2]')");
?>