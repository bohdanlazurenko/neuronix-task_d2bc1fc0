import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateStreak(completions: Date[]): number {
  let streak = 0;
  const today = new Date();
  const sortedCompletions = completions.sort((a, b) => b.getTime() - a.getTime());

  for (const completion of sortedCompletions) {
    const dayDiff = Math.floor((today.getTime() - completion.getTime()) / (1000 * 3600 * 24));
    if (dayDiff === streak) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}