var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient; //Importo la libreria mongodb

/* GET users listing. */
router.get('/', function (req, res, next) {
    const uri = 'mongodb+srv://nlabati:Nicholas@2002@cluster0.yq4sl.mongodb.net/Cluster0?retryWrites=true&w=majority'
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("sample_mflix").collection("movies"); //Mi connetto alla collection movies
        // perform actions on the collection object
        collection.find().limit(10).toArray((err, result) => {
            if (err) res.send(err.message); //Se c'è qualche errore lo stampo
            else res.send(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });
});

router.get('/movie_from_title/:title', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
    title = req.params.title;
    const uri = 'mongodb+srv://nlabati:Nicholas@2002@cluster0.yq4sl.mongodb.net/Cluster0?retryWrites=true&w=majority'
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("sample_mflix").collection("movies"); //Mi connetto alla collection movies
        // eseguo una find sulla collection
        collection.find({ 'title': `${title}` }).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else res.send(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });
});

router.get('/list/:num', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
    let num = parseInt(req.params.num);
    const uri = 'mongodb+srv://nlabati:Nicholas@2002@cluster0.yq4sl.mongodb.net/Cluster0?retryWrites=true&w=majority'
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("sample_mflix").collection("movies"); //Mi connetto alla collection movies
        // eseguo una find sulla collection
        collection.find().limit(num).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else res.send(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });
});

router.get('/list_year/:num', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
    let num = parseInt(req.params.num);
    const uri = 'mongodb+srv://nlabati:Nicholas@2002@cluster0.yq4sl.mongodb.net/Cluster0?retryWrites=true&w=majority'
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("sample_mflix").collection("movies"); //Mi connetto alla collection movies
        // eseguo una find sulla collection
        collection.find({ 'year': num }).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else res.send(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });
});

router.get('/list_rating/:num', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
    let num = parseFloat(req.params.num);
    const uri = 'mongodb+srv://nlabati:Nicholas@2002@cluster0.yq4sl.mongodb.net/Cluster0?retryWrites=true&w=majority'
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("sample_mflix").collection("movies"); //Mi connetto alla collection movies
        // eseguo una find sulla collection
        collection.find({ 'imdb.rating': num }).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else res.send(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });
});

module.exports = router;