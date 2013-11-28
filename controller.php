<?php
	session_start();

	if(isset($_SESSION['visits']))
	    $_SESSION['visits'] = $_SESSION['visits']+ 1;
	else
	    $_SESSION['visits'] = 1;
	$SESSION_VISITS = $_SESSION['visits'];
	$_SESSION['id'] = session_id();
	$SESSION_ID = $_SESSION['id'];

	include "config.php";

	$mysqli = new mysqli("$dbHost", "$dbUsername", "$dbPass", "$dbName");

	$game_sequence = array('text-adventure','word-bounce','word-scramble');
	shuffle($game_sequence);

	$incentive_sequence = array('badges','levels','leader');
	if(rand()/getrandmax() < .2) $incentive_sequence = array('none','none','none');
	else shuffle($incentive_sequence);

	$_SESSION['game_sequence'] = $game_sequence;
	$_SESSION['incentive_sequence'] = $incentive_sequence;

	$_SESSION['pair'] = 0;


	$mysqli->query("INSERT INTO user (id, visits, game0, game1, game2, incentive0, incentive1, incentive2) VALUES ('$SESSION_ID', '$SESSION_VISITS', '$game_sequence[0]', '$game_sequence[1]', '$game_sequence[2]', '$incentive_sequence[0]', '$incentive_sequence[1]', '$incentive_sequence[2]')");

	// $mysqli->close();
?>

<script>
	var game_mode = "<?php echo $_SESSION['game_sequence'][$_SESSION['pair']]; ?>";
	var incentive_mode = "<?php echo $_SESSION['incentive_sequence'][$_SESSION['pair']]; ?>";
</script>