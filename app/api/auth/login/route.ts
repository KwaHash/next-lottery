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
      const [rows]: any = await db.query('SELECT id, password, balance FROM users WHERE email = ?', [email])
      return rows.length === 1 ? rows[0] : null
    })
    if (!user) {
      return NextResponse.json({ error: 'メールアドレスが正しくありません。' }, { status: 401 })
    }
    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      return NextResponse.json({ error: 'パスワードが正しくありません。' }, { status: 401 })
    }
    const accessToken = jwt.sign(
      { userId: user.id, userEmail: user.email },
      process.env.ACCESS_TOKEN_SECRET || "access_token_secret",
      { expiresIn: '1d' }
    )
    const refreshToken = jwt.sign(
      { userId: user.id, userEmail: user.email },
      process.env.REFRESH_TOKEN_SECRET || "refresh_token_secret",
      { expiresIn: '7d' }
    )
    return NextResponse.json({ access_token: accessToken, refresh_token: refreshToken })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'サーバーエラーが発生しました。' }, { status: 500 })
  }
}

