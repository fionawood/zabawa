// incentive mode switch - options are "badges", "leaders", "levels", and "none"
var incentive_mode = "badges";

// badge logic

var adventure_badges = {
    1: {
        name: "Escapee",
        description: "You've escaped the box.",
        image: "<img src='http://placehold.it/70x70'>",
    },

};

var assign_badge = function(badge_id) {
    badge = adventure_badges[badge_id];
    $(".badge-modal").html("<h5> You've earned a badge! </h5> <h2>" + badge.name + "</h2> <br/>" + badge.image + "<br/> <p>" + badge.description + "</p>").hide().fadeIn(500).delay(400).fadeOut(1000);
    $(".incentives #badges ul").append("<li>" + badge.image + "<h3 class = 'badge-name'>" + badge.name + "</h3> </li>");
};

// social comparison logic

var random_interval = function (range, floor) {
    random_number = Math.floor((Math.random()*range)+floor);
    return random_number;
};


if (incentive_mode == "leaders") {

var progress = 98;
var prev_percent = 1;

$(".incentives #leaders").html("<h1> You're currently better than <strong class ='dark'>0%</strong> of other players! </h1>");

setInterval(function() {

    var percentage = random_interval(100-progress, prev_percent);
    $(".incentives #leaders").html("<h1> You're currently better than <strong class ='dark'>" + percentage + "% </strong> of other players! </h1>");
    prog_check = (progress <= 5) ? progress = 5 : progress = progress -3;
    prev_percent = percentage;
    }, 20000);
};
