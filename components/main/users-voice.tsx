import Image from 'next/image'

const UsersVoice = () => {
  return (
    <>
      <h2 className='text-4xl sm:text-5xl text-m-gold text-center font-bold drop-shadow-[1px_1px_1px_rgba(0,0,0,0.3)]'>会員様の声</h2>
      <div className='flex flex-col gap-6 mt-8'>
        <figure className='w-full'>
          <Image src="/imgs/voice_01.png" alt="ミリオンゲート" width={768} height={768} className='mx-auto' priority />
        </figure>
        <figure className='w-full'>
          <Image src="/imgs/voice_02.png" alt="ミリオンゲート" width={768} height={768} className='mx-auto' priority />
        </figure>
      </div>
    </>
  )
}

export default UsersVoice