import { redirect } from "next/navigation"
import DetailSilverPage from "@/components/main/detail/detail-silver"
import { isToday } from "@/lib/utils"

const DetailSilver = ({ params }: { params: { date: string } }) => {
  const { date } = params
  const isValidDate = isToday(date)
  if (!isValidDate) {
    redirect("/plan/silver")
  }
  
  return (
    <div className="w-full grow h-full flex flex-col bg-white">
      <DetailSilverPage date={date} />
    </div>
  )
}

export default DetailSilver