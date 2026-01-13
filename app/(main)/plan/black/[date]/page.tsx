import DetailBlackPage from "@/features/main/detail/detail-black"

const DetailBlack = ({ params }: { params: { date: string } }) => {
  const { date } = params

  return (
    <div className="w-full grow h-full flex flex-col bg-white">
      <DetailBlackPage date={date} />
    </div>
  )
}

export default DetailBlack