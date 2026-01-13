import PredictionPage from "@/features/main/prediction"

const Prediction = ({ params }: { params: { plan: string, id: number } }) => {
  const { plan, id } = params
  
  return (
    <div className="w-full grow h-full flex flex-col bg-white">
      <PredictionPage plan={plan} id={id} />
    </div>
  )
}

export default Prediction