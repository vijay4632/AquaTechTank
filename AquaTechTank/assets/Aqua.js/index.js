const express = require('express');
const bodyParser = require('body-parser');
const { ColorSensor, TemperatureSensor, UltrasonicSensor, InfraredSensor } = require('./sensors');


const app = express();
app.use(bodyParser.json());

app.post('/color-sensor', (req, res) => {
    const colorData = req.body;
    ColorSensor.detectColor(colorData);
    res.sendStatus(200);
});

app.post('/temperature-sensor', (req, res) => {
    const temperatureData = req.body; 
    TemperatureSensor.detectTemperature(temperatureData); 
    res.sendStatus(200); 
});

app.post('/ultrasonic-sensor', (req, res) => {
    const distanceData = req.body; 
    UltrasonicSensor.detectDistance(distanceData); 
    res.sendStatus(200);
});

app.post('/infrared-sensor', (req, res) => {
    const infraredData = req.body; 
    InfraredSensor.detectInfrared(infraredData); 
    res.sendStatus(200);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
