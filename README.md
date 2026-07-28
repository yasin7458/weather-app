# 🌦️ WeatherInfo — Weather API

A modern and responsive **Weather Application** built using **HTML5, CSS3, and Vanilla JavaScript**.

This project uses **WeatherAPI** to fetch real-time weather information and dynamically display temperature, weather condition, humidity, cloud coverage, wind speed, local time, and weather-based background images.

---

## ✨ Features

* 🌡️ Real-time temperature
* 🌤️ Current weather condition
* 📍 Dynamic city name
* 🕐 Local date and time
* ☁️ Cloud coverage
* 💧 Humidity percentage
* 💨 Wind speed
* 🌧️ Dynamic weather-based background
* 🔎 Search weather by city
* 🏙️ Quick access to predefined cities
* 🖼️ Dynamic weather icon
* 📱 Responsive design
* ⚡ Real-time API data

---

## 🛠️ Technologies Used

| Technology   | Purpose                   |
| ------------ | ------------------------- |
| HTML5        | Website structure         |
| CSS3         | Styling and responsive UI |
| JavaScript   | Application logic         |
| WeatherAPI   | Real-time weather data    |
| Font Awesome | Icons                     |

---

## 📂 Project Structure

```text
Weather-App/
│
├── index.html
├── style.css
├── script.js
│
├── image/
│   ├── sunny.jpg
│   ├── partly-cloudy.jpg
│   ├── cloudy.jpg
│   ├── rain-shower.jpg
│   ├── moderate-rain.jpg
│   ├── heavy-rain.jpg
│   ├── thunder.jpg
│   └── default.jpg
│
└── README.md
```

---

# 🔄 Work Flow

The application works through the following process:

```text
                    ┌──────────────────┐
                    │   User Opens App │
                    └────────┬─────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │ Default City Loaded │
                  │      (Rajkot)       │
                  └──────────┬──────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │   Fetch API     │
                    │ WeatherAPI Call │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │  API Response   │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │   JSON Parsing  │
                    └────────┬────────┘
                             │
                             ▼
                 ┌──────────────────────┐
                 │   Weather Data       │
                 │       Received       │
                 └──────────┬───────────┘
                            │
                            ▼
                 ┌──────────────────────┐
                 │   displayWeather()   │
                 └──────────┬───────────┘
                            │
             ┌──────────────┼──────────────┐
             ▼              ▼              ▼
        Temperature     Humidity       Wind Speed
             │              │              │
             └──────────────┼──────────────┘
                            │
                            ▼
                 ┌──────────────────────┐
                 │ Weather Condition    │
                 │       Code           │
                 └──────────┬───────────┘
                            │
                            ▼
                   ┌────────────────┐
                   │ background()   │
                   │    Function    │
                   └───────┬────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │ Dynamic Background  │
                │  Image is Changed   │
                └─────────────────────┘
```

---

# 🔎 Search Workflow

When the user searches for a city:

```text
User Enters City
       ↓
Input Value is Read
       ↓
getWeather(city)
       ↓
Fetch API Request
       ↓
API Returns JSON Data
       ↓
displayWeather(data)
       ↓
HTML Content is Updated
       ↓
Weather Background is Updated
```

For example:

```text
User enters → Mumbai

        ↓

getWeather("Mumbai")

        ↓

WeatherAPI Request

        ↓

Mumbai Weather Data

        ↓

Temperature + Humidity + Wind + Condition

        ↓

Weather displayed on screen
```

---

# 🏙️ Predefined City Workflow

The application also provides predefined cities.

When the user clicks a city:

```text
User Clicks City
       ↓
Event Listener Triggered
       ↓
e.target.innerText
       ↓
City Name Retrieved
       ↓
getWeather(city)
       ↓
WeatherAPI Request
       ↓
Weather Data Received
       ↓
UI Updated
```

The project uses **Event Delegation** for handling clicks on the predefined cities.

---

# 🌐 API Integration

This project uses **WeatherAPI** to retrieve current weather information.

The application sends a request using JavaScript's `fetch()` method.

```javascript
fetch(API_URL)
```

The API returns data in **JSON format**.

The application then accesses required information from the response.

```javascript
data.location.name
data.location.localtime
data.current.temp_c
data.current.condition.text
data.current.condition.icon
data.current.cloud
data.current.humidity
data.current.wind_kph
data.current.condition.code
```

