
const express = require('express'); // First party
const axios = require('axios'); // Third party

// File Docstring
/**
 * A simple REST API to display current weather by zip code or address using OpenWeatherMap API.
 */

// Constants
const app = express();
const PORT = 3000;
const OPENWEATHER_API_KEY = '859e94506cf4d5f800eccb20fbc24c94';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';


// Public Static Methods
app.get('/weather/:zipcode', async (req, res) => {
    const zipcode = req.params.zipcode;
    const country = 'us'; // Defaulting to US for simplicity
    const url = `${BASE_URL}?zip=${zipcode},${country}&appid=${OPENWEATHER_API_KEY}`;

    try {
        const response = await axios.get(url);
        res.json({ location: response.data.name, weather: response.data.weather[0].description });
    } catch (error) {
        res.status(500).json({ error: "Error fetching weather data" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
