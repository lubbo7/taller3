const express = require('express'),
    MongoClient = require('mongodb').MongoClient;
consolidate = require('consolidate'),
    app = express();

app.engine('hbs', consolidate.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

MongoClient.connect('mongodb://localhost:27017', (err, client) => {

    useNewUrlParser: true

    if (err) throw err;
    db = client.db('musica');

});

app.get('/albumes/:album', (req, res) => {

    var producto = db.collection('albumes').find();

    producto.filter({
        album: req.params.album
    });

   producto.toArray((err, result) =>
        res.render('producto', {
            albumes: result
        })
    )
});

app.get('/productosPorIds', (req, res) => {
    console.log(req.query.ids);
    var arreglo = req.query.ids.split(',');
    arreglo = arreglo.map(function (id) {
        return new ObjectID(id);
    });
    var prod = db.collection('musica')
        .find({
            _id: {
                $in: arreglo
            }
        })
        .toArray((err, result) => {
            res.send(result);
        });
});

app.get('/checkout',(req,res)=>{
    res.render('checkout');
});

app.get('/intro',(req,res)=>{
    res.render('intro');
});


app.get('/home',(req,res)=>{
    res.render('home');
});


app.get('/', (req, res) => {

    var producto = db.collection('albumes').find();
    var precioSuma = parseInt(req.query.precio) * 1000 + 15000;

    //filtra por precio
    if (req.query.precio) {
        producto.filter({
            precio: {
                $lte: parseInt(req.query.precio) + 15,
                $gt: parseInt(req.query.precio)
            }
        });
        console.log(req.query.precio);
    }

    //filtra por artista
    if (req.query.artista) {
        producto.filter({
            artista: req.query.artista
        });
    }

    //filtra por genero
    if (req.query.genero) {
        producto.filter({
            genero: req.query.genero
        });
    }

    //filtra por estrellas
    if (req.query.estrellas) {
        producto.filter({
            estrellas: parseInt(req.query.estrellas)
        });
    }

    //filtra por fecha
    if (req.query.fecha) {
        producto.filter({
            fecha: parseInt(req.query.fecha)
        });
    }

    //VISUALIZACIÓN DEL PRODUCT

    if (req.query.album) {
        producto.filter({
            album: req.query.album
        });
    }

    producto.toArray((err, result) => {
        res.render('index', {
            albumes: result
        });
    });
});



app.listen(3000, () => {
    console.log("Puerto en funcionamiento 3000");
});