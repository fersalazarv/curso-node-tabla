
//---------------------------------------------------------

//const { argv } = require('yargs');
const yargs = require('yargs');
const {crearArchivo}= require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require ('colors');



console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'CREADO'))     
    .catch((err) => console.log(err));





