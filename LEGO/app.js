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
app.get('/lego', (req, res) => {
  const lego1 = lego.legos.find(p => p.SetNumber === req.query.id);
  res.render('lego1', {
    title: `${lego1.SetTheme} - ${lego1.SetName}`,
    lego1,
  });
});


//passare api ad angular
const path = require('path');
const http = require('http');



var cors = require('cors'); //HTTP access control (CORS) for cross origin requests

app.use(cors()); //Setup cors

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));
app.get('/api', (req, res) => {
  var jsonData = lego.legos;
  res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonData));
});
