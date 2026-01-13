import Link from "next/link"
import Image from "next/image"
import { isMondayOrThursday, formatJPDate, formatDateUrl } from "@/lib/utils"

const PlanBlackPage = () => {
  const today = new Date()
  const isMonOrThur = isMondayOrThursday(today)
  const dateUrl = formatDateUrl(today)
  return (
    <>
      <div className='w-full p-2 bg-black'>
        <figure className='w-full mt-6'>
          <Image src="/imgs/plan/black-header.png" alt="ミリオンゲート" width={1024} height={1024} className='mx-auto' priority />
        </figure>
        <figure className='w-full'>
          <Image src="/imgs/plan/black-content.png" alt="ミリオンゲート" width={1024} height={1024} className='mx-auto' priority />
        </figure>
        <figure className='w-full'>
          <Image src="/imgs/plan/black-info.png" alt="ミリオンゲート" width={1024} height={1024} className='mx-auto' priority />
        </figure>
      </div>
      <div className="flex flex-col items-center justify-center my-10">
        <p className='text-center text-xl font-bold text-black'>販売中情報</p>
        {isMonOrThur ? (
          <Link href={`/plan/black/${dateUrl}`} className='text-center mt-5 text-lg text-m-blue underline hover:no-underline'>
            {`${formatJPDate(today)}の情報`}
          </Link>
        ) : (
          <p className='text-center mt-5 text-m-red font-bold text-lg'>今日は販売中情報ではありません。</p>
        )}
      </div>
    </>
  )
}

export default PlanBlackPage