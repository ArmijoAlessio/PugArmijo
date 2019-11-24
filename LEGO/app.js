var express = require('express');
const lego = require('./lego.json'); //Copia il file people.json dentro la variabile people

var app = express();

app.set('view engine', 'pug');   //Dico a express di usare pug come motore di template

app.use(express.static(__dirname + '/public')); // Dico ad express dove recuperare i file statici


app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});
app.get('/', function (req, res) {
  res.render('index', {
   title: 'scegli il tuo lego',
    lego: lego.legos //Passa il vettore profiles alla pagina index.pug

 });
});