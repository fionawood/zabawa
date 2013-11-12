// text-adventure game script
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

var process_input = function(cmd_text) {
    var command_found = false;

    for (var i=0;i<current_stage.commands.length;i++)
    {
        var regex = new RegExp((current_stage.commands[i]), "gi");
        if (cmd_text.match(regex) !== null) {
            object_string = "stages." + current_stage.commands[i];
            current_stage = eval(object_string);
            command_found = true;
            if (current_stage.badge !== undefined && incentive_mode == "badges") {
                assign_badge(current_stage.badge);
            }
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
