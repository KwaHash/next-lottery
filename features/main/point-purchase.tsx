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
      <div className="mt-20 w-full max-w-[1120px] mx-auto border-2 border-black p-4 sm:p-6 text-sm sm:text-base font-bold">
        <div className="flex flex-col gap-4">
          <h3 className="border-l-4 border-m-gold p-2 text-xl font-bold">決済について</h3>
          <p className="text-base">
            決済代行会社の決済システムを利用しています。
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <h3 className="border-l-4 border-m-gold p-2 text-xl font-bold">返品（返金）について</h3>
          <p className="text-base leading-6">
            デジタルコンテンツという特性上、返品（返金）にはなりません。
            <br />
            予めご了承ください。
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default PointPurchasePage