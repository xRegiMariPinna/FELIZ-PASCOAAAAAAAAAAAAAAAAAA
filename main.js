var noseX=0;
var noseY=0;
var clown_nose;
var canvas;
var video;

function preload() {
  clown_nose = loadImage('coelho.png');
  
}

function setup() {
  canvas = createCanvas(301, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(301,300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-100;
    noseY = results[0].pose.nose.y-145;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(clown_nose, noseX, noseY, 200, 200);
}

function take_snapshot(){    
  save('myFilterImage.png');
}
