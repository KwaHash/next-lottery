import { withDatabase } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { user_id, user_balance, plan, lottery_numbers } = await req.json()

    await withDatabase(async (db) => {
      await db.query('UPDATE users SET balance = ? WHERE id = ?', [user_balance, user_id])
    })

    const prediction_id = await withDatabase(async (db) => {
      const [result] = await db.query('INSERT INTO predictions (user_id, plan, lottery_numbers) VALUES (?, ?, ?)', [user_id, plan, lottery_numbers])
      return (result as any).insertId
    })

    return NextResponse.json({ prediction_id })
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました。" },
      { status: 500 }
    );
  }
}