**Real-Time Weather Monitoring System**
**Project Description**
This project is a Real-Time Weather Monitoring System built using React and the OpenWeatherMap API 3.0. It allows users to view real-time weather data from major cities, including temperature, humidity, wind speed, and sunrise/sunset times. The system also processes daily weather summaries by calculating average, maximum, and minimum temperatures and identifying the dominant weather condition. Additionally, users can set custom temperature thresholds, triggering alerts when conditions exceed their defined limits.

**Functionalities**
Real-Time Weather Data Fetching<br />
Retrieves live weather data for multiple cities in India at regular intervals (default is every 5 minutes).<br />
Displays key weather information such as current temperature, perceived temperature, humidity, and wind speed.<br />

**Temperature Conversion**
Automatically converts temperature from Kelvin to Celsius (or Fahrenheit, based on user preference).<br />
Daily Weather Summary<br />

**Aggregates daily weather data, including:**
Average temperature<br />
Maximum and minimum temperatures<br />
Dominant weather condition based on the most frequent weather type.<br />
User-Configurable Threshold Alerts<br />

**Users can set temperature thresholds.**
Triggers alerts if the temperature exceeds the threshold for two consecutive updates.<br />
Alerts are displayed in the console and can be extended to other notification systems.<br />
Persistent Storage<br />

**Stores user-defined threshold settings in the browser's localStorage for persistence across sessions**.


**Installation and Setup**
**Prerequisites**
-Ensure that Node.js and npm are installed on your system before setting up the project.

-Clone the repository from GitHub.<br />
-Install the necessary dependencies using npm.<br />
-**Get an API key from OpenWeatherMap by signing up on their website.**<br />
-Add the API key to the project.<br />
-Run the app to start monitoring weather conditions in real-time.<br />
