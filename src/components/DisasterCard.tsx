'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface Disaster {
  id: string
  type: string
  englishType: string
  location: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  affectedPeople: string
  description: string
  status: string
  lastUpdated: string
  icon: string
}

interface DisasterCardProps {
  disaster: Disaster
}

export default function DisasterCard({ disaster }: DisasterCardProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-600'
      case 'high': return 'bg-orange-500'
      case 'medium': return 'bg-yellow-500'
      case 'low': return 'bg-green-500'
      default: return 'bg-gray-500'
    }
  }

  const getSeverityLabel = (severity: string) => {
    switch (severity) {
      case 'critical': return 'अतिगंभीर'
      case 'high': return 'गंभीर'
      case 'medium': return 'मध्यम'
      case 'low': return 'कम'
      default: return 'अज्ञात'
    }
  }

  return (
    <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-red-500">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">{disaster.icon}</span>
            <div>
              <CardTitle className="text-lg">{disaster.type}</CardTitle>
              <CardDescription className="text-sm">
                {disaster.englishType}
              </CardDescription>
            </div>
          </div>
          <Badge 
            className={`${getSeverityColor(disaster.severity)} text-white`}
          >
            {getSeverityLabel(disaster.severity)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <p className="text-sm font-medium text-slate-600 mb-1">📍 स्थान | Location:</p>
          <p className="text-sm text-slate-800">{disaster.location}</p>
        </div>
        
        <div>
          <p className="text-sm font-medium text-slate-600 mb-1">👥 प्रभावित लोग:</p>
          <p className="text-sm text-slate-800">{disaster.affectedPeople}</p>
        </div>

        <div>
          <p className="text-sm font-medium text-slate-600 mb-1">📝 विवरण:</p>
          <p className="text-sm text-slate-700 line-clamp-2">{disaster.description}</p>
        </div>

        <div className="pt-2 border-t">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>स्थिति: {disaster.status}</span>
            <span>अपडेट: {disaster.lastUpdated}</span>
          </div>
        </div>

        <Button variant="outline" size="sm" className="w-full mt-3">
          विवरण देखें | View Details
        </Button>
      </CardContent>
    </Card>
  )
}