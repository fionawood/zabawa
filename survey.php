<?php
    session_start();
?>

<html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Survey</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="css/stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />

        <!--[if IE]>
              <link href="/stylesheets/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
        <![endif]-->

        <script src="js/vendor/modernizr-2.6.2.min.js"></script>

    </head>

    <body>
    <div class = "container">

        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->

        <section class = "exposition">

        
        <p class = "large-text dark centered">Please answer the following about the previous game:</p> 


        <section class = "survey-questions centered">

            <form id = "main_questions" action="process_survey.php" method="post"> 
            <p>How much did you <strong>enjoy playing</strong> the game? <br/>
            <input type="radio" id="enjoy-1" value="1" name="enjoy"/><label for="enjoy-1">not at all</label>
            <input type="radio" id="enjoy-2" value="2" name="enjoy"/><label for="enjoy-2">not much</label>
            <input type="radio" id="enjoy-3" value="3" name="enjoy"/><label for="enjoy-3">somewhat</label>
            <input type="radio" id="enjoy-4" value="4" name="enjoy"/><label for="enjoy-4">quite a bit</label>
            <input type="radio" id="enjoy-5" value="5" name="enjoy"/><label for="enjoy-5">really enjoyed it</label></p>
            <!-- </form> -->

            <!-- <form id = "challenge" action="process_survey.php" method="get">  -->
            <p>How <strong>challenging</strong> did you find the game? <br/>
            <input type="radio" id="challenge-1" value="1" name="challenge"/><label for="challenge-1">not at all</label>
            <input type="radio" id="challenge-2" value="2" name="challenge" /><label for="challenge-2">not much</label>
            <input type="radio" id="challenge-3" value="3" name="challenge"/><label for="challenge-3">somewhat</label>
            <input type="radio" id="challenge-4" value="4" name="challenge"/><label for="challenge-4">quite a bit</label>
            <input type="radio" id="challenge-5" value="5" name="challenge"/><label for="challenge-5">really challenging</label></p>
            <!-- </form> -->

            <!-- <form id = "similar" action="process_survey.php" method="get">  -->
            <p>How often do you play <strong>similar</strong> games? <br/>
            <input type="radio" id="similar-1" value="1" name="similar"/><label for="similar-1">not at all</label>
            <input type="radio" id="similar-2" value="2" name="similar"/><label for="similar-2">not much</label>
            <input type="radio" id="similar-3" value="3" name="similar"/><label for="similar-3">somewhat</label>
            <input type="radio" id="similar-4" value="4" name="similar"/><label for="similar-4">quite a bit</label>
            <input type="radio" id="similar-5" value="5" name="similar"/><label for="similar-5">very often</label></p>
            <!-- </form> -->

            <!-- <form id = "enjoy-similar" action="process_survey.php" method="get">  -->
            <p>How much do you generally <strong>enjoy games of this type</strong>? <br/>
            <input type="radio" id="enjoy-similar-1" value="1" name="enjoy-similar"/><label for="enjoy-similar-1">not at all</label>
            <input type="radio" id="enjoy-similar-2" value="2" name="enjoy-similar"/><label for="enjoy-similar-2">not much</label>
            <input type="radio" id="enjoy-similar-3" value="3" name="enjoy-similar"/><label for="enjoy-similar-3">somewhat</label>
            <input type="radio" id="enjoy-similar-4" value="4" name="enjoy-similar"/><label for="enjoy-similar-4">quite a bit</label>
            <input type="radio" id="enjoy-similar-5" value="5" name="enjoy-similar"/><label for="enjoy-similar-5">very much</label></p>
            <!-- </form> -->

            <!-- <form id = "replay" action="process_survey.php" method="get">  -->
            <p>How likely would you be to </strong>replay this game</strong> in the future? <br/>
            <input type="radio" id="replay-1" value="1" name="replay"/><label for="replay-1">not at all</label>
            <input type="radio" id="replay-2" value="2" name="replay"/><label for="replay-2">not likely</label>
            <input type="radio" id="replay-3" value="3" name="replay"/><label for="replay-3">somewhat</label>
            <input type="radio" id="replay-4" value="4" name="replay"/><label for="replay-4">quite likely</label>
            <input type="radio" id="replay-5" value="5" name="replay"/><label for="replay-5">very likely</label></p>
            <!-- </form> -->

            <div id = "incentive-container">
                <p><span id ="incentive-questions"></span> <br/>
                <input type="radio" id="incentive-1" value="1" name="incentive"/><label for="incentive-1">not at all</label>
                <input type="radio" id="incentive-2" value="2" name="incentive"/><label for="incentive-2">not much</label>
                <input type="radio" id="incentive-3" value="3" name="incentive"/><label for="incentive-3">somewhat</label>
                <input type="radio" id="incentive-4" value="4" name="incentive"/><label for="incentive-4">quite a bit</label>
                <input type="radio" id="incentive-5" value="5" name="incentive"/><label for="incentive-5">liked it a lot</label></p>
            </div>
            <input type="submit" value="Proceed to the next game!">
            </form>


        </section>
       
        <!-- <p id = "start-button" class = "very-large-text centered"> <a href="#" onclick="main_questions.submit(); "> Proceed to the next game! &#9654; </a> </p>
         --></section>




    </div> <!-- end container div -->  

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
    <script src="js/plugins.js"></script>
    <!--<script src="js/main.js"></script>-->
    <?php include 'load_modes.php'; ?>
    <script src="js/system.js"></script>
    <script src="js/incentives.js"></script>
    <script src="js/next-game.js"></script>
    </body>
</html>