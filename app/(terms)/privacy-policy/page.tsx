import type { Metadata } from "next"
import CommonFooter from "@/components/footer/common-footer"

export const metadata: Metadata = {
  title: "プライバシーポリシー | ミリオンゲート",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <article className="w-full bg-white border border-gray-300 shadow-sm px-5 sm:px-10 py-8 sm:py-10">
          <div className="pb-6 border-b border-gray-200">
            <h1 className="text-center text-3xl sm:text-4xl font-bold tracking-wide">プライバシーポリシー</h1>
            <p className="mt-3 text-sm sm:text-base leading-relaxed">
              当社は、本サービス「ミリオンゲート」（以下「本サービス」といいます。）における利用者の個人情報の取り扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。
            </p>
          </div>

          <div className="mt-8 space-y-8 text-base sm:text-lg leading-relaxed">
            <section className="space-y-2">
              <h2 className="font-bold text-xl sm:text-2xl pl-3 border-l-4 border-m-gold">第一条　個人情報保護の策定</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                当社は、個人情報の保護に関する法律（以下「個人情報保護法」といいます。）その他関連法令を遵守し、利用者の個人情報を適切に取り扱います。
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                当社は、本ポリシーを定め、個人情報保護に関する方針を明確にし、全従業員に周知徹底を図ります。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-bold text-xl sm:text-2xl pl-3 border-l-4 border-m-gold">第二条　組織的活動</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                当社は、個人情報保護に関する組織体制を整備し、以下の活動を行います。
              </p>
              <ul className="text-sm sm:text-base list-disc pl-10">
                <li>個人情報保護管理者の設置</li>
                <li>個人情報の取り扱いに関する規程の整備</li>
                <li>従業員に対する個人情報保護に関する教育・研修の実施</li>
                <li>個人情報の取り扱いに関する定期的な点検・見直し</li>
                <li>個人情報に関する苦情・相談窓口の設置</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-bold text-xl sm:text-2xl pl-3 border-l-4 border-m-gold">第三条　個人情報の収集</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                当社は、本サービスの提供に必要な範囲で、以下の個人情報を収集します。
              </p>
              <ul className="text-sm sm:text-base list-disc pl-10">
                <li>氏名、生年月日、性別</li>
                <li>住所、電話番号、メールアドレス</li>
                <li>決済情報（クレジットカード情報、銀行口座情報等）</li>
                <li>本サービスの利用状況、利用履歴</li>
                <li>その他、本サービスの提供に必要な情報</li>
              </ul>
              <p className="text-sm sm:text-base leading-relaxed">
                当社は、利用者の同意なく、法令に定める場合を除き、個人情報を収集しません。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-bold text-xl sm:text-2xl pl-3 border-l-4 border-m-gold">第四条　ウェブサイトで収集する情報</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                当社は、本サービスのウェブサイトにおいて、以下の情報を自動的に収集する場合があります。
              </p>
              <ul className="text-sm sm:text-base list-disc pl-10">
                <li>アクセスログ（IPアドレス、アクセス日時、閲覧ページ等）</li>
                <li>Cookie（クッキー）情報</li>
                <li>デバイス情報（OS、ブラウザ種類、画面解像度等）</li>
                <li>お問い合わせ内容</li>
              </ul>
              <p className="text-sm sm:text-base leading-relaxed">
                これらの情報は、本サービスの改善、利用状況の分析、不正利用の防止等の目的で利用されます。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-bold text-xl sm:text-2xl pl-3 border-l-4 border-m-gold">第五条　収集した情報の確認と利用方法</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                利用者は、当社が保有する自己の個人情報について、以下の事項を確認することができます。
              </p>
              <ol className="text-sm sm:text-base list-decimal pl-10">
                <li>個人情報の利用目的</li>
                <li>個人情報の内容</li>
                <li>個人情報の取得経緯</li>
                <li>個人情報の提供先</li>
              </ol>
              <p className="text-sm sm:text-base leading-relaxed">
                個人情報の確認を希望する場合は、当社所定の方法によりお申し出ください。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-bold text-xl sm:text-2xl pl-3 border-l-4 border-m-gold">第六条　目的の範囲内での利用</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                当社は、収集した個人情報を、以下の目的の範囲内でのみ利用します。
              </p>
              <ol className="text-sm sm:text-base list-decimal pl-10">
                <li>本サービスの提供、運営、管理</li>
                <li>利用者への通知、連絡</li>
                <li>料金の請求、決済処理</li>
                <li>本サービスの改善、新サービスの開発</li>
                <li>利用状況の分析、統計データの作成</li>
                <li>不正利用の防止、セキュリティ対策</li>
                <li>その他、上記に関連する業務</li>
              </ol>
            </section>

            <section className="space-y-2">
              <h2 className="font-bold text-xl sm:text-2xl pl-3 border-l-4 border-m-gold">第七条　収集した個人情報の利用</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                当社は、収集した個人情報を、以下の場合に利用します。
              </p>
              <ul className="text-sm sm:text-base list-disc pl-10">
                <li>本サービスの提供に関する通知、連絡を行う場合</li>
                <li>本サービスの内容に関する情報を配信する場合</li>
                <li>利用者からのお問い合わせに対応する場合</li>
                <li>本サービスの改善、新サービスの開発を行う場合</li>
                <li>利用状況の分析、統計データの作成を行う場合</li>
                <li>不正利用の防止、セキュリティ対策を行う場合</li>
                <li>その他、本サービスの提供に必要な場合</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-bold text-xl sm:text-2xl pl-3 border-l-4 border-m-gold">第八条　第三者への提供</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                当社は、以下の場合を除き、利用者の個人情報を第三者に提供しません。
              </p>
              <ol className="text-sm sm:text-base list-decimal pl-10">
                <li>利用者の同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
                <li>本サービスの提供に必要な業務を外部に委託する場合（委託先に対して適切な監督を行います）</li>
              </ol>
              <p className="text-sm sm:text-base leading-relaxed">
                ただし、統計データの作成等により個人を特定できない情報については、この限りではありません。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-bold text-xl sm:text-2xl pl-3 border-l-4 border-m-gold">第九条　個人情報の開示、訂正、利用停止、削除</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                利用者は、当社が保有する自己の個人情報について、以下の請求を行うことができます。
              </p>
              <ol className="text-sm sm:text-base list-decimal pl-10">
                <li>個人情報の開示</li>
                <li>個人情報の訂正、追加、削除</li>
                <li>個人情報の利用停止、消去</li>
                <li>個人情報の第三者への提供の停止</li>
              </ol>
              <p className="text-sm sm:text-base leading-relaxed">
                上記の請求を行う場合は、当社所定の方法によりお申し出ください。当社は、法令に従い、適切に対応いたします。
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                ただし、以下の場合は、請求に応じられない場合があります。
              </p>
              <ul className="text-sm sm:text-base list-disc pl-10">
                <li>法令に違反するおそれがある場合</li>
                <li>他の利用者の生命、身体、財産その他の権利利益を害するおそれがある場合</li>
                <li>本サービスの適切な運営に著しい支障を及ぼすおそれがある場合</li>
                <li>その他、正当な理由がある場合</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-bold text-xl sm:text-2xl pl-3 border-l-4 border-m-gold">第十条　外部サイトへのリンク</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                本サービスのウェブサイトには、外部サイトへのリンクが含まれる場合があります。
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                当社は、外部サイトにおける個人情報の取り扱いについて責任を負いません。外部サイトを利用される場合は、当該サイトのプライバシーポリシー等をご確認ください。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-bold text-xl sm:text-2xl pl-3 border-l-4 border-m-gold">第十一条　個人情報の安全管理</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                当社は、個人情報の漏えい、滅失、毀損の防止その他の個人情報の安全管理のため、必要かつ適切な措置を講じます。
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                当社は、個人情報を取り扱う従業員に対し、個人情報の適切な取り扱いに関する教育・研修を実施し、個人情報の安全管理を徹底します。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-bold text-xl sm:text-2xl pl-3 border-l-4 border-m-gold">第十二条　本ポリシーの変更</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                当社は、法令の変更、本サービスの内容の変更等に伴い、本ポリシーを変更する場合があります。
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                本ポリシーを変更した場合、本サービスのウェブサイト上に掲載することにより、利用者に通知します。
              </p>
            </section>
          </div>
        </article>
      </div>
      <CommonFooter />
    </div>
  )
}

