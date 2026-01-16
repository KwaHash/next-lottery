import PurchaseButton from "@/components/main/purchase-button"
import { POINT_PRICES } from "@/lib/constants"

const PointPurchasePage = () => {
  return (
    <div className="w-full px-4 sm:px-8 py-8 sm:py-12">
      <div className="w-full px-5 sm:px-10 py-8 sm:py-10">
        <h1 className="text-center text-3xl sm:text-4xl font-bold tracking-wide">ポイント購入</h1>
        <p className="text-center text-base sm:text-lg mt-4 font-bold">
          クレジットカード・銀行振込
        </p>
        <div className="flex flex-wrap justify-center gap-x-8">
          {POINT_PRICES.map((point) => (
            <PurchaseButton key={point} points={point} linkUrl="#" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PointPurchasePage