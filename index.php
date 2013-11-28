<?php
    session_start();
?>

<html>
    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>The Punisher: A Set of Games!</title>
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

        
        <p class = "very-large-text dark centered">Hi there!</p> 

        <span class = "large-text">

        <p>This <strong> very short </strong> set of word games is intended to test <strong class ="bright"> how language is latently processed </strong> during a variety of tasks where the linguistic content is either <em> emphasized </em> or <em> not emphasized </em>.</p>

        </span>

        <p class = "large-text dark">You may proceed to the next game as soon as the next button appears, though you may keep playing for as long as you wish!</p>

        <div class = "consent-form tiny-text"> 
        <p>
        The purpose of this research project is to investigate what makes language-based tasks fun, as well as how incentives impact various task types. This is a research project being conducted by Fiona Wood and Anna Kiyantseva at Harvard College. All are invited to participate in this project. Your participation in this research study is voluntary. You may choose not to participate. If you decide to participate in this research survey, you may withdraw at any time. If you decide not to participate in this study or if you withdrawl from participating at any time, you will not be penalized.
        </p>
        <p>
        The procedure involves playing three word-based tasks and reporting your preferences and thoughts in a short survey after each. Your responses will be confidential and we do not collect identifying information such as your name, email address or IP address. We will keep your information confidential. All data is stored in a password protected electronic format. To help protect your confidentiality, the surveys will not contain information that will personally identify you. The results of this study will be used for scholarly purposes only.
        </p>
        <p>
        If you have any questions about the research study, you will be able to access the researchers' contact information in the last screen. This research has been reviewed according to Harvard University IRB procedures for research involving human subjects.
        <br/>
        <strong>ELECTRONIC CONSENT: </strong> <em> Please select your choice below. </em>
        </p>
        </div>

        <div class = "consent-box">
            <div class ="tag"> I agree and wish to participate. </div>
            <input type ="checkbox" value = "consent" id="consent-box" class="regular-checkbox big-checkbox"> <label for="consent-box"></label>
        </div>

        <p id = "start-button" class = "very-large-text centered"> <a href="#" id="firstGame"> Let the games begin! &#9654; </a> </p>
        </section>




    </div> <!-- end container div -->  

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
    <script src="js/plugins.js"></script>
    <script src="js/incentives.js"></script>
    <script src="js/system.js"></script>
    <?php include 'controller.php'; ?>
    <script src="js/setup.js"></script>



    </body>
</html>