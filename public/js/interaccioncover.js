var canvas = document.getElementById("canvas");
var marcoLFL,
    lfl1,
    lfl2,
    lfl3,
    lfl4;

var imagenCover;

var num = 0;

var visualizer = function (p) {
    p.setup = function () {
        p.createCanvas(canvas.clientWidth, canvas.clientHeight);
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
        p.background(255);

        switch (num) {
            case 0:
                p.image(lfl1, 300, 0);
                break;
            case 1:
                p.image(lfl2, 300, 0);
                break;
            case 2:
                p.image(lfl3, 300, 0);
                break;
            case 3:
                p.image(lfl4, 300, 0);
                break;
        }
        p.image(marcoLFL, 300, 0);
    }

    p.mousePressed = function () {
        if (p.mouseX > 300 && p.mouseX < 300 + 500 && p.mouseY > 100 && p.mouseY < 100 + 500) {
            console.log(imagenCover);
            if (num === 0) {
                num = 1;
            } else if (num === 1) {
                num = 2;
            } else if (num === 2) {
                num = 3;
            } else if (num === 3) {
                num = 0;
            }
        }
    }
};

var myp5 = new p5(visualizer, canvas);