---

# 🧩 Main JavaScript Functions

### `getWeather(city)`

Responsible for:

* Sending the API request
* Receiving the response
* Converting response into JSON
* Passing the data to `displayWeather()`

```javascript
getWeather("Rajkot");
```

---

### `displayWeather(data)`

Responsible for displaying API data on the webpage.

It updates:

* City
* Time
* Temperature
* Weather condition
* Weather icon
* Cloud coverage
* Humidity
* Wind speed

---

### `background(code)`

Responsible for changing the background according to the weather condition code.

```javascript
background(data.current.condition.code);
```

---

# 🌦️ Dynamic Weather Background

The application changes the background image based on the weather condition code received from the API.

| Condition            | Background          |
| -------------------- | ------------------- |
| ☀️ Clear / Sunny     | `sunny.jpg`         |
| ⛅ Partly Cloudy      | `partly-cloudy.jpg` |
| ☁️ Cloudy            | `cloudy.jpg`        |
| 🌧️ Rain Shower      | `rain-shower.jpg`   |
| 🌦️ Moderate Rain    | `moderate-rain.jpg` |
| 🌧️ Heavy Rain       | `heavy-rain.jpg`    |
| ⛈️ Thunderstorm      | `thunder.jpg`       |
| 🌤️ Other Conditions | `default.jpg`       |

---

# 📊 Weather Information Displayed

The application displays the following information:

### 🌡️ Temperature

Current temperature in Celsius.

```text
31°C
```

### 🌤️ Condition

Current weather condition.

```text
Partly Cloudy
```

### ☁️ Cloud Coverage

Percentage of cloud coverage.

```text
75%
```

### 💧 Humidity

Current humidity percentage.

```text
65%
```

### 💨 Wind

Current wind speed.

```text
15 km/h
```

### 🕐 Local Time

Current local date and time of the selected city.

---

# 🧠 JavaScript Concepts Used

This project helped me practice the following JavaScript concepts:

* Functions
* Variables
* Template Literals
* `if...else if...else`
* Comparison Operators
* Logical Operators
* DOM Manipulation
* `querySelector()`
* `innerText`
* `.src`
* Event Handling
* `onclick`
* `addEventListener()`
* Event Delegation
* Fetch API
* Promises
* `.then()`
* JSON Parsing
* API Integration
* Dynamic Data Rendering

---

# 🎨 UI & CSS Concepts

The project also uses several CSS concepts:

* Flexbox
* CSS Grid
* Responsive Design
* `display: flex`
* `justify-content`
* `align-items`
* Background Images
* Positioning
* Spacing
* Typography
* Hover Effects
* Media Queries
* Glassmorphism / Blur Effects

---

# 📸 Project Preview

Add a screenshot of the project here:

```markdown
![WeatherInfo Preview](image/weather-app.png)
```

---

# ⚙️ How to Run

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the Project

Open the project folder in **VS Code**.

### 3. Add Your API Key

Open:

```text
script.js
```

Add your own WeatherAPI key to the API request.

### 4. Run the Project

You can run the project using:

* VS Code Live Server
* Any local web server

Then open the application in your browser.

---

# 🔐 API Key Security

For learning purposes, the API key can be used in the frontend.

However, API keys should **not be exposed in public repositories** for production applications.

For a production project, the API request should be handled through a backend/server-side environment variable.

---

# 🚀 Future Improvements

The project can be improved further by adding:

* 📍 Current location detection
* 📅 7-day weather forecast
* 🌡️ Celsius / Fahrenheit toggle
* 🌙 Dark / Light mode
* 🌅 Sunrise and sunset information
* 🌧️ Weather animations
* ⚠️ Proper error handling
* 🔄 Loading animation
* 📊 Hourly weather forecast
* 📱 Improved mobile UI

---

# 🎯 Learning Outcome

Through this project, I learned how to:

* Work with external APIs
* Fetch real-time data
* Handle JSON responses
* Use JavaScript Promises
* Manipulate the DOM dynamically
* Handle user events
* Implement Event Delegation
* Create reusable functions
* Build a responsive UI
* Display dynamic API data
* Change UI elements based on API conditions

---

# 👨‍💻 Developer

**Yashin Mithani**

Frontend Developer | JavaScript Learner

---

# ⭐ Support

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is created for **learning and educational purposes**.
