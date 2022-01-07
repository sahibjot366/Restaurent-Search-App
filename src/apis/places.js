import axios from "axios";

export default axios.create({
    baseURL:'https://api.foursquare.com/v2/venues/',
    headers:{
        Authorization:'Bearer RCEQ1PB2LNVRKKZGGGNKEXMUHQ3ZMZJW0TQ4OE0B5YKATW30'
    }
})