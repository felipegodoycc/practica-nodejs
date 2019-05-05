// const http = require('http')

// http.createServer((req,res) =>{ 
//     res.write('Hola mundo');
//     res.end();
// })
// .listen(8080);

// console.log("webserver run")

const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
const puerto = 8080;

app.use( express.static( __dirname+'/public'));

hbs.registerPartials( __dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get('/', (req,res) => {
    res.render('home', {
        nombre: 'Felipe'
    });
})
app.get('/about', (req,res) => {
    res.render('about')
})

app.listen(puerto, () => {
    console.log(`Escuchando en puerto ${puerto}`);
    
});