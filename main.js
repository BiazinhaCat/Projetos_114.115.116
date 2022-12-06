noseX = 0; 
noseY = 0; 

function preload() {
  nose = loadImage("https://i.postimg.cc/pWPQbvGC/l1.png");

}

function setup() {
  
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
  
  if (results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x - 30;
    noseY = results[0].pose.nose.y + 10;
    
  }
}


function modelLoaded() {
  
  console.log('PoseNet Foi Iniciado');
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(nose, noseX, noseY, 40, 40)
  //fiil("pink");
  //stroke("black");
  //circle(noseX, noseY, 20)
}

function takeSnapshot() {
  
  save('Meu_Filtro.png');
}
