

var logoPrincipal = document.getElementById('redboneLogo');
var enlaces = document.getElementsByClassName('enlaces');
var menu = document.getElementById('menuIcon');
var redesSociales = document.getElementsByClassName('redesSociales');
var boton = document.getElementsByClassName('newMusicButton');
var h1 = document.getElementsByTagName('h1');


TweenLite.from(logoPrincipal, 2, {opacity: 0, x: -4500, ease:Power1.easeOut});
TweenLite.from(menu, 1, {opacity: 0, y: -800});
TweenLite.from(redesSociales, 1, {opacity: 0, y: 100, delay: 1});
TweenLite.from(enlaces, 1, {opacity: 0, y: -500, delay: 1});
TweenLite.from(h1, 3, {opacity: 0, x: 4500, delay: 1});
TweenLite.from(boton, 3, {opacity: 0, x: 4500, delay: 2});