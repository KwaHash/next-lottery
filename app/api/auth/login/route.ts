import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'
import { withDatabase } from "@/lib/db"

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()
    if (!email || !password) {
      return NextResponse.json({ error: 'メールアドレスとパスワードは必須です。' }, { status: 400 })
    }

    const user = await withDatabase(async (db) => {
      const [rows]: any = await db.query('SELECT id, password, is_verified FROM users WHERE email = ?', [email])
      return rows.length === 1 ? rows[0] : null
    })
    if (!user) {
      return NextResponse.json({ error: 'メールアドレスが登録されていません。' }, { status: 401 })
    }
    if (!user.is_verified) {
      return NextResponse.json({ error: 'メールアドレスが確認されていません。' }, { status: 403 })
    }
    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      return NextResponse.json({ error: 'パスワードが正しくありません。' }, { status: 401 })
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '7d' })
    return NextResponse.json({ token, userId: user.id })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'サーバーエラーが発生しました。' }, { status: 500 })
  }
}

