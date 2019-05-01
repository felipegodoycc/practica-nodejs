const colors = require('colors');
const argv = require('./config/yargs').argv;
const porHacer = require('./tareas/tareas');

// console.log(argv);

let comando = argv._[0];

switch(comando){

    case 'crear':
        // console.log("Crear tarea...");
        let { descripcion} = porHacer.crear(argv.descripcion);
        console.log(`Tarea ${descripcion} creada!`);
    break;

    case 'listar':
        // console.log("Listar tareas");
        let listado = porHacer.getListado();

        console.log("======== LISTA ========".green);
        for(let tarea of listado){
            let { descripcion, completado} = tarea;
            console.log(`Tarea ${descripcion} => ${completado}`);         
        }
        // console.log(listado);
        
    break;

    case 'actualizar':
        let res = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(res);
    break;

    case 'borrar':
        let resu = porHacer.eliminar(argv.descripcion);
        console.log(resu);        
    break;

    default:
        console.log("Comando desconocido");

}