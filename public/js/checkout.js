console.log(arreglo);

fetch('http://localhost:3000/productosPorIds?ids='+arreglo)
.then(function(res){
    return res.json();
})
.then(function(res){
    console.log(res);

    var lista = document.querySelector('.productos');
    res.forEach(function(elem){
        lista.innerHTML += '<li><img width="100" src="'+elem.imagen+'">' + elem.album + '</li>';
    });
});