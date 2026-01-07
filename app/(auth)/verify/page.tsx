import { Suspense } from 'react'
import VerifyPage from '@/features/auth/token-verify'
import LoadingIndicator from '@/components/loading-indicator'

export default function page() {
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <VerifyPage />
    </Suspense>
  )
}