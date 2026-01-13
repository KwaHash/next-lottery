"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { isMondayOrThursday, formatJPDate, formatDateUrl } from "@/lib/utils"
import { isTimeOut } from "@/lib/utils"
import { useAuth } from "@/providers/auth-provider"

const PlanSilverPage = () => {
  const { user_id } = useAuth()
  const [predictionId, setPredictionId] = useState<number | null>(null)

  const today = new Date()
  const isMonOrThur = isMondayOrThursday(today)
  const dateUrl = formatDateUrl(today)

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const { data: { prediction_id } } = await axios.post('/api/main/info', {
          user_id,
          plan: 'silver',
        })
        if (prediction_id) {
          setPredictionId(prediction_id)
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          // const error = err.response?.data?.error
        }
      }
    }
    fetchInfo()
  }, [])

  return (
    <>
      <div className='w-full p-2 bg-black'>
        <figure className='w-full mt-6'>
          <Image src="/imgs/plan/silver-header.png" alt="ミリオンゲート" width={1024} height={1024} className='mx-auto' priority />
        </figure>
        <figure className='w-full'>
          <Image src="/imgs/plan/silver-info.png" alt="ミリオンゲート" width={1024} height={1024} className='mx-auto' priority />
        </figure>
      </div>
      <div className="flex flex-col items-center justify-center my-10">
        <p className='text-center text-xl font-bold text-black'>販売中情報</p>
        {isMonOrThur ? (
          <Link href={isTimeOut() ? '/plan/timeout' : predictionId ? `/prediction/silver/${predictionId}` : `/plan/silver/${dateUrl}`}
            className={`text-center mt-5 text-lg text-m-blue underline hover:cursor-pointer hover:no-underline ${predictionId ? 'cursor-default' : ''}`}
          >
            {`${formatJPDate(today)}の情報`}
          </Link>
        ) : (
          <p className='text-center mt-5 text-m-red font-bold text-lg'>今日は販売中情報ではありません。</p>
        )}
      </div>
    </>
  )
}

export default PlanSilverPage