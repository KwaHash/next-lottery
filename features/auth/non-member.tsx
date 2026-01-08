'use client'

import Image from 'next/image'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FaKey } from "react-icons/fa"
import Link from 'next/link'

const NonMemberPage = () => {
  return (
    <div className="w-full bg-white">
      <div className='w-full px-2'>
        <figure className='w-full'>
          <Image src="/imgs/non-member_01.png" alt="ミリオンゲート" width={1024} height={1024} className='mx-auto' priority />
        </figure>
        <figure className='w-full'>
          <Image src="/imgs/non-member_02.png" alt="ミリオンゲート" width={1024} height={1024} className='mx-auto' priority />
        </figure>
        <figure className='w-full'>
          <Image src="/imgs/non-member_03.png" alt="ミリオンゲート" width={1024} height={1024} className='mx-auto' priority />
        </figure>
      </div>
      <div className='w-full px-2'>
        <h2 className='text-4xl sm:text-5xl text-m-gold text-center mt-12 mb-4 font-bold drop-shadow-[1px_1px_1px_rgba(0,0,0,0.3)]'>よくある質問</h2>
        <figure className='w-full my-10'>
          <Image src="/imgs/faq.png" alt="ミリオンゲート" width={1024} height={1024} className='mx-auto' priority />
        </figure>
      </div>
      <div className='w-full px-2'>
      </div>
      <div className='w-full bg-black px-2 py-10'>
      <h2 className='text-4xl sm:text-5xl text-m-gold text-center mt-12 mb-4 font-bold drop-shadow-[1px_1px_1px_rgba(0,0,0,0.3)]'>当選情報</h2>
        <p className='text-center text-white my-8'>※最新の当選情報を記載しております。</p>
        <div className='w-full max-w-[1024px] mx-auto'>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className='w-full bg-m-gold hover:bg-m-hover-gold flex items-center justify-between text-white hover:text-white text-lg font-bold p-4 transition-all duration-500 rounded-none'>
                ロト6の当選情報＜ここをタップ＞
              </AccordionTrigger>
              <AccordionContent className='flex flex-col gap-6 mt-4 pb-0'>
                <div className="border-2 border-m-gold bg-white overflow-hidden">
                  <div className="flex items-center">
                    <span className="text-xl bg-m-gold text-white px-6 py-1 font-bold tracking-widest">6シルバー</span>
                  </div>
                  <div className="text-center pt-4 pb-12">
                    <div className="text-black font-bold text-xl mb-1">2026年1月5日 (月)　200円<span className='ml-1 font-normal'>⇒</span></div>
                    <div className="text-black text-[17px] font-bold my-4 tracking-widest">ロト6 3等！</div>
                    <div className="text-4xl font-bold text-m-gold mt-8 leading-tight">381,700円</div>
                  </div>
                </div>
                <div className="border-2 border-m-gold bg-white overflow-hidden">
                  <div className="flex items-center">
                    <span className="text-xl bg-m-gold text-white px-6 py-1 font-bold tracking-widest">6シルバー</span>
                  </div>
                  <div className="text-center pt-4 pb-12">
                    <div className="text-black font-bold text-xl mb-1">2026年1月5日 (月)　200円<span className='ml-1 font-normal'>⇒</span></div>
                    <div className="text-black text-[17px] font-bold my-4 tracking-widest">ロト6 2等！</div>
                    <div className="text-4xl font-bold text-m-gold mt-8 leading-tight">15,198,300円</div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <h2 className='text-4xl sm:text-5xl text-m-gold text-center mt-12 mb-4 font-bold drop-shadow-[1px_1px_1px_rgba(0,0,0,0.3)]'>会員様の声</h2>
        <figure className='w-full my-10'>
          <Image src="/imgs/voice_01.png" alt="ミリオンゲート" width={768} height={768} className='mx-auto' priority />
        </figure>
      </div>
      <div className="w-full flex flex-col items-center my-16">
        <div className="text-2xl font-bold text-black text-center mb-6">ログインはこちら</div>
        <Link href="/login" className="inline-flex items-center px-8 py-3 bg-m-gold text-white font-bold rounded-lg shadow-md hover:bg-m-hover-gold transition-all duration-500">
          <FaKey className='text-xl mr-2' />
          <span className='text-xl'>ログイン</span>
        </Link>
      </div>
    <footer className="w-full bg-black text-center px-2 py-10">
      <div className="flex flex-col items-center justify-center space-y-2">
        <p className="text-sm text-white leading-relaxed text-left mb-16">
          ※宝くじの性質上100％の的中はありません。<br />
          ※当サイトの予想は100％的中を保証する物では御座いません。<br />
          ※当サイトは当選金の暴落を防ぐ為に、厳正なる参加枠の制限を設けさせていただいております。<br />
          ※弊社の情報利用により生じた損害において、返金は対応できかねますので予めご了承の上ご利用下さい。
        </p>
        <div className="flex flex-wrap justify-center gap-2 text-sm text-white leading-relaxed">
          <Link href="#" className="underline hover:text-white mr-2">お問合せ先</Link>
          <Link href="#" className="underline hover:text-white mx-2">利用規約</Link>
          <Link href="#" className="underline hover:text-white mx-2">特商引法に基づく表記</Link>
          <Link href="#" className="underline hover:text-white ml-2">プライバシーポリシー</Link>
        </div>
        <p className="text-sm text-white">© 2026 ミリオンゲート All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default NonMemberPage