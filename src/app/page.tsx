'use client'

import { useState, useEffect } from 'react'
import WeatherForm from './components/WeatherForm'
import WeatherResult from './components/WeatherResult'

export default function HomePage() {
  const [currentData, setCurrentData] = useState<any>(null)
  const [forecastData, setForecastData] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const lastCity = localStorage.getItem('lastCity')
    if (lastCity) {
      handleSearch(lastCity)
    }
  }, [])


  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
  }

  const handleSearch = async (city: string) => {
    setLoading(true)
    setError(null)
    setCurrentData(null)
    setForecastData(null)

    try {
      const currentRes = await fetch(`/api/weather?city=${city}`)
      const currentJson = await currentRes.json()

      if (currentJson.error) {
        setError(currentJson.error)
        return
      }

      const forecastRes = await fetch(`/api/forecast?city=${city}`)
      const forecastJson = await forecastRes.json()

      if (forecastJson.error) {
        setError(forecastJson.error)
        return
      }

      setCurrentData(currentJson)
      setForecastData(forecastJson)

      localStorage.setItem('lastCity', city)
    } catch (err) {
      setError('Invalid city name.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen p-8 space-y-4">
      <h1 className="text-2xl font-bold">Weather App</h1>

      <WeatherForm onSearch={handleSearch} />

      <button
        onClick={toggleDarkMode}
        className="p-2 border rounded-md absolute top-4 right-4"
      >
        Toggle Dark Mode
      </button>

      {loading && (
        <div className="flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {error && <p className="text-red-500">{error}</p>}

      {(currentData && forecastData) && (
        <WeatherResult
          current={currentData}
          forecast={forecastData}
        />
      )}
    </main>
  )
}
