import Link from "next/link"

const CommonFooter = () => {
  return (
    <footer className="w-full bg-black text-center px-4 py-10 mt-auto">
      <div className="flex flex-col items-center justify-center space-y-2">
        <p className="text-sm text-white leading-relaxed text-left mb-16">
          ※宝くじの性質上100％の的中はありません。<br />
          ※当サイトの予想は100％的中を保証する物では御座いません。<br />
          ※当サイトは当選金の暴落を防ぐ為に、厳正なる参加枠の制限を設けさせていただいております。<br />
          ※弊社の情報利用により生じた損害において、返金は対応できかねますので予めご了承の上ご利用下さい。
        </p>
        <div className="flex flex-wrap justify-center gap-2 text-sm text-white leading-relaxed">
          <Link href="/contact" className="underline hover:text-white mr-2">お問合せ先</Link>
          <Link href="/terms-of-use" className="underline hover:text-white mx-2">利用規約</Link>
          <Link href="/commercial-law" className="underline hover:text-white mx-2">特商引法に基づく表記</Link>
          <Link href="/privacy-policy" className="underline hover:text-white ml-2">プライバシーポリシー</Link>
        </div>
        <p className="text-sm text-white">© 2026 ミリオンゲート All rights reserved.</p>
      </div>
    </footer>
  )
}

export default CommonFooter