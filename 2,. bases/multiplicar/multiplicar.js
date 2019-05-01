const fs = require('fs');

let crearArchivo = (base) =>{

    return new Promise((resolve, reject) => {
        if(!Number(base)) {
            // throw new Error("El valor introducido no es un numero");
            reject('La base no es un numero')
            return;
        }
        let data = '';

        for(let i=1;i<=10;i++){
            data += `${base} x ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tablas-${base}.txt`, data, (err)=>{
            if(err) reject(err);
            else
                resolve(`tablas-${base}.txt`);
        })
    })
    
}

module.exports = {
    crearArchivo
}