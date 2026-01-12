"use client"

import TimeOut from "@/components/main/time-out"
import { isTimeOut } from "@/lib/utils"

const DetailGoldPage = ({ date }: { date: string }) => {
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

export default DetailGoldPage