'use client'

import { useState } from 'react'
import { Habit } from '@/types/habit'

export default function HabitList() {
  const [habits, setHabits] = useState<Habit[]>([
    {
      id: '1',
      name: 'Daily Meditation',
      frequency: 'daily',
      currentStreak: 7,
      longestStreak: 15,
      createdAt: new Date(),
      completions: []
    },
    {
      id: '2',
      name: 'Exercise',
      frequency: 'daily',
      currentStreak: 3,
      longestStreak: 10,
      createdAt: new Date(),
      completions: []
    }
  ])

  const completeHabit = (habitId: string) => {
    // Implement habit completion logic
  }

  return (
    <div className="space-y-4">
      {habits.map(habit => (
        <div 
          key={habit.id} 
          className="bg-white shadow rounded-lg p-4 flex justify-between items-center"
        >
          <div>
            <h3 className="font-semibold">{habit.name}</h3>
            <p>Current Streak: {habit.currentStreak} days</p>
          </div>
          <button 
            onClick={() => completeHabit(habit.id)}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Complete
          </button>
        </div>
      ))}
    </div>
  )
}