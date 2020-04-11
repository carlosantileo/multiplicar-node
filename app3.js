const argv = require('./config/yargs').argv;
//const colors = require('colors');
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            //.then(archivo => console.log(`Archivo Creado: ${ archivo.brightGreen }`))
            .then(archivo => console.log(`Archivo Creado: `, colors.red(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}

//console.log(argv.base);


// let parametros = argv[2];
// let base = parametros.split('=')[1]