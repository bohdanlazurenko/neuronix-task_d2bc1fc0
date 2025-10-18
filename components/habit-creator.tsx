'use client'

import { useState } from 'react'
import { Habit } from '@/types/habit'

export default function HabitCreator() {
  const [habitName, setHabitName] = useState('')
  const [frequency, setFrequency] = useState<Habit['frequency']>('daily')

  const createHabit = () => {
    // Implement habit creation logic
    if (habitName.trim()) {
      console.log('Creating habit:', { name: habitName, frequency })
      // Reset form
      setHabitName('')
    }
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <input 
        type="text"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="Enter habit name"
        className="w-full border p-2 rounded mb-4"
      />
      
      <select 
        value={frequency}
        onChange={(e) => setFrequency(e.target.value as Habit['frequency'])}
        className="w-full border p-2 rounded mb-4"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
      
      <button 
        onClick={createHabit}
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        Create Habit
      </button>
    </div>
  )
}