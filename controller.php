<?php
	session_start();

	if(isset($_SESSION['views']))
	    $_SESSION['visits'] = $_SESSION['visits']+ 1;
	else
	    $_SESSION['visits'] = 1;
	$SESSION_VISITS = $_SESSION['visits'];
	$_SESSION['id'] = session_id();
	$SESSION_ID = $_SESSION['id'];

	include "config.php";

	$mysqli = new mysqli("$dbHost", "$dbUsername", "$dbPass", "$dbName");

	$game_sequence = array('text-adventure','word-bounce','word-scramble');
	$incentive_sequence = array('badges','levels','leader');

	$_SESSION['game_sequence'] = $game_sequence;
	$_SESSION['incentive_sequence'] = $incentive_sequence;

	shuffle($game_sequence);
	shuffle($incentive_sequence);

	$mysqli->query("INSERT INTO user (id, visits, game0, game1, game2, incentive0, incentive1, incentive2) VALUES ('$SESSION_ID', '$SESSION_VISITS', '$game_sequence[0]', '$game_sequence[1]', '$game_sequence[2]', '$incentive_sequence[0]', '$incentive_sequence[1]', '$incentive_sequence[2]')");
?>

<script>
	function makeURL(page) {
	  var x = "http://zabawa.cs179.org/";
	  //var x = "file://localhost/Users/fionawwood/Documents/zabawa/";
	  x=x.concat(page);
	  x=x.concat(".html");
	  return x;
	}

	var firstGame = document.getElementById("firstGame");
	var game0 = "<?php echo $_SESSION['game_sequence'][0]; ?>";
	console.log(game0);
	firstGame.href = makeURL(game0);
</script>