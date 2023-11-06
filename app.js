const express = require('express');
const {Configuration, IPGeolocation} = require('ip2location-io-nodejs');

const app = express();

app.get('/', (req, res)=>{
    let mykey = "YOUR_API_KEY";
    let config = new Configuration(mykey);
    let ipl = new IPGeolocation(config);
    let myip = req.query.ip;;

    ipl.lookup(myip)
    .then((data) => {
        // reply the data in json format
        res.json({"Country Name": data.country_name,
                    "Region Name": data.region_name,
                    "City Name": data.city_name})
    })
    .catch((error) => {
        // reply the error
        res.status(500).json({'Error found': data})
    });
})

app.listen(9000, ()=>{
    console.log("Server started at port 9000");
})