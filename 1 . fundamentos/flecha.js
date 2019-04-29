// function sumar(a, b) {
//     return a+b;
// }

// let sumar = (a,b) => a+b;

// console.log(sumar(10,20));

// function saludar() {
//     return "Hola mundo";
// }

// let saludarflecha = () => "Hola mundo";

// let saludarnombre = nombre => `Hola ${nombre}`;

// console.log(saludarnombre("felipe"));

let persona = {
    nombre: "Felipe",
    apellido: "Godoy",
    vive: true,
    
    // funcion flecha apunta a global o windows, debe ser funcion normal
    // getNombre: () => {
    //     return `Se llama ${this.nombre} ${this.apellido}`
    // }

    getNombre() {
        return `Se llama ${this.nombre} ${this.apellido}`
    }
}

console.log(persona.getNombre());