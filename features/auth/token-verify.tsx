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
    const verify = async () => {
      try {
        await axios.post('/api/auth/verify', { token })
        router.push('/login')
      } catch (err) {
        if (axios.isAxiosError(err)) {
          const error = err.response?.data?.error
          setError(error)
        }
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