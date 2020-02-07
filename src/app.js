const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');

const router = require('./router');

const app = express();

//Configuracoes
//bodyParser
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Handlebars
app.engine('handlebars', handlebars( { defaultLayout: 'main' } ) );
app.set('view engine', 'handlebars')

//Rotas
app.use('/admin', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));