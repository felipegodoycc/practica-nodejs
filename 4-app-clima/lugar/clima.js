const axios = require('axios');

const getClima = async (data) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ data.lat }&lon=${ data.lng }&APPID=064525c66dd23dd428422514ddd0bbca&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}