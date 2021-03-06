// incentive mode switch - options are "badges", "leaders", "levels", and "none"
//incentive_mode = "badges";

var words=["sneeze","bug","ant","violent","virulent","generate","hill","journey","box","outside","replicate","perilous","brain","leg","man","sky","immune","create","consume","glance","eat","optic","human","threat","climb","pinhole","grass","guts","hunger","rat","infect","twitch"];
var nouns=["sneeze","bug","ant","hill","journey","box","brain","human","threat","climb","pinhole","grass","guts","rat","leg","man","sky","outside","hunger","twitch","optic","glance"];
var noun_badges = ["bug","ant","box","brain","grass","guts","four","five","seven"];
// badge logic

var progress=0;
var fourbadge = false;
var fivebadge = false;
var sevenbadge  = false;

var adventure_badges = {
    1: {
        name: "Escapee",
        description: "You've escaped the box.",
        image: "<img src='img/noun_project_9152.svg' width=40 height=40>",
    },
    2: {
        name: "Satiated",
        description: "You've feasted.",
        image: "<img src='img/noun_project_4002.svg' width=40 height=40>",
    },
    3: {
        name: "Invader",
        description: "You have become an agent inside of the man's body.",
        image: "<img src='img/noun_project_630.svg' width=40 height=40>",
    },
    4: {
        name: "Disintegrated",
        description: "Your body has been dissolved into its constituent chemicals.",
        image: "<img src='img/noun_project_3863.svg' width=40 height=40>",
    },
    5: {
        name: "Replicant",
        description: "You have made more of yourself.",
        image: "<img src='img/svg_13582-01.svg' width=40 height=40>",
    },    
    6: {
        name: "Infection", 
        description: "You and your offspring have taken over the man's body, and are now proceeding to infect other hosts at pandemic levels.",
        image: "<img src='img/noun_project_613.svg' width=40 height=40>",
    },
    7: {
        name: "Mad Cow",
        description: "You are the first of a line of prions that terrorize the human race for generations to come.",
        image: "<img src='img/noun_project_685.svg' width=40 height=40>",
    },
    8: {
        name: "Parasitic",
        description: "You can now leech the resources of your host at will.",
        image: "<img src='img/noun_project_18917.svg' width=40 height=40>",
    },
    9: {
        name: "Plague",
        description: "You are so successfuly at reproducing and infecting hosts that your race is compared to the Spanish Flu and Bubonic Plague.",
        image: "<img src='img/noun_project_184.svg' width=40 height=40>",
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
    9: "99%",
};

var level_name = {
    1: "Escapee",
    2: "Forager",
    3: "Explorer",
    4: "Parasite",
    5: "Invader",
    6: "Replicant",
    7: "Infection",
    8: "Plague",
    9: "Domination",
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
    lname = level_name[level_id];
    $(".level-modal").html("<p> You've achieved the <br/><strong class ='dark large-text'>" + lname + "</strong><br/> level! </p>").hide().fadeIn(300).delay(800).fadeOut(1000);
    $(".incentives #levels").html("<h1> You've achieved the <strong class ='dark'>" + lname + " </strong> level! </h1>");
};

var assign_leader_word = function(num_found) {
    if((progress <9) && (Math.random()<.4)) {
        progress++;
        assign_leader(progress);
    } 
};

var assign_level_word = function(level_id) {
    if((progress <9) && (Math.random()<.4)) {
        progress++;
        assign_level(progress);
    } 
};

var assign_badge_word = function(word) {
    w = word;
    if(noun_badges.indexOf(word)>=0) {
        img = '<img src=\'img/'
        img=img.concat(w.concat('.svg\'width=40 height=40>'));
        description = w.concat(' found');
        $(".badge-modal").html("<h5> You've earned a badge! </h5> <h2>" + w + "</h2> <br/>" + img + "<br/> <p>" + description + "</p>").hide().fadeIn(300).delay(800).fadeOut(1000);
        $(".incentives #badges ul").append("<li>" + img + "<h3 class = 'badge-name'>" + w + "</h3> </li>");
    } else {
        if(!fourbadge && (word.length==4)) {
            fourbadge=true;
            img = '<img src=\'img/four.svg\' width=40 height=40>';
            description = 'Four letters!';
            $(".badge-modal").html("<h5> You've earned a badge! </h5> <h2>" + w + "</h2> <br/>" + img + "<br/> <p>" + description + "</p>").hide().fadeIn(300).delay(800).fadeOut(1000);
            $(".incentives #badges ul").append("<li>" + img + "<h3 class = 'badge-name'>" + w + "</h3> </li>");
        } else if(!fivebadge && (word.length==5)) {
            fivebadge=true;
            img = '<img src=\'img/five.svg\' width=40 height=40>';
            description = 'Five letters!';
            $(".badge-modal").html("<h5> You've earned a badge! </h5> <h2>" + w + "</h2> <br/>" + img + "<br/> <p>" + description + "</p>").hide().fadeIn(300).delay(800).fadeOut(1000);
            $(".incentives #badges ul").append("<li>" + img + "<h3 class = 'badge-name'>" + w + "</h3> </li>");
        } else if(!sevenbadge && (word.length==7)) {
            sevenbadge = true;
            img = '<img src=\'img/seven.svg\' width=40 height=40>';
            description = 'Seven letters!';
            $(".badge-modal").html("<h5> You've earned a badge! </h5> <h2>" + w + "</h2> <br/>" + img + "<br/> <p>" + description + "</p>").hide().fadeIn(300).delay(800).fadeOut(1000);
            $(".incentives #badges ul").append("<li>" + img + "<h3 class = 'badge-name'>" + w + "</h3> </li>");
        }
    }
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