"use client"

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { isToday , generateLotteryNumbers } from '@/lib/utils'
import { useAuth } from '@/providers/auth-provider'
import { updateConfirmDialog } from '@/stores/dialogs/dialogs.slice'
import { useAppDispatch } from '@/stores/store'

const DetailSilverPage = ({ date }: { date: string }) => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const isValidDate = isToday(date)
  if (!isValidDate) {
    router.push("/plan/silver")
  }

  const necessary_points = Number(process.env.NEXT_PUBLIC_SILVER_POINTS)
  const { user_balance, user_id, updateAuthState } = useAuth()

  const handlePrediction = async () => {
    const lottery_numbers: string[] = generateLotteryNumbers()
    const new_user_balance = user_balance - necessary_points
    dispatch(updateConfirmDialog({
      isOpen: true,
      title: '購入確認',
      description: '本当に購入されますか？',
      onConfirm: async () => {
        try {
          const { data: { prediction_id } } = await axios.post('/api/main/prediction', {
            user_id,
            user_balance: new_user_balance,
            plan: 'silver',
            lottery_numbers: JSON.stringify(lottery_numbers),
          })
          if (prediction_id) {
            updateAuthState({ user_balance: new_user_balance })
            router.push(`/prediction/silver/${prediction_id}`)
          }
        } catch (err) {
          if (axios.isAxiosError(err)) {
            // const error = err.response?.data?.error
          }
        }
      }
    }))
  }

  return (
    <div className="w-full h-full grow p-2 flex flex-col items-center justify-center">
      <div className="w-full max-w-[500px] mx-auto p-8 bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-xl shadow-lg flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-m-gold mb-6 shadow-sm">【LOTO6 | SILVER】購入</h2>
        <div className="w-full flex flex-col gap-4 mb-10">
          <div className="flex justify-between items-center">
            <span className="text-lg text-gray-200 font-semibold">必要ポイント</span>
            <span className="text-xl font-bold text-m-gold tracking-wide">{necessary_points}ポイント</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg text-gray-200 font-semibold">所持ポイント</span>
            <span className="text-xl font-bold text-m-blue tracking-wide">{user_balance}ポイント</span>
          </div>
        </div>
        <Button
          className="w-full h-auto py-3 rounded-md bg-m-gold text-white font-bold text-lg tracking-widest hover:bg-m-hover-gold transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={user_balance < necessary_points}
          onClick={handlePrediction}
        >
          購入する
        </Button>
        {user_balance < necessary_points && (
          <p className="text-sm text-m-red mt-8 text-center font-semibold">
            ポイントが足りません。<br />ポイント購入ページでチャージしてからご購入ください。
          </p>
        )}
      </div>
    </div>
  )
}

export default DetailSilverPage