# Weather API Integration

A simple Python script that integrates with a weather API to provide real-time weather information based on user input (zipcode). The script utilizes the OpenWeatherMap API to fetch weather data.

## Usage

1. **Obtain API Key**: First, sign up on [OpenWeatherMap](https://openweathermap.org/) to obtain an API key.

2. **Set Up Environment**: Clone the repository and navigate to the directory:

    ```bash
    git clone https://github.com/yourusername/weather-api.git
    cd weather-api
    ```

3. **Install Dependencies**: Make sure you have Python installed. Install the required dependencies using pip:

    ```bash
    pip install -r requirements.txt
    ```

4. **Run the Script**: Execute the Python script and provide a zipcode as a command-line argument:

    ```bash
    python weather.py <zipcode>
    ```

    Replace `<zipcode>` with the desired zipcode for weather information.

## Features

- Fetches current weather data (temperature, humidity, wind speed, etc.) for a specified location (zipcode).
- Provides concise and formatted weather information for easy readability.

## Example

```bash
python weather.py 10001
