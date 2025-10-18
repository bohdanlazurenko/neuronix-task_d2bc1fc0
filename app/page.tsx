import HabitList from '@/components/habit-list'
import HabitCreator from '@/components/habit-creator'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Streak Master</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Habits</h2>
          <HabitList />
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Create New Habit</h2>
          <HabitCreator />
        </div>
      </div>
    </main>
  )
}