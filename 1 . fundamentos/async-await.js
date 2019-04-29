//Async transforma la funcion en promesa, cualquier error sera capturado por catch
// let getNombre = async () =>{
//     //throw new Error("No existe usuario");
//     return "Felipe";
// }

// Poniendo async es equivalente a
let getNombre = () => {
    return new Promise( (resolve, reject) => {

        setTimeout(() => {
            resolve("Felipe");
        },3000);
        
    })
}

let saludo = async () =>{

    let nombre = await getNombre();

    return `Hola ${nombre}`
}

saludo().then(mensaje => {
    console.log(mensaje);
})
.catch( e => console.log("Error de async",e));