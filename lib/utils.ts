import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getDayOfWeekJP(date = new Date()): string {
  const days = ['日', '月', '火', '水', '木', '金', '土']
  return days[date.getDay()]
}

export function isMondayOrThursday(date = new Date()): boolean {
  const dayOfWeek = date.getDay()
  return dayOfWeek === 1 || dayOfWeek === 4
}

export function formatJPDate(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}年${month}月${day}日`
}

export function formatDateUrl(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function parseDateUrl(dateFormat: string): { year: number; month: number; date: number } {
  const [year, month, date] = dateFormat.split('-').map(Number)
  return { year, month, date }
}

export function isToday(dateFormat: string): boolean {
  const today = formatDateUrl(new Date())
  return dateFormat === today
}

export function isTimeOut(date = new Date()): boolean {
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  return hours > 18 || (hours === 18 && (minutes > 0 || seconds > 0))
}

function getSecureRandomInt(max: number): number {
  const array = new Uint32Array(1)
  const maxValid = Math.floor(0xFFFFFFFF / max) * max
  
  let value: number
  do {
    crypto.getRandomValues(array)
    value = array[0]
  } while (value >= maxValid)
  
  return value % max
}

function shuffleArray<T>(array: T[]): void {
  for (let i = array.length - 1; i > 0; i--) {
    const j = getSecureRandomInt(i + 1) as number
    [array[i], array[j]] = [array[j], array[i]]
  }
}

export function generateLotteryNumbers(): string[] {
  const sets: string[] = []
  const uniqueSets = new Set<string>()

  while (sets.length < 20) {
    const pool = Array.from({ length: 43 }, (_, i) => i + 1)
    shuffleArray(pool)
    const selected: number[] = []

    for (let j = 0; j < 6; j++) {
      const randomIndex = getSecureRandomInt(pool.length)
      selected.push(pool[randomIndex])
      pool.splice(randomIndex, 1)
    }

    const formatted = selected.sort((a, b) => a - b).join('-')
    
    if (!uniqueSets.has(formatted)) {
      uniqueSets.add(formatted)
      sets.push(formatted)
    }
  }

  return sets
}

export function isSameDate(date1: Date, date2: Date): boolean {
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate()
}