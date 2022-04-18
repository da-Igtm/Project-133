function setup(){
;
objectDetector=ml5.objectDetector("CoCoSSD" , modelLoaded);
document.getElementById("status").innerHTML="status : detecting objects";
}
function modelLoaded(){
    console.log("model is loaded");
    status=true;
    objectDetector.detect(imag , gotResults);
}

function gotResults(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
}
}