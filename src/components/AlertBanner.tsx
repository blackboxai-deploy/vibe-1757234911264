'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { mockAlerts } from '@/lib/data'

export default function AlertBanner() {
  const [currentAlert, setCurrentAlert] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const urgentAlerts = mockAlerts.filter(alert => alert.severity === 'urgent')

  useEffect(() => {
    if (urgentAlerts.length > 1) {
      const interval = setInterval(() => {
        setCurrentAlert(prev => (prev + 1) % urgentAlerts.length)
      }, 5000)
      return () => clearInterval(interval)
    }
    return undefined
  }, [urgentAlerts.length])

  if (!isVisible || urgentAlerts.length === 0) return null

  const alert = urgentAlerts[currentAlert]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'urgent': return 'bg-red-600'
      case 'warning': return 'bg-orange-500'
      case 'info': return 'bg-blue-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className={`${getSeverityColor(alert.severity)} text-white py-3 px-4 relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      <div className="container mx-auto flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-4 flex-1">
          <div className="animate-bounce">
            <span className="text-2xl">🚨</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <Badge variant="secondary" className="bg-white text-red-600">
                तत्काल अलर्ट
              </Badge>
              <span className="text-sm opacity-90">• {alert.time}</span>
            </div>
            <h3 className="font-bold text-lg">{alert.title}</h3>
            <p className="text-sm opacity-90 line-clamp-1">{alert.description}</p>
            <p className="text-xs opacity-75">📍 {alert.location}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 ml-4">
          {urgentAlerts.length > 1 && (
            <div className="text-xs bg-white/20 px-2 py-1 rounded">
              {currentAlert + 1} / {urgentAlerts.length}
            </div>
          )}
          <Button
            size="sm"
            variant="secondary"
            className="bg-white text-red-600 hover:bg-gray-100"
          >
            विवरण देखें
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="text-white hover:bg-white/20"
            onClick={() => setIsVisible(false)}
          >
            ✕
          </Button>
        </div>
      </div>
    </div>
  )
}