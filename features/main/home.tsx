'use client'

import Image from 'next/image'
import Link from 'next/link'
import Performance from "@/features/main/performance"
import UsersFaq from "@/components/main/users-faq"
import UsersVoice from "@/components/main/users-voice"

const HomePage = () => {
  return (
    <div className="w-full bg-white">
      <div className='w-full px-2 my-20'>
        <hr className='my-6 border-2 border-m-gold max-w-[150px] mx-auto' />
        <p className='text-center font-bold text-2xl mb-10'>ロト6情報(月・木)</p>
        <div className='flex flex-col gap-6 max-w-[1024px] mx-auto'>
          <figure className='w-full'>
            <Link href="/plan/black" className='hover:opacity-80 transition-all duration-500'>
              <Image src="/imgs/black-btn.png" alt="ミリオンゲート" width={1024} height={1024} className='mx-auto' priority />
            </Link>
          </figure>
          <figure className='w-full'>
            <Link href="/plan/gold" className='hover:opacity-80 transition-all duration-500'>
              <Image src="/imgs/gold-btn.png" alt="ミリオンゲート" width={1024} height={1024} className='mx-auto' priority />
            </Link>
          </figure>
          <figure className='w-full'>
            <Link href="/plan/silver" className='hover:opacity-80 transition-all duration-500'>
              <Image src="/imgs/silver-btn.png" alt="ミリオンゲート" width={1024} height={1024} className='mx-auto' priority />
            </Link>
          </figure>
        </div>
      </div>
      <div className='w-full px-2'>
        <UsersFaq />
      </div>
      <div className='w-full px-2'>
        <Performance />
      </div>
      <div className='w-full px-2 pb-8'>
        <UsersVoice />
      </div>
    </div>
  )
}

export default HomePage