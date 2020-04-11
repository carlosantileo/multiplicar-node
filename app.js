const { crearArchivo } = require('./multiplicar/multiplicar');

//let base = 7;

//console.log(process.argv);

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo Creado: ${ archivo }`))
//     .catch(e => console.log(e));

//pasando parametros desde consola
let argv = process.argv;
let parametros = argv[2];
let base = parametros.split('=')[1]

crearArchivo(base)
    .then(archivo => console.log(`Archivo Creado: ${ archivo }`))
    .catch(e => console.log(e));