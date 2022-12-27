canvas=document.getElementById('myCanvas')
ctx=canvas.getContext("2d")

greencar_width=75;
greencar_height=100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
greencar_x=5;
greencar_y=225;
function add() {
background_imgtag=new Image();
background_imgtag.onload=uploadBackground;
background_imgtag.src=background_image;
greencar_imgtag=new Image();
greencar_imgtag.onload=uploadgreencar;
greencar_imgtag.src=greencar_image;
}


function uploadBackground() {
ctx.drawImage(background_imgtag,0,0,width,canvas.height);
}
function uploadgreencar()
{
ctx.drawImage(rover_imgtag,rover_X,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
keypressed=e.keyCode;
console.log(keypressed);
if (keypressed=='38') {
up();
console.log("up");
}
if (keypressed=='39') {
right();
console.log("right");
}
if (keypressed=='37') {
left();
console.log("left");
}
if (keypressed=='40') {
down();
console.log("down");
}
}
function up()
{
if (greencar_y>=0) {
greencar_y=greencar_y-10;
uploadBackground();
uploadgreencar();
}
}
function down()
{
if (greencar_y<=500) {
greencar_y=greencar_y+10;

uploadBackground();
uploadgreencar();
}
}
function left()
{
if (greencar_X>=0) {
greencar_X=greencar_X-10;
uploadBackground();
uploadgreencar();
}
}
function right()
{
if (greencar_X<=700) {
	=greencar_X=greencar_X+10;
uploadBackground();
uploadgreencar();
}
}





window.addEventListener("keydown", my_keydown);

