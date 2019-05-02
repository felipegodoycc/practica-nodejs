const axios = require('axios');


const getLugarLatLong = async (direccion) =>{
    direccion = encodeURI(direccion);
    // console.log(direccion);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${direccion}`,
        headers: {
            'X-RapidAPI-Key':'8c887ba5d4msh8fcfd57acf7e6c8p12aa3cjsn74e557d8ab2e'
        }
    })
    const respuesta = await instance.get()

    if( respuesta.data.Results.length === 0){
        throw new Error(`No hay resultado para ${direccion}`)
    } else{
        const data = respuesta.data.Results[0]
        const direccion = data.name;
        const lat = data.lat;
        const lng = data.lon;

        return {
            direccion,
            lat,
            lng
        }
    }

}

module.exports = {
    getLugarLatLong
}