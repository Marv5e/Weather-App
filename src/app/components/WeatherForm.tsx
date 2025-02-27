'use client'

import { useState, FormEvent } from 'react'
import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button'

interface WeatherFormProps {
  onSearch: (city: string) => void
}

export default function WeatherForm({ onSearch }: WeatherFormProps) {
  const [city, setCity] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (city.trim() === '') return
    onSearch(city)
    setCity('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button type="submit" className="py-1 px-4 text-lg">Search</Button>
    </form>
  )
}
