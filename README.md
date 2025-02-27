# Weather App

A **Next.js 13** (App Router) Weather Application using:

- [Shadcn UI](https://ui.shadcn.com) for React components (Button, Input, Card)
- [Tailwind CSS](https://tailwindcss.com) for utility-first styling
- [OpenWeather API](https://openweathermap.org/api) for weather data
- Local Storage for remembering the last searched city
- Simple Dark Mode toggle (using Tailwind’s `darkMode: ["class"]`)

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [Environment Variables](#environment-variables)
5. [Usage](#usage)

---

## Features

1. **City Search**:
   - Users can enter a city name (e.g., “London”) and get current weather data (temperature, condition, icon).
2. **5-Day Forecast**:
   - Displays a short list of 5 upcoming forecast entries.
3. **Dark Mode**:
   - A toggle button in the top-right corner switches between light and dark themes by toggling the `dark` class on `html`.

---

## Tech Stack

- **Next.js 15** 
- **React 19+** 
- **TypeScript** 
- **Tailwind CSS** 
- **Shadcn UI** 
- **OpenWeather API** 

---

## Getting Started
1. Run npm i in the terminal
2. Create a file named .env.local in the project root: OPENWEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY_HERE Replace with actual Openweather key

## Usage
1. Run npm run dev to start the app
2. Search for city and find the weather!

Enjoy!



