const express =require("express");
const axios = require('axios');
const  cors= require("cors");
require("dotenv").config();

const app= express();
const PORT=process.env.PORT || 5000;
app.use(cors());

app.get("/weather",async(req,res)=>{
try{
    const city=req.query.city;
    const apiKey= process.env.WEATHER_API_KEY;
    const response= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    res.json(response.data);
}
catch{

    res.status(500).json({ message: 'Error fetching weather data' });
}
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)

});