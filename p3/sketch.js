let clr;
let img;

function preload(){
  img = loadImage('whole image.png'); 
  /*
  Creator
  Katsushika Hokusai (Japanese, 1760-1849)
  Title
  Fine Wind, Clear Morning (Gaif^u kaisei)
  */
}

function setup() {
  let canvas = createCanvas(745, 509); //create canvas half screen width

  canvas.addClass('positioned'); //add positioned class to canvas (see style.css)
  let params = getParams(); //get values from URL
  clr = params.color; 
  background('yellow');
  noStroke();
}

function draw() {
  fill(clr);
  ellipse(random(745), random(509), 20);
  image(img,mouseX,mouseY);
}
