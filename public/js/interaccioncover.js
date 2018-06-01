var canvas = document.getElementById("canvas");
var marcoLFL,
    lfl1,
    lfl2,
    lfl3,
    lfl4;

var imagenCover;

var visualizer = function (p) {
    p.setup = function () {
        p.createCanvas(p.windowWidth, canvas.clientHeight);
        reproducir = p.select('#play');
        imagenCover = 'lfl1';
    }

    p.preload = function () {
        fuente = p.loadFont("../fuentes/VCR_OSD_MONO_1.001.ttf");
        marcoLFL = p.loadImage("../imagenes/marcos/lustforlife/marco.png");
        lfl1 = p.loadImage("../imagenes/marcos/lustforlife/1.jpg");
        lfl2 = p.loadImage("../imagenes/marcos/lustforlife/2.jpg");
        lfl3 = p.loadImage("../imagenes/marcos/lustforlife/3.jpg");
        lfl4 = p.loadImage("../imagenes/marcos/lustforlife/4.jpg");
    }

    p.draw = function () {
        console.log(imagenCover);
        p.background(255);
        p.image(lfl2, 300, 100);
        p.image(marcoLFL, 300, 100);
    }
};

var myp5 = new p5(visualizer, canvas);