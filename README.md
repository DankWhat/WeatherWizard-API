# Weather API Documentation

## Overview
The **Weather API** provides current weather data for any location on Earth. It collects and processes weather data from various sources such as global and local weather models, satellites, radars, and a vast network of weather stations. Data is available in **JSON**, **XML**, or **HTML** format.

## API Endpoints

### Current Weather Data
Get the current weather data for a specific location.

**Endpoint:**
https://api.openweathermap.org/data/2.5/weather




**Parameters:**
- `lat`: Latitude of the location
- `lon`: Longitude of the location
- `appid`: Your unique API key

**Optional Parameters:**
- `mode`: Response format (*json*, *xml*, or *html*)
- `units`: Units of measurement (*standard*, *metric*, or *imperial*)
- `lang`: Language for output

### Examples
- **JSON format:** `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`
- **XML format:** `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&mode=xml`
- **Request in French:** `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&lang=fr`

## Response Format
The API response contains various weather parameters including temperature, humidity, wind speed, cloudiness, etc.

### JSON Format Example
```json
{
  "coord": {"lon": 10.99, "lat": 44.34},
  "weather": [{"id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d"}],
  "main": {"temp": 298.48, "feels_like": 298.74, "humidity": 64},
  "wind": {"speed": 0.62},
  "clouds": {"all": 100},
  "rain": {"1h": 3.16},
  "dt": 1661870592,
  "sys": {"country": "IT"},
  "name": "Zocca"
}
```

### XML Formatting Example
```xml
<current>
  <city id="3163858" name="Zocca">
    <coord lon="10.99" lat="44.34"/>
    <country>IT</country>
  </city>
  <temperature value="298.48"/>
  <humidity value="64"/>
  <wind>
    <speed value="0.62"/>
  </wind>
  <clouds value="100"/>
  <rain value="3.16" mode="1h"/>
</current>
```
### Usage
To use the Weather API, sign up on the OpenWeatherMap website to obtain your unique API key. Then, make API requests using the provided endpoints and parameters.

For detailed information on parameters and response fields, refer to the official documentation.

Support
For any issues or inquiries regarding the Weather API, please contact OpenWeatherMap Support.
