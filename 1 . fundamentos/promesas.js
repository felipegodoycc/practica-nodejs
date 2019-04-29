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

let getEmpleado = (id) => {

    return new Promise( (resolve, reject) => {
        let empleadoDB = empleados.find( empleado => empleado.id === id);

        if(!empleadoDB){
            reject(`No existe un empleado con id ${id}`);
        }else {
            resolve(empleadoDB);
        }
    })    
}
let getSalario = (empleado) => {

    return new Promise( (resolve, reject) => {
        let salarioDB = salarios.find( salario => salario.id === empleado.id);

        if(!salarioDB){
            reject(`No existe salario para ${empleado.nombre}`);
        }
        else {
            data = {
                nombre: empleado.nombre,
                salario: salarioDB.salario
            }
            resolve(data);
        }
    })
}
// getEmpleado(1).then( empleado => {
//     console.log("Empleado de BD", empleado);
//     getSalario(empleado).then( salario =>{
//         console.log(`El salario de ${salario.nombre} es ${salario.salario}`)
//     }, (err) => console.log(err));
// }, (err) => console.log(err));

getEmpleado(3).then( empleado =>{
    return getSalario(empleado);
})
.then( salario => {
    console.log(`El salario de ${salario.nombre} es ${salario.salario}`)
})
.catch( err => console.log(err));