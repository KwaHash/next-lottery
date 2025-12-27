'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter, useSearchParams } from 'next/navigation'
import LoadingIndicator from '@/components/loading-indicator'

const VerifyPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const token = searchParams.get('token')
    if (!token) {
      setError('トークンが無効です。')
      setIsLoading(false)
      return
    }

    const verify = async () => {
      const { data: { error } } = await axios.post('/api/auth/verify', { token })
      if (error) {
        setError(error)
      } else {
        router.push('/login')
      }
      setIsLoading(false)

    }
    verify()
  }, [])

  if (isLoading) {
    return <LoadingIndicator />
  }

  if (error) {
    return (
      <div className="w-full grid place-content-center text-m-red font-semibold text-3xl">
        {error}
      </div>
    )
  }

  return null
}

export default VerifyPage