import Link from 'next/link'
import Image from 'next/image'

const UsersFaq = () => {
  return (
    <>
      <hr className='my-6 border-2 border-m-gold max-w-[150px] mx-auto' />
      <h2 className='text-4xl sm:text-5xl text-m-gold text-center my-8 font-bold drop-shadow-[1px_1px_1px_rgba(0,0,0,0.3)]'>よくある質問</h2>
      <figure className='w-full max-w-[1024px] mx-auto'>
        <Link href="/faq" className='hover:opacity-80 transition-all duration-500'>
          <Image src="/imgs/faq.png" alt="ミリオンゲート" width={1024} height={1024} className='mx-auto' priority />
        </Link>
      </figure>
    </>
  )
}

export default UsersFaq