var dx=2;
var dy=2;

var x=200;
var y=200;
var r=100;
var scrambled = new Array();

var ws = words;

var current=0;

for(var i = 0; i < ws.length; i++) {
    scrambled[i] = ws[i].split('').sort(function(){return 0.5-Math.random()}).join('');
}

function resizeCanvas(){
    var con = document.getElementById("console-container"),
        canvas = document.getElementById("myCanvas"),   
        width = con.clientWidth,
        height = con.clientHeight;
    
    canvas.width = width;
    canvas.height = height;
}

window.onresize = resizeCanvas;
window.onload = resizeCanvas;
    
    
function draw(c){
    var context= myCanvas.getContext('2d');

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
    if( x<r+5 || x>myCanvas.width-r-5) dx=-dx;
    if( y<r+5 || y>myCanvas.height-r-65) dy=-dy;
    x+=dx;
    y+=dy;
}

function drawAll() {
    var context= myCanvas.getContext('2d');
    context.clearRect(0,0,myCanvas.width,myCanvas.height);
    draw(current);
}

$("#input-form").submit(function( event ) {
    event.preventDefault();
    user_input = $("#input-form input").val();
    process_input(user_input);
});


var num_found = 0;

var process_input = function(cmd_text) {
    var regex = new RegExp((ws[current]), "gi");
    if (cmd_text.match(regex) !== null) {
        cmd_text="";
        dx*=1+Math.random()*.1;
        dy*=1+Math.random()*.1;
        num_found++;

        if (incentive_mode == "badges") {
            assign_badge_word(ws[current]);
        }
        else if (incentive_mode == "leaders") {
            assign_leader_word(ws[current]);
        }
        else if (incentive_mode == "badges") {
            assign_level_word(ws[current]);
        }
        ws.splice(current,1);
        scrambled.splice(current,1);

    } else {
        if(current<ws.length-1) current++;
        else current=0;
    }
    $("#input-form input[type=text]").val("");

};

setInterval( function() { drawAll(); }, 30 );