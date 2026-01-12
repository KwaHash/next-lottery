import DetailSilverPage from "@/components/main/detail/detail-silver"

const DetailSilver = ({ params }: { params: { date: string } }) => {
  const { date } = params
  
  return (
    <div className="w-full grow h-full flex flex-col bg-white">
      <DetailSilverPage date={date} />
    </div>
  )
}

export default DetailSilver