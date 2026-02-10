import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "お問合せ | ミリオンゲート",
}

// Force dynamic rendering to avoid static generation issues
export const dynamic = 'force-dynamic'

export default function ContactPage() {
  return (
    <div className="w-full">
      <div className="w-full px-4 sm:px-8 py-8 sm:py-12">
        <article className="w-full px-5 sm:px-10 py-8 sm:py-10">
          <h1 className="text-center text-3xl sm:text-4xl font-bold tracking-wide">お問合せについて</h1>

          <div className="mt-8 flex flex-col items-center">
            <p className="text-center text-base sm:text-lg mb-6">
              下記画像をタップしてください。
            </p>

            <Link 
              href={process.env.NEXT_PUBLIC_LINE_URL!}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full max-w-[1024px] block"
            >
              <Image
                src="/imgs/line.png"
                alt="ミリオンゲート公式LINE"
                width={1024}
                height={1024}
                className="mx-auto"
                priority
              />
            </Link>
          </div>
        </article>
        <div className="mt-6 w-full max-w-[1120px] mx-auto">
          <h2 className="text-center text-xl sm:text-2xl font-bold mb-4">お問合せ先</h2>
          <div className="border-2 border-black px-6 py-8 text-sm sm:text-base font-bold leading-relaxed">
            <p className="leading-8">宛先：株式会社ライジング</p>
            <p className="leading-8">電話番号：{process.env.NEXT_PUBLIC_PHONE_NUMBER}（受付時間:毎日10:00～19:00まで）</p>
            <p className="leading-8">
              公式LINE：
              <Link
                href={process.env.NEXT_PUBLIC_LINE_URL!}
                className="underline text-m-blue hover:text-m-hover-blue"
                target="_blank"
                rel="noopener noreferrer"
              >
                {process.env.NEXT_PUBLIC_LINE_URL}
              </Link>
            </p>
            <p className="leading-8">所在地：{process.env.NEXT_PUBLIC_ADDRESS}</p>
            <p className="leading-8">※お電話か公式LINEよりお問合せ下さい。</p>
          </div>
        </div>
      </div>
    </div>
  )
}