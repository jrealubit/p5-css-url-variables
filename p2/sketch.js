let num;

function setup() {
  let canvas = createCanvas(0.5*windowWidth, 0.5*windowWidth); //create canvas half screen width
  canvas.addClass('centered'); //add centered class to canvas (see style.css)
   //get color value from URL
  let params = getParams();
  let clr = params.color; 
  num = params.num; 
  //add color values in link to next page
  var a = document.getElementsByTagName('a')[0];
  var href = setParams(a.href, 'color', clr);
  a.href = href;

  background('#F28500');
  fill(clr); //circles are now the color from the URL
  noStroke();
}

function draw() {
  for(var i = 0; i < num; i++){
    ellipse(width/2, 50+i*30, num, num); //num from url controls width and height of ellipse
  }
}
