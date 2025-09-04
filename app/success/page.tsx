"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Processing your subscription...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-sm mx-auto flex flex-col items-center justify-center min-h-screen">
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>

          <div className="space-y-3">
            <h1 className="text-2xl font-bold text-green-400">Welcome to GutGuard Pro!</h1>
            <p className="text-gray-300 leading-relaxed">
              Your subscription has been successfully activated. You now have access to all premium features.
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 space-y-2">
            <h3 className="font-medium text-green-400">What's included:</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Unlimited AI health advice</li>
              <li>• Advanced risk trend charts</li>
              <li>• Custom meal plans</li>
              <li>• Daily guidance & long-term care</li>
              <li>• PDF export capabilities</li>
              <li>• Comprehensive stool logging</li>
            </ul>
          </div>

          <div className="space-y-3 w-full">
            <Button
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl"
              onClick={() => (window.location.href = "/")}
            >
              Start Using GutGuard Pro
            </Button>

            {sessionId && <p className="text-xs text-gray-500">Session ID: {sessionId.slice(0, 20)}...</p>}
          </div>
        </div>
      </div>
    </div>
  )
}
