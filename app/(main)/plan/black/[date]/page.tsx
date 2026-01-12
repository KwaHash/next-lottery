import { redirect } from "next/navigation"
import DetailBlackPage from "@/components/main/detail/detail-black"
import { isToday } from "@/lib/utils"

const DetailBlack = ({ params }: { params: { date: string } }) => {
  const { date } = params
  const isValidDate = isToday(date)
  if (!isValidDate) {
    redirect("/plan/black")
  }
  
  return (
    <div className="w-full grow h-full flex flex-col bg-white">
      <DetailBlackPage date={date} />
    </div>
  )
}

export default DetailBlack