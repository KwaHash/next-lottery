import { redirect } from "next/navigation"
import DetailGoldPage from "@/components/main/detail/detail-gold"
import { isToday } from "@/lib/utils"

const DetailGold = ({ params }: { params: { date: string } }) => {
  const { date } = params
  const isValidDate = isToday(date)
  if (!isValidDate) {
    redirect("/plan/black")
  }
  
  return (
    <div className="w-full grow h-full flex flex-col bg-white">
      <DetailGoldPage date={date} />
    </div>
  )
}

export default DetailGold