"use client"

import { useRouter } from "next/navigation"
import TimeOut from "@/components/main/time-out"
import { isTimeOut, isToday } from "@/lib/utils"

const DetailBlackPage = ({ date }: { date: string }) => {
  const router = useRouter()
  const isValidDate = isToday(date)
  if (!isValidDate) {
    router.push("/plan/black")
  }

  if (isTimeOut()) {
    return <TimeOut />
  }

  return (
    <>
      <div className='w-full p-2'>
      </div>
    </>
  )
}

export default DetailBlackPage