function setup() {
    video = createCapture(VIDEO);
    video.size(550,600);
    

    canvas = createCanvas(600,500);
    canvas.position(600,125);
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Posenet is Initialized!!");
}

function gotPoses(results) {
    if(results.length < 0)
    {console.log(results);}
}





