import { Card } from '../../../components/ui/card'

interface ForecastItem {
  dt_txt: string
  dt: number
  main: {
    temp: number
  }
  weather: Array<{
    description: string
    icon: string
  }>
}

interface WeatherResultProps {
  current: any
  forecast: any
}

export default function WeatherResult({ current, forecast }: WeatherResultProps) {
  const { name, weather, main } = current || {}
  const currentIcon = weather?.[0]?.icon
    ? `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
    : null

  const forecastList: ForecastItem[] = forecast?.list || []

  const dailyForecasts = forecastList.filter((item) =>
    item.dt_txt.includes('12:00:00')
  )

  const fiveDaySlice = dailyForecasts.slice(0, 5)

  return (
    <div className="flex flex-col gap-4">
      <Card className="p-4 w-full max-w-sm space-y-2">
        <h2 className="text-xl font-bold">Current Weather in {name}</h2>
        <p className="text-sm">
          <strong>Temperature:</strong> {main?.temp}°C
        </p>
        <p className="text-sm">
          <strong>Condition:</strong> {weather?.[0]?.description}
        </p>
        {currentIcon && (
          <img src={currentIcon} alt={weather[0].description} />
        )}
      </Card>

      <Card className="p-4 w-full max-w-sm space-y-2">
        <h3 className="text-lg font-bold">5-Day Forecast</h3>
        <div className="flex flex-col gap-2">
          {fiveDaySlice.length > 0 ? (
            fiveDaySlice.map((item, index) => {
              const icon = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
              return (
                <div key={index} className="border p-2 rounded">
                  <strong>{item.dt_txt}</strong>
                  <div>Temp: {item.main.temp}°C</div>
                  <div>{item.weather[0].description}</div>
                  <img
                    src={icon}
                    alt={item.weather[0].description}
                    width={50}
                  />
                </div>
              )
            })
          ) : (
            <p>No forecast data found.</p>
          )}
        </div>
      </Card>
    </div>
  )
}
