var    cover = document.getElementsByClassName('imageContainer'),
h1 = document.getElementsByTagName('h1'),
h2 = document.getElementsByTagName('h2'),
h3 = document.getElementsByTagName('h3');

var primero = document.getElementById('primero');
var segundo = document.getElementById('segundo');

tl = new TimelineLite();


TweenLite.from(cover, 2, {opacity: 0, y: -500, ease: Power1.easeOut});
TweenLite.from(h1, 1, {opacity: 0, x: 500, ease: Power1.easeOut});
TweenLite.from(h2, 1, {opacity: 0, x: 500, ease: Power1.easeOut, delay: 1});
TweenLite.from(h3, 1, {opacity: 0, x: 500, ease: Power1.easeOut, delay: 2});

tl.from(primero,2 ,{opacity: 0, x: -1000, ease:  Power4.easeOut, delay: 2})
    .from(segundo, 2,{opacity:0,x: 1300, ease:  Power4.easeOut}, "-=1.5");