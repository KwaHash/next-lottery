import { Suspense } from 'react'
import ResetPasswordPage from '@/features/auth/reset-password'
import LoadingIndicator from '@/components/loading-indicator'

export default function page() {
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <ResetPasswordPage />
    </Suspense>
  )
}