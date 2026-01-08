import type { Metadata } from "next"
import CommonFooter from "@/components/footer/common-footer"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | ミリオンゲート",
}

export default function CommercialLawPage() {
  return (
    <div className="w-full">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <article className="w-full bg-white border border-gray-300 shadow-sm px-5 sm:px-10 py-8 sm:py-10">
          <h1 className="text-center text-3xl sm:text-4xl font-bold tracking-wide">特定商取引法に基づく表記</h1>

          <div className="mt-8">
            <Table className="border border-gray-200">
              <TableBody>
                <TableRow className="border-b border-gray-200">
                  <TableCell className="py-4 pr-6 align-top font-bold text-sm sm:text-base w-[40%] sm:w-[35%] border-r border-gray-200">
                    販売業者
                  </TableCell>
                  <TableCell className="py-4 text-sm sm:text-base leading-relaxed">
                    ミリオンゲート運営事務局
                  </TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200">
                  <TableCell className="py-4 pr-6 align-top font-bold text-sm sm:text-base border-r border-gray-200">
                    運営責任者
                  </TableCell>
                  <TableCell className="py-4 text-sm sm:text-base leading-relaxed">
                    別府秀児朗
                  </TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200">
                  <TableCell className="py-4 pr-6 align-top font-bold text-sm sm:text-base border-r border-gray-200">
                    所在地
                  </TableCell>
                  <TableCell className="py-4 text-sm sm:text-base leading-relaxed">
                    東京都中野区中野5-54-4 205
                  </TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200">
                  <TableCell className="py-4 pr-6 align-top font-bold text-sm sm:text-base border-r border-gray-200">
                    電話番号
                  </TableCell>
                  <TableCell className="py-4 text-sm sm:text-base leading-relaxed">
                    
                  </TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200">
                  <TableCell className="py-4 pr-6 align-top font-bold text-sm sm:text-base border-r border-gray-200">
                    電話受付時間
                  </TableCell>
                  <TableCell className="py-4 text-sm sm:text-base leading-relaxed">
                    平日13:00から19:00まで
                  </TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200">
                  <TableCell className="py-4 pr-6 align-top font-bold text-sm sm:text-base border-r border-gray-200">
                    メール受付時間
                  </TableCell>
                  <TableCell className="py-4 text-sm sm:text-base leading-relaxed">
                    
                  </TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200">
                  <TableCell className="py-4 pr-6 align-top font-bold text-sm sm:text-base border-r border-gray-200">
                    問合せ受付メールアドレス
                  </TableCell>
                  <TableCell className="py-4 text-sm sm:text-base leading-relaxed">
                    info@million-gate.online
                  </TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200">
                  <TableCell className="py-4 pr-6 align-top font-bold text-sm sm:text-base border-r border-gray-200">
                    商品の種類
                  </TableCell>
                  <TableCell className="py-4 text-sm sm:text-base leading-relaxed">
                    サイト内利用ポイント
                    <br />
                    （購入後180日間利用可能）
                  </TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200">
                  <TableCell className="py-4 pr-6 align-top font-bold text-sm sm:text-base border-r border-gray-200">
                    販売価格
                  </TableCell>
                  <TableCell className="py-4 text-sm sm:text-base leading-relaxed">
                    1ポイント=100円(税込)
                  </TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200">
                  <TableCell className="py-4 pr-6 align-top font-bold text-sm sm:text-base border-r border-gray-200">
                    提供サービスの価格
                  </TableCell>
                  <TableCell className="py-4 text-sm sm:text-base leading-relaxed">
                    0ポイント~1000ポイント
                  </TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200">
                  <TableCell className="py-4 pr-6 align-top font-bold text-sm sm:text-base border-r border-gray-200">
                    支払方法
                  </TableCell>
                  <TableCell className="py-4 text-sm sm:text-base leading-relaxed">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>クレジットカード決済</li>
                      <li>銀行振込決済</li>
                    </ul>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200">
                  <TableCell className="py-4 pr-6 align-top font-bold text-sm sm:text-base border-r border-gray-200">
                    代金支払時期
                  </TableCell>
                  <TableCell className="py-4 text-sm sm:text-base leading-relaxed">
                    前払い
                  </TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200">
                  <TableCell className="py-4 pr-6 align-top font-bold text-sm sm:text-base border-r border-gray-200">
                    商品の引き渡し期間
                  </TableCell>
                  <TableCell className="py-4 text-sm sm:text-base leading-relaxed">
                    入金確認後即時
                  </TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200">
                  <TableCell className="py-4 pr-6 align-top font-bold text-sm sm:text-base border-r border-gray-200">
                    商品代金(税込)以外の必要料金
                  </TableCell>
                  <TableCell className="py-4 text-sm sm:text-base leading-relaxed">
                    銀行振り込み時の手数料など
                  </TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200">
                  <TableCell className="py-4 pr-6 align-top font-bold text-sm sm:text-base border-r border-gray-200">
                    返品(返金)について
                  </TableCell>
                  <TableCell className="py-4 text-sm sm:text-base leading-relaxed">
                    商品の性質上、返金、返品については一切お受けできません。
                  </TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200">
                  <TableCell className="py-4 pr-6 align-top font-bold text-sm sm:text-base border-r border-gray-200">
                    退会方法
                  </TableCell>
                  <TableCell className="py-4 text-sm sm:text-base leading-relaxed">
                    メールにてお申し出ください。
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </article>
      </div>
      <CommonFooter />
    </div>
  )
}
