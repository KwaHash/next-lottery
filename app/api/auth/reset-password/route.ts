import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'
import { withDatabase } from '@/lib/db'

export async function POST(req: Request) {
  try {
    const { userId, password } = await req.json()
    if (!password) {
      return NextResponse.json({ error: 'パスワードは必須です。' }, { status: 400 })
    }
    const hash = await bcrypt.hash(password, 10)
    await withDatabase(async (db) => {
      await db.query('UPDATE users SET password = ? WHERE id = ?', [hash, userId])
    })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'サーバーエラーが発生しました。' }, { status: 500 })
  }
}

