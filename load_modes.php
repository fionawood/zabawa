<?php
	session_start();
	if($_SESSION['pair']<3) {
		$game_mode = $_SESSION['game_sequence'][$_SESSION['pair']];
		$incentive_mode = $_SESSION['incentive_sequence'][$_SESSION['pair']];
	} else {
		$game_mode = 'debrief';
		$incentive_mode = 'none';
	}
	$_SESSION['pair'] = $_SESSION['pair'] + 1;

?>

<script>
	var game_mode = "<?php echo $game_mode; ?>";
	var incentive_mode = "<?php echo $incentive_mode; ?>";
	var testing123 = 2;
</script>