
var context;

var dx=2;
var dy=2;

var x=200;
var y=100;
var r=100;
var words=["ant","hill","box","climb","pinhole","grass","hungry","rat","leg"]
var n = 7;
var scrambled = new Array();

var current=0;

for(var i = 0; i < n; i++) {
    scrambled[i] = words[i].split('').sort(function(){return 0.5-Math.random()}).join('');
}

function draw(c){
    context= myCanvas.getContext('2d');
    context.textAlign="center";
    //context.clearRect(0,0,600,600);
    context.beginPath();
    context.strokeStyle="#000000";
    context.fillStyle="#ffffff";
    context.arc(x,y,r,0,Math.PI*2,true);
    context.closePath();
    context.stroke();
    context.fill();

    context.font="30px Arial";

    context.fillStyle="#000000";
    context.fillText(scrambled[c],x,y+10);
    if( x<0+r || x>myCanvas.width-r) dx=-dx;
    if( y<0+r || y>myCanvas.height-r) dy=-dy;
    x+=dx;
    y+=dy;
}

function drawAll() {
    context= myCanvas.getContext('2d');
    context.clearRect(0,0,myCanvas.width,myCanvas.height);
    draw(current);
}


setInterval( function() { drawAll(); }, 30 );

$("#input-form").submit(function( event ) {
    event.preventDefault();
    user_input = $("#input-form input").val();
    process_input(user_input);
});

var process_input = function(cmd_text) {
    var command_found = false;

    var regex = new RegExp((words[current]), "gi");
    if (cmd_text.match(regex) !== null) {
        current++;
        cmd_text="";
        console.log("sup");
        if(incentive_mode=="levels") {
            next_level();
        }
    }

    command_found = false;

};