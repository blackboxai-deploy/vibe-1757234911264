'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import AlertBanner from '@/components/AlertBanner'
import EmergencyButton from '@/components/EmergencyButton'
import DisasterCard from '@/components/DisasterCard'
import { mockAlerts, mockDisasters, mockStats } from '@/lib/data'

export default function HomePage() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const urgentAlerts = mockAlerts.filter(alert => alert.severity === 'urgent')
  const recentDisasters = mockDisasters.slice(0, 6)

  return (
    <div className="min-h-screen">
      {/* Alert Banner */}
      <AlertBanner />

      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                भारत के लिए
                <span className="block text-red-600">आपदा प्रबंधन सिस्टम</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                वास्तविक समय में अलर्ट, आपातकालीन सहायता, और संसाधन प्रबंधन। 
                आपकी सुरक्षा हमारी प्राथमिकता है।
              </p>
              <p className="text-lg text-slate-500 mb-8">
                Real-time alerts, emergency assistance, and resource management. 
                Your safety is our priority.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <EmergencyButton />
                <Link href="/map">
                  <Button size="lg" variant="outline" className="border-red-200 hover:bg-red-50">
                    🗺️ आपदा मैप देखें
                  </Button>
                </Link>
                <Link href="/alerts">
                  <Button size="lg" variant="outline" className="border-orange-200 hover:bg-orange-50">
                    🚨 अलर्ट देखें
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://placehold.co/600x400?text=India+Disaster+Management+Dashboard+with+real-time+alerts+and+emergency+response+coordination"
                alt="India Disaster Management Dashboard showing real-time alerts, emergency response coordination, and resource management system"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <p className="text-sm text-slate-600">वर्तमान समय</p>
                <p className="text-2xl font-bold text-slate-800">
                  {currentTime.toLocaleString('hi-IN', { 
                    hour: '2-digit', 
                    minute: '2-digit',
                    second: '2-digit'
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {mockStats.map((stat, index) => (
              <Card key={index} className="text-center border-l-4 border-l-red-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-3xl font-bold text-red-600">
                    {stat.value}
                  </CardTitle>
                  <CardDescription className="text-slate-600 font-medium">
                    {stat.label}
                  </CardDescription>
                  <p className="text-sm text-slate-500">{stat.englishLabel}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Urgent Alerts Section */}
      {urgentAlerts.length > 0 && (
        <section className="py-12 bg-red-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              🚨 तत्काल अलर्ट | Urgent Alerts
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {urgentAlerts.map((alert) => (
                <Alert key={alert.id} className="border-red-200 bg-white">
                  <AlertTitle className="flex items-center gap-2">
                    <Badge variant="destructive">अत्यावश्यक</Badge>
                    {alert.title}
                  </AlertTitle>
                  <AlertDescription className="mt-2">
                    <p>{alert.description}</p>
                    <p className="text-sm text-slate-500 mt-2">
                      📍 {alert.location} • ⏰ {alert.time}
                    </p>
                  </AlertDescription>
                </Alert>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link href="/alerts">
                <Button>सभी अलर्ट देखें | View All Alerts</Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Recent Disasters Section */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            📊 वर्तमान आपदा स्थिति | Current Disaster Status
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentDisasters.map((disaster) => (
              <DisasterCard key={disaster.id} disaster={disaster} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/map">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                🗺️ इंटरैक्टिव मैप देखें | View Interactive Map
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            त्वरित सेवाएं | Quick Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/emergency">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer border-red-200">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">🚨</div>
                  <CardTitle className="text-red-600">आपातकाल</CardTitle>
                  <CardDescription>Emergency Help</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/resources">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer border-green-200">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">🏥</div>
                  <CardTitle className="text-green-600">संसाधन</CardTitle>
                  <CardDescription>Relief Resources</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/volunteer">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer border-blue-200">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">🤝</div>
                  <CardTitle className="text-blue-600">स्वयंसेवक</CardTitle>
                  <CardDescription>Volunteer & Donate</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/helplines">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer border-purple-200">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">📞</div>
                  <CardTitle className="text-purple-600">हेल्पलाइन</CardTitle>
                  <CardDescription>Emergency Contacts</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}