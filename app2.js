const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

const { crearArchivo } = require('./multiplicar/multiplicar');

//pasando parametros desde consola
let argv2 = process.argv;

//console.log(argv.base);
console.log('Limite:', argv.limite);


// let parametros = argv[2];
// let base = parametros.split('=')[1]

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo Creado: ${ archivo }`))
//     .catch(e => console.log(e));