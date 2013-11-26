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

setInterval( function() { drawAll(); }, 30 );