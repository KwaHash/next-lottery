import { randomBytes } from 'crypto'
import bcrypt from 'bcrypt'
import { withDatabase } from "@/lib/db"
import { NextRequest, NextResponse } from "next/server"
import sgMail from "@sendgrid/mail"

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()
    if (!email || !password) {
      return NextResponse.json({ error: 'メールアドレスとパスワードは必須です。' }, { status: 400 })
    }
    // Use scoped database connection with garbage collection
    const users = await withDatabase(async (db) => {
      const [rows]: any = await db.query("SELECT * FROM users WHERE email = ?", [email])
      return rows
    })
    
    if ((users as any[]).length > 0) {
      return NextResponse.json({ error: 'このメールアドレスは既に登録されています。' }, { status: 200 })
    }

    const token = randomBytes(32).toString('hex')
    const expires = new Date(Date.now() + 1000 * 60 * 60 * 24) // 24 hours
    const verifyUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/verify?token=${token}`

    const msg = {
      from: {
        email: process.env.SENDGRID_EMAIL_ADDRESS!,
        name: process.env.SENDGRID_EMAIL_NAME,
      },
      to: email,
      subject: 'メールアドレスの確認',
      html: `<p>メールアドレスの確認のため、以下のリンクをクリックしてください：<a href="${verifyUrl}">こちら</a></p><p>このリンクは24時間で有効期限が切れます。</p>`,
      tracking_settings: {
        click_tracking: {
          enable: false,
        },
      },
    }
    await sgMail.send(msg)
    const hash = await bcrypt.hash(password, 10)
    const userId = await withDatabase(async (db) => {
      const [result] = await db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hash])
      return (result as any).insertId
    })

    await withDatabase(async (db) => {
      await db.query('INSERT INTO verification_tokens (user_id, token, expires_at) VALUES (?, ?, ?)', [userId, token, expires])
    })

    return NextResponse.json({ userId })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
  }
}