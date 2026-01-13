import DetailGoldPage from "@/features/main/detail/detail-gold"

const DetailGold = ({ params }: { params: { date: string } }) => {
  const { date } = params
  
  return (
    <div className="w-full grow h-full flex flex-col bg-white">
      <DetailGoldPage date={date} />
    </div>
  )
}

export default DetailGold