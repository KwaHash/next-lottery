import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "利用規約 | ミリオンゲート",
}

export default function TermsOfUsePage() {
  return (
    <div className="w-full">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <article className="w-full bg-white border border-gray-300 shadow-sm px-5 sm:px-10 py-8 sm:py-10">
          <div className="pb-6 border-b border-gray-200">
            <h1 className="text-center text-3xl sm:text-4xl font-bold tracking-wide">利用規約</h1>
            <p className="mt-3 text-sm sm:text-base leading-relaxed">
              本利用規約（以下「本規約」といいます。）は、当社が提供する「ミリオンゲート」（以下「本サービス」といいます。）の利用条件を定めるものです。利用者は、本規約に同意のうえ本サービスを利用するものとします。
            </p>
          </div>

          <div className="mt-8 space-y-8 text-base sm:text-lg leading-relaxed">
            <section className="space-y-2">
              <h2 className="font-bold text-xl sm:text-2xl pl-3 border-l-4 border-m-gold">第一条　目的</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                本規約は、本サービスの提供条件および当社と利用者との間の権利義務関係を定めることを目的とします。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-bold text-xl sm:text-2xl pl-3 border-l-4 border-m-gold">第二条　利用登録および資格</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                利用者は、本サービスの利用にあたり、本規約および当社が別途定めるプライバシーポリシーその他の規定に同意し、当社所定の方法により申込みを行うものとします。当社は、申込み内容を審査のうえ、承諾した場合に利用登録が完了するものとします。
              </p>
              <p className="text-sm sm:text-base leading-relaxed">以下のいずれかに該当する者は、本サービスを利用できません。</p>
              <ol className="text-sm sm:text-base list-decimal pl-10">
                <li>20歳未満の方</li>
                <li>法人</li>
                <li>競馬関係者</li>
                <li>その他、当社が不適切と判断した方</li>
              </ol>
              <p className="text-sm sm:text-base leading-relaxed">
                当社は、利用登録の申込みを承諾しない場合があり、その理由を開示する義務を負いません。
              </p>
              <p className="text-sm sm:text-base leading-relaxed">当社は、利用登録後であっても、以下の場合には利用登録を取り消し、または利用を停止できるものとします。</p>
              <ol className="text-sm sm:text-base list-decimal pl-10">
                <li>申込み内容に虚偽、誤記または記載漏れがあった場合</li>
                <li>料金の支払いがなされない場合</li>
                <li>本規約に違反した場合</li>
                <li>反社会的勢力等に該当する場合、または関与していると当社が判断した場合</li>
                <li>その他、当社が利用継続を不適当と判断した場合</li>
              </ol>
            </section>

            <section className="space-y-2">
              <h2 className="font-bold text-xl sm:text-2xl pl-3 border-l-4 border-m-gold">第三条　運営・利用者の守秘義務</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                当社は、利用者の個人情報等を適切に取り扱い、利用者の承諾なく第三者に開示または提供しません。ただし、法令に基づく場合その他正当な理由がある場合を除きます。
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                利用者は、本サービスの利用により知り得た当社または第三者の機密情報（予想内容、配信内容、システム構成、運営上のノウハウ等を含みますがこれらに限りません。）を、当社の事前承諾なく第三者に開示・漏えいしてはならないものとします。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-bold text-xl sm:text-2xl pl-3 border-l-4 border-m-gold">第四条　自己責任の原則</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                利用者は、自己の責任と費用において本サービスを利用するものとし、利用者が本サービスを通じて得た情報を用いて行う一切の行為およびその結果について、当社は責任を負いません。
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                本サービスの内容は将来の成果を保証するものではありません。利用者は、投資・購入等の判断を自己の責任において行うものとします。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-bold text-xl sm:text-2xl pl-3 border-l-4 border-m-gold">第五条　登録内容の変更</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                利用者は、登録情報に変更があった場合、当社所定の方法により速やかに変更手続きを行うものとします。変更手続の遅延により利用者に不利益が生じた場合でも、当社は責任を負いません。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-bold text-xl sm:text-2xl pl-3 border-l-4 border-m-gold">第六条　当サービスの内容の変更および廃止</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                当社は、利用者に事前に通知することなく、本サービスの内容を変更し、または提供を中断・停止・終了することがあります。これにより利用者に生じた損害について、当社は責任を負いません。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-bold text-xl sm:text-2xl pl-3 border-l-4 border-m-gold">第七条　免責事項</h2>
              <ol className="text-sm sm:text-base list-decimal pl-10">
                <li>当社は、本サービスの完全性、正確性、有用性、継続性等について保証しません。</li>
                <li>通信回線・端末・各種システム障害等により生じた損害について、当社は責任を負いません。</li>
                <li>利用者間または第三者との間で生じた紛争について、当社は関与せず責任を負いません。</li>
              </ol>
            </section>

            <section className="space-y-2">
              <h2 className="font-bold text-xl sm:text-2xl pl-3 border-l-4 border-m-gold">第八条　サービスについて</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                本サービスは、情報提供を目的としたものであり、特定の結果を保証するものではありません。配信内容の性質上、配信の遅延または中断が生じる場合があります。
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                本サービスの提供に必要な通信費・端末費用等は、利用者の負担となります。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-bold text-xl sm:text-2xl pl-3 border-l-4 border-m-gold">第九条　禁止事項</h2>
              <p className="text-sm sm:text-base leading-relaxed">利用者は、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
              <ol className="text-sm sm:text-base list-decimal pl-10">
                <li>法令または公序良俗に違反する行為</li>
                <li>当社または第三者の権利（著作権、商標権、プライバシー等）を侵害する行為</li>
                <li>本サービスの内容（文章・画像・配信情報等）を無断転載、複製、改変、再配布する行為</li>
                <li>不正アクセス、システムへの過度な負荷、または運営を妨害する行為</li>
                <li>虚偽情報の登録、なりすまし、第三者への成りすまし行為</li>
                <li>反社会的勢力等への利益供与その他の関与</li>
                <li>その他、当社が不適切と判断する行為</li>
              </ol>
            </section>

            <section className="space-y-2">
              <h2 className="font-bold text-xl sm:text-2xl pl-3 border-l-4 border-m-gold">第十条　損害賠償</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                利用者が本規約に違反し、当社に損害を与えた場合、利用者は当社に対し、その一切の損害（合理的な弁護士費用を含みます。）を賠償するものとします。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-bold text-xl sm:text-2xl pl-3 border-l-4 border-m-gold">第十一条　協議事項</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                本規約に定めのない事項または本規約の解釈に疑義が生じた場合、当社および利用者は誠意をもって協議し、解決を図るものとします。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-bold text-xl sm:text-2xl pl-3 border-l-4 border-m-gold">第十二条　準拠法</h2>
              <p className="text-sm sm:text-base leading-relaxed">本規約の準拠法は日本法とします。</p>
            </section>

            <section className="space-y-2">
              <h2 className="font-bold text-xl sm:text-2xl pl-3 border-l-4 border-m-gold">第十三条　課金の返還および換金等</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                当社が別途定める場合を除き、利用者が支払った料金の返還は行いません。また、ポイント等の換金・譲渡・質入れ等はできません。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-bold text-xl sm:text-2xl pl-3 border-l-4 border-m-gold">第十四条　知的財産権</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                本サービスに関する著作権、商標権その他一切の知的財産権は当社または正当な権利者に帰属します。利用者は、当社の事前承諾なく、これらを利用してはなりません。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-bold text-xl sm:text-2xl pl-3 border-l-4 border-m-gold">第十五条　管轄裁判所</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                本サービスに関連して当社と利用者との間で紛争が生じた場合、当社の本店所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}

