const fs = require('fs');
const pathDB = './db/data.json'

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(pathDB, data, (err) =>{
        if(err) throw new Error("No se pudo guardar", err);
    })
}

const leerDB = () => {
    try{
        listadoPorHacer = require(`.${pathDB}`);
    } catch(error){
        listadoPorHacer = [];
    }
    
    // console.log(listadoPorHacer);
}
const crear = (descripcion) => {
    leerDB();

    let porhacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porhacer);
    guardarDB();
    return porhacer;
}

const getListado = () => {
    leerDB();

    return listadoPorHacer;
}

const actualizar = (descripcion, completado=true) => {
    leerDB();

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);

    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();

        return true;
    } else {
        return false;
    }
}

const eliminar = (descripcion) => {
    leerDB();

    // let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);
    // if(index >= 0){
    //     listadoPorHacer.splice(index,1);

    //     guardarDB()

    //     return true;
    // } else {
    //     return false;
    // }

    let nuevolistado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if( listadoPorHacer.length === nuevolistado.length){
        return false
    } else{
        listadoPorHacer = nuevolistado;
        guardarDB();
        return true;
    }
}


module.exports = {
    crear,
    getListado,
    actualizar, 
    eliminar
}