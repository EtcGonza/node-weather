const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let climaLoc = await clima.getClima(coors.lat, coors.lng);

        return `La temperatura en ${coors.direccion} es de ${climaLoc.temperatura}, una humedad de ${climaLoc.humedad} y un viento de ${climaLoc.viento}`;
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

// http://api.openweathermap.org/data/2.5/weather?lat=-58.3815591&lon=-34.6036844&units=metric&appid=3ba54f3e295326e178775ddadc1f38df
// https: //maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM


// AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM
// AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ
// AIzaSyA5mjCwx1TRLuBAjwQw84WE6h5ErSe7Uj8
// AIzaSyCroCERuudf2z02rCrVa6DTkeeneQuq8TA
// AIzaSyBkDYSVRVtQ6P2mf2Xrq0VBjps8GEcWsLU
// AIzaSyAu2rb0mobiznVJnJd6bVb5Bn2WsuXP2QI
// AIzaSyAZ7zantyAHnuNFtheMlJY1VvkRBEjvw9Y
// AIzaSyDSPDpkFznGgzzBSsYvTq_sj0T0QCHRgwM
// AIzaSyD4YFaT5DvwhhhqMpDP2pBInoG8BTzA9JY
// AIzaSyAbPC1F9pWeD70Ny8PHcjguPffSLhT-YF8