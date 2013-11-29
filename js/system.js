var start;
var elapsed;
elapsed  = 2;
$.ajax({
  type: "POST",
  url: "process_survey.php",
  data: {time_elapsed:elapsed} ,
  success: function(data) {
    console.log("success");
  }
});
// $(".next").hide().delay(18000).fadeIn(8000, function() { SHORTER DELAY FOR DEBUGGING
$(".next").hide().delay(180).fadeIn(8000, function() {
    start = new Date();
    console.log(start);
});

$('.next').click(function(){
    console.log("clicked");
    elapsed = new Date() - start;
    $.ajax({
      type: "POST",
      url: "process_survey.php",
      data: {time_elapsed:elapsed} ,
      success: function(data) {
        console.log("success");
      }
    });
});

$('.consent-box input').click(function(){
    if ($("#consent-box").is (':checked'))
    {
        $("#start-button").fadeIn(300);
    }
    else {
		$("#start-button").fadeOut(300);
    }
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