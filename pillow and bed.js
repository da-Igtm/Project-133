function setup(){
    canvas=createCanvas(600,400);
    canvas.position(250,150);
objectDetector=ml5.objectDetector("CoCoSSD" , modelLoaded);
document.getElementById("status").innerHTML="status : detecting objects";
}

status="";
function modelLoaded(){
    console.log("model is loaded");
    status=true;
    objectDetector.detect(imag , gotResults);
}

function preload(){
    imag=loadImage("pillow and bed.jpg");
} 

function gotResults(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
}
}
function draw(){
    image(imag5,0,0,600,400)
    if(status!=""){
        for(i=0;i<object.length;i++){
            document.getElementById("status").innerHTML="status:object detected";
            fill("blue");
            percent=floor(object[i].confidence*100);
            textSize(20);
            text(object[i].label+"  "+percent+"%",object[i].x,object[i].y);
            noFill();
        stroke("green");
        rect(object[i].x,object[i].y,object[i].width,object[i].height);
    }
        }
    }