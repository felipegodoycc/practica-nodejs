let persona = {
    nombre: "Felipe",
    apellido: "Godoy",
    vive: true,

    getNombre: function(){
        return `Se llama ${this.nombre} ${this.apellido}`
    }
}

console.log(persona.getNombre())

// let nombre = persona.nombre;
// let apellido = persona.apellido;
// let vive = persona.vive;

let { nombre: pnombre, apellido, vive} = persona; // :nombrevariable sirve para evitar choques con otras variables

console.log(`${pnombre} ${apellido} ${vive}`)
