// incentive mode switch - options are "badges", "leaders", "levels", and "none"
incentive_mode = "badges";

// badge logic

var adventure_badges = {
    1: {
        name: "Escapee",
        description: "You've escaped the box.",
        image: "<img src='img/noun_project_9152.svg' width=70 height=70>",
    },
    2: {
        name: "Satiated",
        description: "You've feasted.",
        image: "<img src='img/noun_project_4002.svg' width=70 height=70>",
    },
    3: {
        name: "Invader",
        description: "You have become an agent inside of the man's body.",
        image: "<img src='img/noun_project_630.svg' width=70 height=70>",
    },
    4: {
        name: "Disintegrated",
        description: "Your body has been dissolved into its constituent chemicals.",
        image: "<img src='img/noun_project_3863.svg' width=70 height=70>",
    },
    5: {
        name: "Replicant",
        description: "You have made more of yourself.",
        image: "<img src='img/svg_13582-01.svg' width=70 height=70>",
    },    
    6: {
        name: "Infection", 
        description: "You and your offspring have taken over the man's body, and are now proceeding to infect other hosts at pandemic levels.",
        image: "<img src='img/noun_project_613.svg' width=70 height=70>",
    },
    7: {
        name: "Mad Cow",
        description: "You are the first of a line of prions that terrorize the human race for generations to come.",
        image: "<img src='img/noun_project_685.svg' width=70 height=70>",
    },
    8: {
        name: "Parasitic",
        description: "You can now leech the resources of your host at will.",
        image: "<img src='img/noun_project_18917.svg' width=70 height=70>",
    },
    9: {
        name: "Plague",
        description: "You are so successfuly at reproducing and infecting hosts that your race is compared to the Spanish Flu and Bubonic Plague.",
        image: "<img src='img/noun_project_184.svg' width=70 height=70>",
    },
};

var leader_percent = {
    1: "3%",
    2: "5%",
    3: "15%",
    4: "23%",
    5: "45%",
    6: "87%",
    7: "94%",
    8: "96%",
    9: "84%",
};

var assign_badge = function(badge_id) {
    badge = adventure_badges[badge_id];
    $(".badge-modal").html("<h5> You've earned a badge! </h5> <h2>" + badge.name + "</h2> <br/>" + badge.image + "<br/> <p>" + badge.description + "</p>").hide().fadeIn(300).delay(800).fadeOut(1000);
    $(".incentives #badges ul").append("<li>" + badge.image + "<h3 class = 'badge-name'>" + badge.name + "</h3> </li>");
};

var assign_leader = function(leader_id) {
    percentage = leader_percent[leader_id];
    $(".leader-modal").html("<p> You're currently farther in the game than<br/><strong class ='dark large-text'>" + percentage + "</strong><br/>of other players! </p>").hide().fadeIn(300).delay(800).fadeOut(1000);
    $(".incentives #leaders").html("<h1> You're currently farther in the game than <strong class ='dark'>" + percentage + " </strong> of other players! </h1>");
};

var assign_level = function(level_id) {
    //level stuff here
};


// social comparison logic

// var random_interval = function (range, floor) {
//     random_number = Math.floor((Math.random()*range)+floor);
//     return random_number;
// };


// if (incentive_mode == "leaders") {

//     var progress = 98;
//     var prev_percent = 1;

//     $(".incentives #leaders").html("<h1> You're currently better than <strong class ='dark'>0%</strong> of other players! </h1>");

//     setInterval(function() {

//         var percentage = random_interval(100-progress, prev_percent);
//         $(".incentives #leaders").html("<h1> You're currently better than <strong class ='dark'>" + percentage + "% </strong> of other players! </h1>");
//         prog_check = (progress <= 5) ? progress = 5 : progress = progress -3;
//         prev_percent = percentage;
//         }, 20000);
//     };

   
// };

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