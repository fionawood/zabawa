// incentive mode switch - options are "badges", "leaders", "levels", and "none"
var incentive_mode = "badges";


// text-adventure game logic
var stages = {
    box: {
        action: "You are in a cramped box. <br/> You barely fit inside.",
        commands: ["crawl", "escape", "pinhole"],
        defaults: "You struggle, but it seems that you can only crawl." },
     crawl: {
        action: "You crawl around, sides brushing against the box. It seems that there's a tiny pinhole that you can escape through.",
        commands: ["escape", "pinhole"],
        defaults: "The pinhole seems like the only hope of escaping this box." },
    escape: {
        action: "You crawl to the pinhole and just barely fit your body through.",
        commands: ["escape", "pinhole"],
        defaults: "The pinhole seems like the only hope of escaping this box." ,
        badge: 1},
    pinhole: {
        action: "You crawl to the pinhole and just barely fit your body through.",
        commands: ["escape", "pinhole"],
        defaults: "The pinhole seems like the only hope of escaping this box." },
    world: {
        action: "You crawl to the pinhole and just barely fit your body through.",
        commands: ["escape", "pinhole"],
        defaults: "The pinhole seems like the only hope of escaping this box." },

}; // end stages var

var current_stage = stages.box;

// sends user input to appropriate function

$("#input-form").submit(function( event ) {
    event.preventDefault();
    user_input = $("#input-form input").val();
    process_input(user_input);
});


 // command = current_stage.commands.indexOf(cmd_text);
 //    if (command !== -1) {
 //        object_string = "stages." + current_stage.commands[command];
 //        current_stage = eval(object_string);
 //        print_text(current_stage.action);
 //        if (current_stage.badge !== undefined && incentive_mode == "badges") {
 //            assign_badge(current_stage.badge);
 //        }
 //    }
 //    else {
 //        print_text(current_stage.defaults);  
 //    }

var process_input = function(cmd_text) {
    var command_found = false;

    for (var i=0;i<current_stage.commands.length;i++)
    {
        var regex = new RegExp((current_stage.commands[i]), "gi");
        if (cmd_text.match(regex) !== null) {
            object_string = "stages." + current_stage.commands[i];
            current_stage = eval(object_string);
            command_found = true;
            print_text(current_stage.action);
        }
    }

    if (command_found === false) {
        print_text(current_stage.defaults);
    }

    command_found = false;

};

// prints adventure text to screen

var print_text = function(text) {
    $("#output" ).append( "<p class='action'> " + $("#input-form input").val() +"</p>" );
    $("#output" ).append( "<p> " + text +"</p>" );
    $('#output').scrollTop($('#output')[0].scrollHeight);
    $("#input-form input[type=text]").val("");
};


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

// setTimeout(function() {
//     $(".leader-modal").append("<h2> <strong>" + random_interval(200) + "</strong> other people have gotten to this stage in the game! </h2> <p> We've calculated that this puts you in the " + random_interval(99) + "th percentile in performance against your peers.").hide().fadeIn(700).delay(2000).fadeOut(1000); 
//     $(".incentives #leaders").append("<h1> You're currently better than <strong class ='dark'>" + random_interval(99) + "% </strong> of other players! </h1>");
// }, random_interval(100));
