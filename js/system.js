var start;
var elapsed;
elapsed  = 2;



function submit_time() {
}

// $(".next").hide().delay(18000).fadeIn(8000, function() { SHORTER DELAY FOR DEBUGGING
$('.next').hide().delay(180).fadeIn(8000, function() {
    start = new Date();
});

$('#testing').click(function(){
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
        document.getElementById("testing").innerHTML=xmlhttp.responseText;
      }
    }
    elapsed = new Date() - start;
    xmlhttp.open("GET","survey.php?elapsed="+elapsed,true);
    xmlhttp.send();
});

$(function() {
if (incentive_mode !== "none") {
	$("#incentive-container").show();
    $("#incentive-questions").html("How much did you like the presence of <strong>" + incentive_mode + "</strong> in the game?");
}


$('input[type=radio]').change(function(){
    var names = {};
    $('input:radio').each(function() { // find unique names
          names[$(this).attr('name')] = true;
    });
    var count = 0;
    $.each(names, function() { // then count them
          count++;
    });
    if($('input:radio:checked').length == count) {
          $("#start-button").delay(100).fadeIn(400);
    }
});


});