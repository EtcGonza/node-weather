const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)

    let data = resp.data.results[0];
    let coors = data.geometry.location;

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${dirreccion}`);
    }

    return {
        direccion: data.formatted_address,
        lat: coors.lng,
        lng: coors.lat
    }
}

module.exports = {
    getLugarLatLng
}