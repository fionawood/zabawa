var start;
var elapsed;

$(".next").hide().delay(18000).fadeIn(8000, function() {
    start = new Date();
});

$('.next').click(function(){
    elapsed = new Date() - start;
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