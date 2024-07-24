# Weather App

This is a weather forecast application built with Node.js, Express, and React. It allows users to fetch weather information for any city using the OpenWeatherMap API.
## Features

- Fetch current weather data for a specified city.
- Display weather information including temperature and description.

## Project Structure

weather-forcast/
│
├── weather-app-frontend/ # React frontend
│ ├── public/
│ ├── src/
│ ├── package.json
│ └── ...
│
├── weather-app-backend/ # Express backend
│ ├── node_modules/
│ ├── server.js
│ ├── .env
│ ├── package.json
│ └── ...
│
└── README.md # Project documentation


#INSTALLATION


## Prerequisites

- Node.js and npm installed on your machine.

## Setup

### 1. Clone the Repository

git clone https://github.com/your-username/weather-forcast.git
cd weather-forcast

2. Set Up the Server

**Navigate to the server directory:**
cd server

**Install the dependencies:**
npm install
Create a .env file in the server directory and add your OpenWeatherMap API key:

WEATHER_API_KEY=your_api_key_here

**Start the server:**
node server.js
3. Set Up the Client

**Navigate to the client directory:**
cd ../client

**Install the dependencies:**
npm install

**Start the client:**
npm start
The client will automatically open in your default browser at http://localhost:3000.

**Usage**
Enter the name of a city in the input field.
Click the "Get Weather" button.
The current weather data for the specified city will be displayed.
