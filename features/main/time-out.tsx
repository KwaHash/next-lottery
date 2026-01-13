import Image from 'next/image'

const TimeOutPage = () => {
  return (
    <div className="w-full max-w-[750px] mx-auto grow h-full flex flex-col p-2">
      <h2 className="mt-8 sm:mt-12 text-2xl sm:text-3xl font-bold tracking-wide">本情報は完売致しました</h2>
      <div className="mt-6 sm:mt-12 w-full mx-auto border-2 border-black p-4 sm:p-6 text-center text-sm sm:text-base font-bold">
        <p className="leading-8">大変申し訳ございません。</p>
        <p className="leading-8">本情報はご好評につきまして、完売致しました。</p>
        <p className="leading-8">本情報にはご参加出来ておりません。</p>
        <p className="leading-8">ミリオネアスタッフ一同、またのご利用心よりお待ち申し上げております。</p>
      </div>
      <figure className='w-full mt-8 mb-12 sm:mb-24'>
        <Image src="/imgs/plan/timeout.png" alt="ミリオンゲート" width={750} height={750} className='mx-auto' priority />
      </figure>
    </div>
  )
}

export default TimeOutPage