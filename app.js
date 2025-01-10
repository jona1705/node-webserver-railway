require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;



// Handlebar
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public'));

/*
Ya no es necesario usar si tenemos app.use
app.get('/', (req, res) => {
  res.send('Home page');
});*/

app.get('/', (req, res) => {
  //res.send('Hola Mundo');
  res.render('home', {
    nombre: 'Jonathan Córdoba',
    titulo: 'Curso de Node'
  });
});

/*app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su respectiva ruta')
});*/

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Jonathan Córdoba',
    titulo: 'Curso de Node'
  });
});
/*app.get('/generic', (req, res) => {
  res.sendFile(__dirname + '/public/generic.html')
});*/

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Jonathan Córdoba',
    titulo: 'Curso de Node'
  });
});
/*app.get('/elements', (req, res) => {
  res.sendFile(__dirname + '/public/elements.html')
});*/

app.get('*', (req, res) => {
    //res.send('404 | Page not found')
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })