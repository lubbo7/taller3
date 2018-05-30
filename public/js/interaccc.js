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
var imagen = document.getElementsByClassName('imageContainer');

var s = new sound();

function preload() {
    song = loadSound('../sonido/bellyache.mp3');

    fft = new p5.FFT();
    peakDetect = new p5.PeakDetect();
    textura = loadImage('../imagenes/textura/textura.png');

}

function setup() {

    createCanvas(windowWidth, windowHeight);
    song.loop();
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
    background(colorFondo);


    var waveform = fft.waveform();
  //  fill(80, 90, 10);
    beginShape();

    stroke(r, g, b); // linea
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
    fill('rgba(' + parseInt(127 + r) + ',' + parseInt(127 + g) + ',' + parseInt(127 + b) + ',' + (.5 + o) + ')');
    //fill('rgba(255,0,0,.5)');
    // Get the average (root mean square) amplitude
    //var rms = analyzer.getLevel();

    stroke(0);
    strokeWeight(0);

    // Draw an ellipse with size based on volume
   // ellipse(width / 2, height / 2, 10 + rms * (height / 2), 10 + rms * (height / 2));
    //image(textura, 0, 0);

    // Frente
    setGradient(50, 90, 540, 80, c1, c2, Y_AXIS);
}

function setGradient(x, y, w, h, c1, c2, axis) {

    noFill();

    if (axis == Y_AXIS) { // Gradiente de arriba a abajo
        for (var i = y; i <= y + h; i++) {
            var inter = map(i, y, y + h, 0, 1);
            var c = lerpColor(c1, c2, inter);
            stroke(c);
            line(x, i, x + w, i);
            console.log('se pinta');
        }
    } else if (axis == X_AXIS) { // Gradiente de izquierda a derecha
        for (var i = x; i <= x + w; i++) {
            var inter = map(i, x, x + w, 0, 1);
            var c = lerpColor(c1, c2, inter);
            stroke(c);
            line(i, y, i, y + h);
        }
    }
}