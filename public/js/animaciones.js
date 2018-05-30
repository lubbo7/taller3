var logoPrincipal = document.getElementById('redboneLogo'),
    enlaces = document.getElementsByClassName('enlaces'),
    menu = document.getElementById('menuIcon'),
    redesSociales = document.getElementsByClassName('redesSociales'),
    boton = document.getElementsByClassName('newMusicButton'),
    h1 = document.getElementsByTagName('h1'),
    cargando = document.getElementById('cargando'),
    cargandoTexto1 = document.getElementById('cargandoTexto1'),
    cargandoTexto2 = document.getElementById('cargandoTexto2');

//TweenLite.from(cargando, 1, {opacity: 0});
//TweenLite.from(cargandoTexto1, 1, {opacity: 0, y: -4500, delay: 1, ease: Power4.easeOut});
//TweenLite.from(cargandoTexto2, 1, {opacity: 0, y: -4500, delay: 2, ease: Power4.easeOut});
//TweenLite.to(cargando,2, {y: -1000, delay: 6, ease: Power1.easeIn});
TweenLite.from(logoPrincipal, 2, { opacity: 0, x: -4500, ease: Power1.easeOut});
TweenLite.from(menu, 1, {opacity: 0, y: -800});
TweenLite.from(redesSociales, 1, {opacity: 0, y: 100, delay: 1});
TweenLite.from(enlaces, 1, {opacity: 0, y: -500, delay: 1});
TweenLite.from(h1, 3, {opacity: 0, x: 4500, delay: 1});
TweenLite.from(boton, 3, {opacity: 0, x: 4500, delay: 2});