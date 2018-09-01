/**
 * Tabla de multiplicar
 */


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
var colors = require('colors');

let command = argv._[0];

switch (command) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(lista => console.log(lista))
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.blue}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}

// console.log(process.argv);
// let argv2 = process.argv;

//console.log(argv);