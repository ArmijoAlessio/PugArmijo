var express = require('express');
const people = require('./people.json'); //Copia il file people.json dentro la variabile people
var app = express();
app.set('view engine', 'pug');   //Dico a express di usare pug come motore di template
app.use(express.static(__dirname + '/public')); // Dico ad express dove recuperare i file statici
app.get('/', function (req, res) {
  //res.send('Hello World!');
 res.render('index', {
   title: 'Homepage',
   people: people.profiles //Passa il vettore profiles alla pagina index.pug

 });
  //Dico a express di processare e inviare la pagina index.pug
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});