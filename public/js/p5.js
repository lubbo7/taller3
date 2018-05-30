/*var song;
var fft;
var control = document.getElementById('botonControl');
var img;
var vid;
var theta = 0;
var x;
var y;
var outsideRadius = 150;
var insideRadius = 100;
function setup() {
    var numPoints = int(map(mouseX, 0, width, 6, 60));
    var angle = 0;
    var angleStep = 180.0 / numPoints;
    beginShape(TRIANGLE_STRIP);
    for (var i = 0; i <= numPoints; i++) {
        var px = x + cos(radians(angle)) * outsideRadius;
        var py = y + sin(radians(angle)) * outsideRadius;
        angle += angleStep;
        vertex(px, py);
        px = x + cos(radians(angle)) * insideRadius;
        py = y + sin(radians(angle)) * insideRadius;
        vertex(px, py);
        angle += angleStep;
    }
    endShape();
    song = loadSound('../sonido/daydream.mp3');
    createCanvas(windowWidth, windowHeight, WEBGL);
    // background(255, 0, 0);
    fft = new p5.FFT();
    //tres de
    img = loadImage("../imagenes/22.jpg");
    vid = createVideo(["https://www.youtube.com/watch?v=etIdz_793lw"]);
    vid.loop();
    vid.hide();
    x = width / 2;
    y = height / 2;
}
function mousePressed() {
    if (song.isPlaying()) { // .isPlaying() retorna una variable booleana
        song.pause();
        //  background(255, 0, 0);
    } else {
        song.play();
        //  background(0, 255, 0);
        fft.setInput(song);
    }
}
function draw() {
    background(250);
    /*
        var spectrum = fft.analyze();
        beginShape();
        for (i = 0; i < spectrum.length; i++) {
            vertex(i, map(spectrum[i], 0, 255, height, 0));
        }
        endShape();*/


    //  
 /*   var spectrum = fft.analyze();
    rotateY(frameCount * 0.01);
    for (var j = 0; j < 5; j++) {
        for (i = 0; i < spectrum.length; i++) {
            push();
            for (var i = 0; i < 80; i++) {
                translate(sin(0.01 + j) * 100, sin(frameCount * 0.1 + j + spectrum[i]) * 100, i * 0.1);
                rotateZ(mouseY + 0.02);
                push();
                //tresde();
                // sphere(8, 6, 4);
                //fill();
                fill(240);
                ellipse(10, 10, 10, 10);
                pop();
            }
            pop();
        }
    }
}
// fuente del video: https://vimeo.com/90312869
function tresde() {
    //translate(-220, 0, 0);
    /*push();
    rotateZ(theta * mouseX * 0.001);
    rotateX(theta * mouseX * 0.001);
    rotateY(theta * mouseX * 0.001);
    //pasar una imagen como textura
    texture(vid);
    sphere(150);
    pop();*/
    //translate(width / 2, height / 2);
    //translate(0, 0, 0);
  /*  push();
    rotateZ(theta * 0.0001);
    rotateX(theta * 0.0001);
    rotateY(theta * 0.0001);
    texture(img);
    box(60, 60, 60);
    pop();
    theta += 0.05;
}*/ 

function sound() {
    var height;
    var width;
    var __construct = function(){
        height = window.innerHeight;
        //height = 700;
        width = window.innerWidth;
    }();

    this.get = function(n){
        if(eval(n)){
            return eval(n);
        }
        return false;
    }
    this.set = function(n,v){
        eval(n + " = " + v);
    }
}

var song, analyzer, fft, peakDetect, peaks;
var timestamp = new Date().getTime();

var s = new sound();

function preload() {
    song = loadSound('../sonido/bellyache.mp3');

    fft = new p5.FFT();
    peakDetect = new p5.PeakDetect();

}

function setup() {
    createCanvas(s.get('width'), s.get('height'));
    song.loop();
    //peaks = song.getPeaks();

    // create a new Amplitude analyzer
    analyzer = new p5.Amplitude();

    // Patch the input to an volume analyzer
    analyzer.setInput(song);
}
var r = 0, g = 0, b = 0, o = 0;

function draw() {
    var colorFondo = 0;
    var rms = 0;
    if ( peakDetect.isDetected ) {
        rms = analyzer.getLevel();
        colorFondo = 0;

    } else {
       colorFondo = 255;
        rms = analyzer.getLevel();
    }
    background(colorFondo);

    // peakDetect accepts an fft post-analysis
    var spectrum = fft.analyze();
    peakDetect.update(fft);

    fill('rgba(255,255,255,1)');
    stroke('rgba(255,255,255,1)');
    strokeWeight(1);

    for (var i = 0; i< spectrum.length; i+=10){
        var x = map(i, 0, spectrum.length, 0, width);
        var h = -height + map(spectrum[i], 0, 255, height, 0);
        rect(x, height, (width / spectrum.length) * 10, h )
    }

    var rms = -10;
    if ( peakDetect.isDetected ) {
        rms = analyzer.getLevel();
        r = 255;
        g = 255;
        b = 255;

    } else {
        r = 0;
        g = 0;
        b = 0;
        rms = analyzer.getLevel();
    }

    var waveform = fft.waveform();
    noFill();
    beginShape();

    stroke(r,g,b); // linea
    strokeWeight(1);
    for (var i = 0; i< waveform.length; i+=10){
        var x = map(i, 0, waveform.length, 0, width);
        var y = map( waveform[i]/10, -1, 1, 0, height);
        vertex(x,y);
    }
    endShape();
/*
    var rms = 0;
    if ( peakDetect.isDetected ) {
        rms = analyzer.getLevel();
        r = 127;
        g = -127;
        b = -127;
        o = .5;
    } else {
        r = r * .85;
        g = g * .85;
        b = b * .85;
        o = o * .85;
        rms = analyzer.getLevel();
    }*/
    fill('rgba('+parseInt(127 + r)+','+parseInt(127 + g)+','+parseInt(127 + b)+','+(.5 + o)+')');
    //fill('rgba(255,0,0,.5)');
    // Get the average (root mean square) amplitude
    //var rms = analyzer.getLevel();

    stroke(0);
    strokeWeight(0);

    // Draw an ellipse with size based on volume
    ellipse(width / 2, height / 2, 10 + rms * (height / 2), 10 + rms * (height / 2));
}