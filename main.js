canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
roverX=10;
roverY=10;
bg_image="mars bg.jfif";
rover_image="rover.jfif";

function add() {
bg_imagetag=new Image();
bg_imagetag.onload=uploadbackground;
bg_imagetag.src=bg_image;

rover_imagetag=new Image();
rover_imagetag.onload=uploadrover;
rover_imagetag.src=rover_image;
}

function uploadbackground() {
    ctx.drawImage(bg_imagetag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imagetag, roverX, roverY, rover_width, rover_height);
} 

window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
keypress=e.keyCode;
console.log(keypress);
if(keypress=='38') {
up();
console.log("up");
}
if(keypress=='40') {
    down();
    console.log("down");
    }
if(keypress=='37') {
        left();
        console.log("left");
        }
 if(keypress=='39') {
            right();
            console.log("right");
            }
}


function up(){
if(roverY>=0)
{
    roverY=roverY-10;
    console.log("when up key is prssed, x="+roverX+" Y= "+roverY);
    uploadbackground();
    uploadrover();
}
}

function down() {
if(roverY<=500)
{
roverY=roverY+10;
console.log("when down key is pressed, x="+roverX+" Y= "+roverY);
uploadbackground();
uploadrover();
}
}

function left() {
if(roverX>=0)
{
roverX=roverX-10;
console.log("when left key is pressed, x="+roverX+" Y= "+roverY);
uploadbackground();
uploadrover();
}
}

function right() {
if(roverX<=700)
{
roverX=roverX+10;
console.log("when right key pressed, x="+roverX+" Y= "+roverY);
uploadbackground();
uploadrover();
}
}

















