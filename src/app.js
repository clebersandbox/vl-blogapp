const path = require('path');
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

//Public
// como colquei os codigos fontes dentro de src, 
// é necessário subir nivel na pasta pra poder acessar 'public'
const publicPath = path.join(__dirname, '../public') 
app.use(express.static(publicPath));

//Rotas
app.use('/admin', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));