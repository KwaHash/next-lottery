import { withDatabase } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { isSameDate } from "@/lib/utils";

export async function POST(req: NextRequest) {
  try {
    const { user_id, plan } = await req.json()

    const prediction = await withDatabase(async (db) => {
      const [predictions]: any = await db.query(
        "SELECT * FROM predictions WHERE user_id = ? AND plan = ?",
        [user_id, plan]
      );
      if (!predictions.length) {
        return null;
      }
      const today_prediction = predictions.filter((prediction: any) => isSameDate(new Date(prediction.created_at), new Date()));
      return today_prediction[0] || null;
    });

    return NextResponse.json({ prediction_id: prediction?.id || null })
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました。" },
      { status: 500 }
    );
  }
}