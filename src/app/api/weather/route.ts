import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const city = searchParams.get('city')

  if (!city) {
    return NextResponse.json({ error: 'No city provided.' }, { status: 400 })
  }

  const apiKey = process.env.OPENWEATHER_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'No OpenWeather API key provided.' }, { status: 500 })
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

  try {
    const res = await fetch(url)
    if (!res.ok) {
      return NextResponse.json({ error: 'Invalid city name.' }, { status: 400 })
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
