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