// incentive mode switch - options are "badges", "leaders", "levels", and "none"
//incentive_mode = "badges";

var words=["sneeze","bug","ant","hill","box","brain","human","climb","pinhole","grass","guts","hunger","rat","leg","man","look","sky","outside","consume","glance","eat"];
var nouns=["sneeze","bug","ant","hill","box","brain","human","climb","pinhole","grass","guts","rat","leg","man","sky","outside","hunger"];
var noun_badges = ["bug","ant","box","brain","grass","guts","four","five","seven"];
// badge logic

var largest_word=0;

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
    9: "84%",
};

var level_name = {
    1: "Escapee",
    2: "Explorer",
    3: "Invader",
    4: "World Domination",
    5: "Global Superpower",
    6: "Dictator of the Solar System",
    7: "Galactic Despot",
    8: "King of the Universe",
    9: "Emperor of Everything",
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
    if(num_found%2 == 0) assign_leader(num_found/2);
};

var assign_level_word = function(level_id) {
    if(num_found%2 == 0) assign_leader(num_found/2);
};

var assign_badge_word = function(word) {
    w = word;
    if(noun_badges.indexOf(word)>=0) {
        img = '<img src=\'img/'
        img=img.concat(w.concat('.svg\'width=40 height=40>'));
        description = w.concat(' found');
        $(".badge-modal").html("<h5> You've earned a badge! </h5> <h2>" + w + "</h2> <br/>" + img + "<br/> <p>" + description + "</p>").hide().fadeIn(300).delay(800).fadeOut(1000);
        $(".incentives #badges ul").append("<li>" + img + "<h3 class = 'badge-name'>" + w + "</h3> </li>");
    } else if(word.length() > largest_word) {
        largest_word = word.length();
        if(word.length()==4) {
            img = '<img src=\'img/four.svg\' width=40 height=40>'));
            description = 'Four letters!';
            $(".badge-modal").html("<h5> You've earned a badge! </h5> <h2>" + w + "</h2> <br/>" + img + "<br/> <p>" + description + "</p>").hide().fadeIn(300).delay(800).fadeOut(1000);
            $(".incentives #badges ul").append("<li>" + img + "<h3 class = 'badge-name'>" + w + "</h3> </li>");
        } else if(word.length()==5) {
            img = '<img src=\'img/five.svg\' width=40 height=40>'));
            description = 'Five letters!';
            $(".badge-modal").html("<h5> You've earned a badge! </h5> <h2>" + w + "</h2> <br/>" + img + "<br/> <p>" + description + "</p>").hide().fadeIn(300).delay(800).fadeOut(1000);
            $(".incentives #badges ul").append("<li>" + img + "<h3 class = 'badge-name'>" + w + "</h3> </li>");
        } else if((word.length()==7) {
            img = '<img src=\'img/seven.svg\' width=40 height=40>'));
            description = 'Seven letters!';
            $(".badge-modal").html("<h5> You've earned a badge! </h5> <h2>" + w + "</h2> <br/>" + img + "<br/> <p>" + description + "</p>").hide().fadeIn(300).delay(800).fadeOut(1000);
            $(".incentives #badges ul").append("<li>" + img + "<h3 class = 'badge-name'>" + w + "</h3> </li>");)
        }
    }
};