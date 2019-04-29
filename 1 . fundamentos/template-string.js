let nombre = "Felipe";
let real = "Godoy";

console.log(nombre + " " + real);
console.log(`${nombre} ${real}`); //Nota: Usar backstick

function getNombre(){
    return `${nombre} ${real}`
}

console.log(`El nombre completo es ${ getNombre()}`)