

var xs = new Array();
var ys = new Array();
var rs = new Array();
var ws = new Array();

var dx=[4,-4,4,4,4];
var dy=[4,4,4,-4,4];

ws[0]="fox";
var nouns = ["cat","fox"];
ws=["fox","the","say","red","cat","eat","rat",];

var speed=8;
for(var i = 0; i  < ws.length; i++) {
    xs[i] = Math.random()*200+100;
    ys[i] = Math.random()*300+100;
    rs[i] = 40;
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
    //context.clearRect(0,0,600,600);
    context.beginPath();
    context.strokeStyle="#000000";
    context.fillStyle="#ffffff";
    context.arc(xs[i],ys[i],rs[i],0,Math.PI*2,true);
    context.closePath();
    context.stroke();
    context.fill();

    context.font="30px Arial";

    context.fillStyle="#000000";
    context.fillText(ws[i],xs[i]-20,ys[i]+10);
    if( xs[i]<rs[i]+5 || xs[i]>myCanvas.width-rs[i]-5) dx[i]=-dx[i];
    if( ys[i]<rs[i]+5 || ys[i]>myCanvas.height-rs[i]-65) dy[i]=-dy[i];
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


setInterval( function() { drawAll(); }, 30 );

$("#input-form").submit(function( event ) {
    event.preventDefault();
    user_input = $("#input-form input").val();
    process_input(user_input);
});

var process_input = function(cmd_text) {
    var command_found = false;

    for (var i=0;i<nouns.length;i++)
    {
        var regex = new RegExp((nouns[i]), "gi");
        if (cmd_text.match(regex) !== null) {
            if(incentive_mode=="levels") {
                next_level();
            }
        }
        command_found=true;
    }

    if (command_found == false) {
        console.log("oops");
    }

    command_found = false;

};