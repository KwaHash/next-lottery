"use client"

import axios from "axios"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import LoadingIndicator from "@/components/loading-indicator"
import { useAuth } from "@/providers/auth-provider"
import { isSameDate } from "@/lib/utils"

const PredictionPage = ({ plan, id }: { plan: string, id: number }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [numbers, setNumbers] = useState<string[]>([])
  const user = useAuth()
  const router = useRouter()

  console.log("numbers => ", numbers)

  useEffect(() => {
    const fetchPrediction = async () => {
      try {
        const { data: { prediction } } = await axios.get(`/api/main/prediction/${id}`)
        setIsLoading(false)
        const { user_id, lottery_numbers, plan: prediction_plan, created_at } = prediction
        if (user_id !== user.user_id || prediction_plan !== plan || !isSameDate(new Date(created_at), new Date())) {
          router.push(`/plan/${plan}`)
        }
        console.log("here -> ", lottery_numbers)
        setNumbers(JSON.parse(lottery_numbers))
      } catch (err) {
        setIsLoading(false)
        if (axios.isAxiosError(err)) {
          // const error = err.response?.data?.error
        }
      }
    }
    fetchPrediction()
  }, [])

  if (isLoading) {
    return <LoadingIndicator />
  }

  return (
    <>
      <div className='w-full max-w-[750px] mx-auto p-3'>
        <h2 className="mt-8 sm:mt-12 text-center text-2xl sm:text-3xl font-bold tracking-wide">下記の組み合わせ通りにご購入下さい</h2>
        <div className="flex flex-col font-bold leading-7 mt-10">
          ※宝くじの購入は個人の責任において行ってください。<br />
          ※20歳未満のご利用は固く禁じます。<br />
          ※当社の情報利用により生じたいかなる損害について、一切の責任は負いかねます。<br />
          ※情報提供の結果に関わらず、返金返品は一切お断りしておりますので、予めご了承したうえでご利用ください。
        </div>
        <div className="flex flex-col gap-2 mt-6 mb-20 w-full border-2 border-black px-4 py-6">
          {numbers.map((number, index) => (
            <p key={index} className="text-base font-bold tracking-wide">
              {`【${String(index + 1).padStart(2, '0')}組目】 ${number}`}
            </p>
          ))}
        </div>
      </div>
    </>
  )
}

export default PredictionPage