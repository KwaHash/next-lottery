import { withDatabase } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: number } }) {
  try {
    const { id } = params

    const prediction = await withDatabase(async (db) => {
      const [rows]: any = await db.query(
        "SELECT * FROM predictions WHERE id = ?",
        [id]
      );
      return rows[0] || null;
    });

    if (!prediction) {
      return NextResponse.json({ error: "予測が見つかりません。" }, { status: 404 })
    }

    return NextResponse.json({ prediction })
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました。" },
      { status: 500 }
    );
  }
}