'use client'

import Link from 'next/link'
import Image from 'next/image'
import Performance from "@/features/main/performance"
import UsersVoice from "@/components/main/users-voice"
import UsersFaq from "@/components/main/users-faq"
import { FaKey } from "react-icons/fa"
import { FaSignInAlt } from "react-icons/fa";

const NonMemberPage = () => {
  return (
    <div className="w-full bg-white">
      <div className='w-full px-2'>
        <figure className='w-full'>
          <Image src="/imgs/non-member/non-member_01.png" alt="ミリオンゲート" width={1024} height={1024} className='mx-auto' priority />
        </figure>
        <figure className='w-full'>
          <Image src="/imgs/non-member/non-member_02.png" alt="ミリオンゲート" width={1024} height={1024} className='mx-auto' priority />
        </figure>
        <figure className='w-full'>
          <Image src="/imgs/non-member/non-member_03.png" alt="ミリオンゲート" width={1024} height={1024} className='mx-auto' priority />
        </figure>
      </div>
      <div className='w-full px-2'>
        <UsersFaq />
      </div>
      <div className='w-full px-2'>
        <Performance />
      </div>
      <div className='w-full px-2 py-16 bg-black'>
        <UsersVoice />
      </div>
      <div className="w-full flex flex-col items-center my-16">
        <div className="text-2xl font-bold text-black text-center mb-6">会員登録はこちら</div>
        <Link href="/sign-up" className="inline-flex items-center px-8 py-3 bg-m-gold text-white font-bold rounded-lg shadow-md hover:bg-m-hover-gold transition-all duration-500">
          <FaSignInAlt className='text-xl mr-2' />
          <span className='text-xl'>会員登録</span>
        </Link>
      </div>
      <div className="w-full flex flex-col items-center my-16">
        <div className="text-2xl font-bold text-black text-center mb-6">ログインはこちら</div>
        <Link href="/login" className="inline-flex items-center px-8 py-3 bg-m-gold text-white font-bold rounded-lg shadow-md hover:bg-m-hover-gold transition-all duration-500">
          <FaKey className='text-xl mr-2' />
          <span className='text-xl'>ログイン</span>
        </Link>
      </div>
    </div>
  )
}

export default NonMemberPage