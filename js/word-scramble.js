
var context;
var container;

var dx=2;
var dy=2;

var x=200;
var y=200;
var r=100;
var words=["ant","hill","box","climb","pinhole","grass","hungry","rat","leg"]
var n = 7;
var scrambled = new Array();

var current=0;

for(var i = 0; i < n; i++) {
    scrambled[i] = words[i].split('').sort(function(){return 0.5-Math.random()}).join('');
}


$("#input-form").submit(function( event ) {
    event.preventDefault();
    user_input = $("#input-form input").val();
    process_input(user_input);
});

var process_input = function(cmd_text) {
    var command_found = false;

    var regex = new RegExp((words[current]), "gi");
    if (cmd_text.match(regex) !== null) {
        console.log("hi");
        current++;
        cmd_text="";
        console.log("sup");
        if(incentive_mode=="levels") {
            next_level();
        }
    }

    command_found = false;

};

function resizeCanvas(){
    console.log("hi");
    var con = document.getElementById("console-container"),
        canvas = document.getElementById("myCanvas"),
        aspect = canvas.height/canvas.width,    
        width = con.offsetWidth,
        height = con.offsetHeight;

    canvas.width = width;
    canvas.height = Math.round(width * aspect);
    drawAll();
}

window.onresize = resizeCanvas;
window.onload = resizeCanvas;


function draw(c){
    context= myCanvas.getContext('2d');
    context.canvas.width  = window.innerWidth;
    context.canvas.height = window.innerHeight;

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
    if( x<5+r || x>myCanvas.width-5) dx=-dx;
    if( y<5+r || y>myCanvas.height-5) dy=-dy;
    x+=dx;
    y+=dy;
}

function drawAll() {
    context= myCanvas.getContext('2d');
    context.clearRect(0,0,myCanvas.width,myCanvas.height);
    draw(current);
}


setInterval( function() { drawAll(); }, 30 );