"use client"

import { Button } from "@/components/ui/button"
import { XCircle, ArrowLeft } from "lucide-react"

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-sm mx-auto flex flex-col items-center justify-center min-h-screen">
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mx-auto">
            <XCircle className="h-10 w-10 text-gray-400" />
          </div>

          <div className="space-y-3">
            <h1 className="text-2xl font-bold text-gray-300">Payment Cancelled</h1>
            <p className="text-gray-400 leading-relaxed">
              No worries! Your payment was cancelled and you haven't been charged. You can still use GutGuard with our
              free features.
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 space-y-2">
            <h3 className="font-medium text-gray-300">Free features include:</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Basic symptom tracking</li>
              <li>• Limited AI advice (3/week)</li>
              <li>• Simple stool logging</li>
              <li>• Basic health insights</li>
            </ul>
          </div>

          <div className="space-y-3 w-full">
            <Button
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl"
              onClick={() => (window.location.href = "/")}
            >
              Continue with Free Version
            </Button>

            <Button
              variant="outline"
              className="w-full border-gray-600 text-white hover:bg-gray-800 py-3 rounded-xl bg-transparent"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Try Again
            </Button>
          </div>

          <p className="text-xs text-gray-500 leading-relaxed">
            You can upgrade to Pro anytime from the settings menu to unlock all premium features.
          </p>
        </div>
      </div>
    </div>
  )
}
