import axios from "axios";

export default axios.create({
    baseURL:'http://api.openweathermap.org/geo/1.0/',
    headers:{
        Authorization:'Bearer 42bed5081194f2c724235481f8d90139'
    }
})