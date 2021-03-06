<?php 
    session_start()
?>

<html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Word Bounce</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="css/stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />

        <!--[if IE]>
              <link href="/stylesheets/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
        <![endif]-->

        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
        <?php include 'load_modes.php'; ?>

    </head>

    <body>    
    <p class = "large-text centered"> Find the nouns.</div>

    <div class = "container">    


        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->

        <section class = "console">   

        <div id = "console-container">

            
            <canvas id="myCanvas" width="600" height="400" style="position: relative; top: -15px; left: -15px;"></canvas>
            <div id = "input-form" style="position: relative; top: -60px;">
                <form>
                <input type="text" autofocus="autofocus"> <input type="submit" value="Found it!"/>
                </form> 
            </div>

        </div>



        </section>

        <section class = "incentives">

        <div id ="badges">

            <ul>

            </ul>
        </div>

        <div id = "leaders">

        </div>

        <div id = "levels">

        </div>

        </section>

        <section class = "badge-modal modal">
        </section>

        <section class = "leader-modal modal">
        </section>

        <section class = "level-modal modal">
        </section>

        <section class = "next">

        <p class = "large-text centered"> <a href="#" id="nextbtn"> Next &#9654; </a> </p>

        </section>
    </div> <!-- end container div -->  


    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
    <script src="js/plugins.js"></script>
    <script src="js/system.js"></script>
    <script src="js/incentives.js"></script>
    <script src="js/word-bounce.js"></script>

    </body>
</html>