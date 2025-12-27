import { randomBytes } from 'crypto'
import { NextResponse } from 'next/server'
import { withDatabase } from "@/lib/db"
import sgMail from "@sendgrid/mail"

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

export async function POST(req: Request) {
  try {
    const { email } = await req.json()
    if (!email) {
      return NextResponse.json({ error: 'メールアドレスは必須です。' }, { status: 400 })
    }

    const user = await withDatabase(async (db) => {
      const [users]: any = await db.query('SELECT id FROM users WHERE email = ?', [email])
      return users.length === 1 ? users[0] : null
    })

    if (!user) {
      return NextResponse.json({ success: true }) // Don't reveal registered/not
    }
    const token = randomBytes(32).toString('hex')
    const expires = new Date(Date.now() + 1000 * 60 * 60) // 1 hour
    const resetUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/reset-password?token=${token}`

    const msg = {
      from: {
        email: process.env.SENDGRID_EMAIL_ADDRESS!,
        name: process.env.SENDGRID_EMAIL_NAME,
      },
      to: email,
      subject: 'パスワードを再設定',
      html: `<p>パスワードの再設定をご希望の場合は、こちらのリンクをクリックしてください。<a href="${resetUrl}">こちら</a><br />なお、こちらのリンクは1回限り有効で、1時間後に無効となりますのでご注意ください。</p>`,
      tracking_settings: {
        click_tracking: {
          enable: false,
        },
      },
    }

    await sgMail.send(msg)
    await withDatabase(async (db) => {
      await db.query('INSERT INTO verification_tokens (user_id, token, expires_at) VALUES (?, ?, ?)', [user.id, token, expires])
    })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'サーバーエラーが発生しました。' }, { status: 500 })
  }
}

