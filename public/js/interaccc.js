function sound() {
    var height;
    var width;
    var __construct = function () {
        height = window.innerHeight;
        //height = 700;
        width = window.innerWidth;
    }();

    this.get = function (n) {
        if (eval(n)) {
            return eval(n);
        }
        return false;
    }
    this.set = function (n, v) {
        eval(n + " = " + v);
    }
}

var song, analyzer, fft, peakDetect, peaks;
var timestamp = new Date().getTime();
var Y_AXIS = 1;
var X_AXIS = 2;
var b1, b2, c1, c2;
var reproducir = document.getElementById('play');
var fuente;

var d;
var red;
var green;
var blue;
//radius of the mouse...will explain more later
var rad = 3;

var s = new sound();

function preload() {
    fondo = loadImage('../imagenes/textura/textura.png');
    song = loadSound('../sonido/daydream.mp3');

    fft = new p5.FFT();
    peakDetect = new p5.PeakDetect();
    textura = loadImage('../imagenes/textura/textura.png');
    fuente = loadFont("../fuentes/VCR_OSD_MONO_1.001.ttf");
}

function setup() {

    createCanvas(windowWidth, windowHeight);
    //    song.play();
    //peaks = song.getPeaks();

    // create a new Amplitude analyzer
    analyzer = new p5.Amplitude();

    // Patch the input to an volume analyzer
    analyzer.setInput(song);

    // Definir colores

    b1 = color(255);
    b2 = color(0);
    c1 = color(204, 102, 0);
    c2 = color(0, 102, 153);

}

var r = 0,
    g = 0,
    b = 0,
    o = 0;

function draw() {
    background(0);
    tint(255, 140);
    image(fondo, 0, 0, windowWidth, windowHeight);
    fill(255);
    textFont(fuente);
    textSize(20);
var equis = 1152;
    text((int)(song.currentTime() / 60).toString().trim() + " : ", equis, 550);
    text((int)(song.currentTime() % 60).toString().trim(), equis+45, 550);

    var colorFondo = 255;
    var rms = 0;
    if (peakDetect.isDetected) {
        rms = analyzer.getLevel();
        colorFondo = 0;

    } else {
        colorFondo = 250;
        rms = analyzer.getLevel();
    }

    var rms = 0;
    if (peakDetect.isDetected) {
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
    //  background(colorFondo);


    var waveform = fft.waveform();
    fill(0);
    beginShape();

    stroke(255, 255, 255, 70); // linea
    strokeWeight(1);
    for (var i = 0; i < waveform.length; i += 10) {
        var x = map(i, 0, waveform.length, 0, width);
        var y = map(waveform[i] / 10, -1, 1, 0, height);
        vertex(x, y);
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
    // fill('rgba(' + parseInt(127 + r) + ',' + parseInt(127 + g) + ',' + parseInt(127 + b) + ',' + (.5 + o) + ')');
    //fill('rgba(255,0,0,.5)');
    // Get the average (root mean square) amplitude
    //var rms = analyzer.getLevel();

    stroke(0);
    strokeWeight(0);

    // Draw an ellipse with size based on volume
    // ellipse(width / 2, height / 2, 10 + rms * (height / 2), 10 + rms * (height / 2));
    //image(textura, 0, 0);

}

function mousePressed() {


    if(reproducir){
        if (song.isPlaying() ) {
            song.pause();
            background(10);
          } else {
            song.play();
          }
    }
}