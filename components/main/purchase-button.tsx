import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface PurchaseButtonProps {
  points: number
  linkUrl: string
}

const PurchaseButton = ({ points, linkUrl }: PurchaseButtonProps) => {
  return (
    <div className="flex justify-center mt-8">
      <div className="relative rounded-lg shadow-lg flex flex-col items-center">
        <div className="relative w-full flex justify-center">
          <Image
            src="/imgs/purchase.jpg"
            alt="ポイント購入"
            width={300}
            height={300}
            className="object-cover rounded-md"
          />
          <div className="absolute inset-0 flex flex-col gap-8 items-center justify-center bg-gray-900/80 rounded-md">
            <div className="text-3xl mb-3 drop-shadow glow text-center">
              <span className="block text-4xl font-black text-white">{points}ポイント</span>
              <span className="block text-lg font-bold text-white mt-1 tracking-wide">
                （特価 {(points * 110).toLocaleString()}円）
              </span>
            </div>
            <Button asChild
              className="w-auto h-auto px-16 py-3 rounded-full font-bold text-lg bg-m-gold hover:bg-m-hover-gold text-white transition-all duration-500 shadow-md"
            >
              <Link href={linkUrl}>購入する</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PurchaseButton