// Jeff (twitter @ippsketch)
// template for saving png files from p5.js sketch using CCapture

var capture = false; // default is to not capture frames, can be changed with button in browser
var capturer = new CCapture({format:'png'});

const NUM_FRAMES = 100;
const T = 1;

function setup() {
    createCanvas(750, 750);
}

function draw() {
    if (capture && frameCount==1) capturer.start(); // start the animation capture

    // here is the sketch
    background(0)
    var t = ((frameCount-1)%NUM_FRAMES)/NUM_FRAMES
    var x = width/3*sin(TWO_PI*t);
    var y = width/3*cos(TWO_PI*t);
    fill(255);
    noStroke();
    translate(width/2,height/2)
    ellipse(x,y,width/10)

    if (capture){
        capturer.capture( canvas ); // if capture is 'true', save the frame
        if (frameCount-1 == NUM_FRAMES){ //stop and save after NUM_FRAMES
            capturer.stop(); 
            capturer.save(); 
            noLoop(); 
        }
    }
}

function buttonPress()
{
    if (capture == false) {
        capture = true;
        document.getElementById("myButton").value='Saving Frames... Press Again to Cancel'; 
        frameCount = 0;
    } else {
        location.reload(); //refresh the page (starts animation over, stops saving frames)
    }
}