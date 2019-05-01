const { crearArchivo }= require('./multiplicar/multiplicar')



// console.log(module);
let argv = process.argv;
let param = argv[2];
let base = param.split('=')[1];

//console.log(base);

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado ${archivo}`))
    .catch(err => console.log(err))