img = "";
objects="";
status="";


function preload() {
    img = loadImage("fruit_163436567.jpeg");
}

function setup() {
    canvas = createCanvas(600, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelloaded)
    document.getElementById("status").innerHTML="Status = Detecting Objects"
}

function modelloaded(){
    console.log("model is loaded")
    status=true
    objectDetector.detect(img,gotresult)
    }
    
    function gotresult(error,results){
        if(error){
            console.log(error)
        }
        else{
            console.log(results)
            objects=results
        }
    }

function draw() {
    image(img, 0, 0, 600, 420);

    if (status != "")
    {
        for(i=0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Detected";

            fill("#FF0000");
            percentage = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percentage + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function fruit_back() {
    window.location = "index.html";
}