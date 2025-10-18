export interface Habit {
  id: string;
  name: string;
  description?: string;
  frequency: 'daily' | 'weekly' | 'monthly';
  currentStreak: number;
  longestStreak: number;
  createdAt: Date;
  completions: HabitCompletion[];
}

export interface HabitCompletion {
  id: string;
  habitId: string;
  completedAt: Date;
}