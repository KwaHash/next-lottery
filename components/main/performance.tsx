import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const Performance = () => {
  return (
    <>
      <h2 className='text-4xl sm:text-5xl text-m-gold text-center mt-20 mb-2 font-bold drop-shadow-[1px_1px_1px_rgba(0,0,0,0.3)]'>当選情報</h2>
      <p className='text-center my-8'>※最新の当選情報を記載しております。</p>
      <div className='w-full max-w-[1024px] mx-auto mb-16'>
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
    </>
  )
}

export default Performance