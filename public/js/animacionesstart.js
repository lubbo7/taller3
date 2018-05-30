var    cover = document.getElementsByClassName('imageContainer'),
h1 = document.getElementsByTagName('h1'),
h2 = document.getElementsByTagName('h2'),
h3 = document.getElementsByTagName('h3'),
h4 = document.getElementsByTagName('h4');


TweenLite.from(cover, 2, {opacity: 0, y: -500, ease: Power1.easeOut});
TweenLite.from(h1, 1, {opacity: 0, x: 500, ease: Power1.easeOut});
TweenLite.from(h2, 1, {opacity: 0, x: 500, ease: Power1.easeOut, delay: 1});
TweenLite.from(h3, 1, {opacity: 0, x: 500, ease: Power1.easeOut, delay: 2});