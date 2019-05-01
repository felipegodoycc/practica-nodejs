const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
}

const opc_crear = {
    descripcion
}

const opt_actualizar = {
    descripcion,
    completado: {
        default: true,
        alias: 'c',
        desc: "Marca como completado o pendiente la tarea"
    }
}
const argv = require('yargs')
                            .command("crear","Permite crear una tarea por hacer",opc_crear)
                            .command("actualizar","Permite actualizar el estado de una tarea",opt_actualizar)
                            .command("listar","Permite ver la lista de tareas")
                            .command("borrar","Permite borrar una tarea de la lista", opc_crear)
                            .help()
                            .argv;

module.exports = {
    argv
}