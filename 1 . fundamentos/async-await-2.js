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

let getEmpleado = async (id) => {

        let empleadoDB = empleados.find( empleado => empleado.id === id);

        if(!empleadoDB){
            throw new Error(`No existe un empleado con id ${id}`);
        }else {
            return(empleadoDB);
        }  
}

let getSalario = async (empleado) => {
        let salarioDB = salarios.find( salario => salario.id === empleado.id);

        if(!salarioDB){
            throw new Error(`No existe salario para ${empleado.nombre}`);
        }
        else {
            data = {
                nombre: empleado.nombre,
                salario: salarioDB.salario
            }
            return(data);
        }
}

let getInfo = async (id) => {

    let empleado = await getEmpleado(id);
    // console.log(empleado);

    let salario = await getSalario(empleado);
    // console.log(salario);

    return `${empleado.nombre} tiene un salario de ${salario.salario}`

}

getInfo(1)
.then( mensaje => console.log(mensaje))
.catch( err => console.log(err))