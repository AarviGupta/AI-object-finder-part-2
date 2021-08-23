status="";
input="";
function setup(){
canvas=createCanvas(600,380);
canvas.center();

video = createCapture(VIDEO);
video.hide();
}
function start(){
    object=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="status: detecting objects";
    input=document.getElementById("input").value;
}
function modelloaded(){
    console.log("model loaded");
status=true;
}
function draw(){
    image(video,0,0,600,380);
    }