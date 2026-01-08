import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function page() {
  return (
    <div className="w-full px-5 sm:px-10 py-8 sm:py-10">
      <h2 className="mt-8 sm:mt-12 text-center text-2xl sm:text-3xl font-bold tracking-wide">当サイトの利用方法</h2>
      <div className="mt-6 w-full max-w-[1120px] mx-auto border-2 border-black p-4 sm:p-6 text-center text-sm sm:text-base font-bold">
        <p className="leading-8">当サイトは宝くじの予想</p>
        <p className="leading-8">を販売しております。</p>
        <p className="leading-8">会員限定ページ内より</p>
        <p className="leading-8">ご希望のプランをご購入いただけます。</p>
        <p className="leading-8">プランをご購入希望の際は</p>
        <p className="leading-8">サイト内利用ポイントをご購入の上、ご参加下さい。</p>
      </div>

      <h2 className="mt-12 sm:mt-16 text-center text-2xl sm:text-3xl font-bold tracking-wide">よくある質問</h2>
      <div className='flex flex-col gap-4 w-full max-w-[1120px] mx-auto mt-6'>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className='w-full bg-m-gold hover:bg-m-hover-gold flex items-center justify-between text-white hover:text-white text-lg font-bold p-4 transition-all duration-500 rounded-none'>
              情報はどうやって買うのですか？＜ここをタップ＞
            </AccordionTrigger>
            <AccordionContent className='flex flex-col gap-6 mt-4 pb-0'>
              <p className="text-base font-medium leading-7">
                会員限定ページ内より、ご購入いただけます。<br />
                ご希望のプランをクリックし、該当日をクリックしてご購入下さい。<br />
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className='w-full bg-m-gold hover:bg-m-hover-gold flex items-center justify-between text-white hover:text-white text-lg font-bold p-4 transition-all duration-500 rounded-none'>
              ポイントはどうやって買うんですか？
            </AccordionTrigger>
            <AccordionContent className='flex flex-col gap-6 mt-4 pb-0'>
              <p className="text-base font-medium leading-7">
                会員限定ページ内<br />↓<br />ポイント購入<br /><br />
                のページよりご購入いただけます。
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className='w-full bg-m-gold hover:bg-m-hover-gold flex items-center justify-between text-white hover:text-white text-lg font-bold p-4 transition-all duration-500 rounded-none'>
              情報は何時から販売開始ですか？
            </AccordionTrigger>
            <AccordionContent className='flex flex-col gap-6 mt-4 pb-0'>
              <p className="text-base font-medium leading-7">
                情報の販売開始はプラン当該日の21時前後を予定しております。<br />
                月曜日のプランは前の週の金曜日夜21時前後に販売開始となります。<br />
                プラン販売開始後は一斉に公式LINEにてお知らせ致します。<br /><br />
                予め、時間を指定しまうと当サイトに特定の時間にアクセスが集中し、すぐにプランが完売になる。<br />
                といった事態が発生してしまうため、この様な販売形式と採用しております。
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className='w-full bg-m-gold hover:bg-m-hover-gold flex items-center justify-between text-white hover:text-white text-lg font-bold p-4 transition-all duration-500 rounded-none'>
              プランの取り置きは出来ますか？
            </AccordionTrigger>
            <AccordionContent className='flex flex-col gap-6 mt-4 pb-0'>
              <p className="text-base font-medium leading-7">
                プランの取り置きは一切行っておりません。<br /><br />
                よろしくお願い申し上げます。
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mt-6 w-full max-w-[1120px] mx-auto border-2 border-black p-4 sm:p-6 text-sm sm:text-base font-bold">
        <p className="leading-8">宝くじの購入は個人の責任において行ってください。</p>
        <p className="leading-8">商品提供を行うにおいて、情報精査、厳選した上での提供を行っておりますが、100%の的中を保証するものでは御座いません。</p>
        <p className="leading-8">当社の情報利用により生じたいかなる損害について、一切の責任は負いかねますのでご了承ください。</p>
        <p className="leading-8">予め、ご了承の上、当サイトをご利用下さい。</p>
      </div>
    </div>
  )
}