import requests

def get_weather_by_zip(zip_code, api_key):
    url = f"https://api.openweathermap.org/data/2.5/weather?zip={zip_code}&appid={api_key}&units=metric"
    response = requests.get(url)
    data = response.json()
    return data

def main():
    api_key = '859e94506cf4d5f800eccb20fbc24c94'
    zip_code = input("Enter ZIP code: ")
    weather_data = get_weather_by_zip(zip_code, api_key)

    if weather_data['cod'] == 200:
        print(f"Weather in {weather_data['name']}:")
        print(f"Description: {weather_data['weather'][0]['description']}")
        print(f"Temperature: {weather_data['main']['temp']}°C")
        print(f"Humidity: {weather_data['main']['humidity']}%")
        print(f"Wind Speed: {weather_data['wind']['speed']} m/s")
    else:
        print(f"Error: {weather_data['message']}")

if __name__ == "__main__":
    main()
