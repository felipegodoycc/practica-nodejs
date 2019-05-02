const argv = require('yargs')
                            .options({
                                direccion: {
                                    alias: 'd',
                                    desc: 'Direccion de la ciudad para obtener el clima',
                                    demand: true
                                }
                            })
                            .help()
                            .argv;
                            
const lugar = require('./lugar/lugar')
const clima = require('./lugar/clima')


const getInfo = async (direccion) => {
    try{
        const ciudad = await lugar.getLugarLatLong(direccion);
        // console.log(ciudad);

        const info = await clima.getClima(ciudad);

        console.log(`El clima actual de ${ ciudad.direccion} es ${ info }°C`);
    } catch {
        console.log(`No se pudo obtener informacion de ${direccion}`)
    }

}

getInfo(argv.direccion);