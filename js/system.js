var start;
var elapsed;

// $(".next").hide().delay(18000).fadeIn(8000, function() { SHORTER DELAY FOR DEBUGGING
$('.next').hide().delay(180).fadeIn(8000, function() {
    start = new Date();
});

$('#nextbtn').click(function(){
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
        //document.getElementById("testing").innerHTML=xmlhttp.responseText;
        window.location.href = "survey.php";
      }
    }
    elapsed = new Date() - start;
    xmlhttp.open("GET","process_time.php?elapsed="+elapsed,true);
    xmlhttp.send();
    return false;
});

$(function() {
if (incentive_mode !== "none") {
	$("#incentive-container").show();
  var incentive_str = incentive_mode;
  if(incentive_str=="leader") {
    incentive_str="social comparison";
  }
    $("#incentive-questions").html("How much did you like the presence of <strong>" + incentive_str + "</strong> in the game?");
  }
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