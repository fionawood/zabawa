

var xs = new Array();
var ys = new Array();

var dx=[4,-4,4,4,4];
var dy=[4,4,4,-4,4];

var ws = words;

var r = 60;

var num_found = 0;
var speed=8;
for(var i = 0; i  < ws.length; i++) {
    xs[i] = Math.random()*200+100;
    ys[i] = Math.random()*300+100;
    if(dx[i-1]>0) dx[i] = Math.random()*speed;
    else dx[i] = Math.random()*-speed;
    if(dy[i-1]>0) dy[i] = Math.random()*speed;
    else dy[i] = Math.random()*-speed;
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

function draw(i){
    var context= myCanvas.getContext('2d');

    context.textAlign="center";
    //context.clearRect(0,0,600,600);
    context.beginPath();
    context.strokeStyle="#000000";
    context.fillStyle="#ffffff";
    context.arc(xs[i],ys[i],r,0,Math.PI*2,true);
    context.closePath();
    context.stroke();
    context.fill();

    context.font="25px Arial";

    context.fillStyle="#000000";
    context.fillText(ws[i],xs[i],ys[i]+10);
    if( xs[i]<r+5 || xs[i]>myCanvas.width-r-5) dx[i]=-dx[i];
    if( ys[i]<r+5 || ys[i]>myCanvas.height-r-65) dy[i]=-dy[i];
    xs[i]+=dx[i];
    ys[i]+=dy[i];
}

function drawAll() {
    context= myCanvas.getContext('2d');
    context.clearRect(0,0,myCanvas.width,myCanvas.height);
    for(var i = 0; i < ws.length; i++) {
        draw(i);
    }
}

$("#input-form").submit(function( event ) {
    event.preventDefault();
    user_input = $("#input-form input").val();
    process_input(user_input);
});

var process_input = function(cmd_text) {

    for (var i=0;i<nouns.length;i++)
    {
        var regex = new RegExp((nouns[i]), "gi");
        if (cmd_text.match(regex) !== null) {
            cmd_text="";
            num_found++;

            if (incentive_mode == "badges") {
               assign_badge_word(nouns[i]);
            }
            else if (incentive_mode == "leaders") {
                assign_leader_word(num_found);
            }
            else if (incentive_mode == "levels") {
                assign_level_word(num_found);
            }
        }
    }
    $("#input-form input[type=text]").val("");
    drawAll();

};


setInterval( function() { drawAll(); }, 30 );