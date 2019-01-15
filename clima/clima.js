const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=3ba54f3e295326e178775ddadc1f38df`)

    if (resp.data.cod !== 200) {
        throw new Error(`Latitud (${lat}) y/o longitud (${lng}) no valido/s`);
    }

    return {
        temperatura: resp.data.main.temp,
        humedad: resp.data.main.humidity,
        viento: resp.data.wind.speed
    }
}

module.exports = {
    getClima
}