<?
	$game_mode = $_SESSION['game_sequence'][$_SESSION['pair']];
	$incentive_mode = $_SESSION['game_sequence'][$_SESSION['pair']];

?>

<script>
	var game_mode = "<?php echo $game_mode; ?>";
	var incentive_mode = "<?php echo $incentive_mode; ?>";
</script>