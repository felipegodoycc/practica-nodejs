let empleados = [{
    id: 1,
    nombre: "felipe"
},{
    id: 2,
    nombre: "constanza"
},{
    id:3,
    nombre: "pepe"
}]

let salarios = [{
    id: 1,
    salario: 1000
},{
    id: 2,
    salario: 3000
}]

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find( empleado => empleado.id === id)

    if(!empleadoDB){
        callback(`No existe un empleado con id ${id}`)
    }else {
        callback(null, empleadoDB)
    }
}

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find( salario => salario.id === empleado.id )

    if(!salarioDB){
        callback(`No existe salario para ${empleado.nombre}`)
    } else {
        data = {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        }
        callback(null, data)
    }
}

getEmpleado(1, (err,empleado) => {
    if(err){
        return console.log(err);
    }
    getSalario(empleado, (err,salario) =>{
        if(err){
            return console.log(err);
        }
        console.log(salario);
    })
})
