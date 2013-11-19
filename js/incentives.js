// incentive mode switch - options are "badges", "leaders", "levels", and "none"
var incentive_mode = "badges";

// badge logic

var adventure_badges = {
    1: {
        name: "Escapee",
        description: "You've escaped the box.",
        image: "<img src='http://placehold.it/70x70'>",
    },
    2: {
        name: "Satiated",
        description: "You've feasted.",
        image: "<img src='http://placehold.it/70x70'>",
    },
    3: {
        name: "Invader",
        description: "You have become a parasite inside of the man's body.",
        image: "<img src='http://placehold.it/70x70'>",
    },
    4: {
        name: "Disintegrated",
        description: "Your body has been dissolved into its constituent chemicals.",
        image: "<img src='http://placehold.it/70x70'>",
    },
    5: {
        name: "Replicant",
        description: "You have made more of yourself.",
        image: "<img src='http://placehold.it/70x70'>",
    },    
    6: {
        name: "Infection",
        description: "You and your offspring have taken over the man's body, and are now proceeding to infect other hosts at pandemic levels.",
        image: "<img src='http://placehold.it/70x70'>",
    },

};

var assign_badge = function(badge_id) {
    badge = adventure_badges[badge_id];
    $(".badge-modal").html("<h5> You've earned a badge! </h5> <h2>" + badge.name + "</h2> <br/>" + badge.image + "<br/> <p>" + badge.description + "</p>").hide().fadeIn(100).delay(1000).fadeOut(1000);
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

var level_details = {
    1: {
        name: "Wordsmith",
        image: "<img src='http://placehold.it/70x70'>",
    },
};

if(incentive_mode == "levels") {
    var level=0;

    var next_level = function() {
        level++;
        l = level_details[level];
        $(".incentives #levels").html("<h1> You've advanced to <strong class ='dark'> Level " + l.name + " </strong>! </h1>");
    }
};