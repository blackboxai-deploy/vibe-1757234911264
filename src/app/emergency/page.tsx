'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'

export default function EmergencyPage() {
  const [sosActive, setSosActive] = useState(false)
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null)
  const [emergencyDetails, setEmergencyDetails] = useState({
    type: '',
    description: '',
    contact: ''
  })

  const emergencyTypes = [
    { id: 'flood', label: 'बाढ़', english: 'Flood', icon: '🌊' },
    { id: 'fire', label: 'आग', english: 'Fire', icon: '🔥' },
    { id: 'earthquake', label: 'भूकंप', english: 'Earthquake', icon: '🌋' },
    { id: 'medical', label: 'चिकित्सा', english: 'Medical', icon: '🚑' },
    { id: 'accident', label: 'दुर्घटना', english: 'Accident', icon: '⚠️' },
    { id: 'other', label: 'अन्य', english: 'Other', icon: '🆘' }
  ]

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
          toast.success('स्थान सफलतापूर्वक प्राप्त हुआ | Location obtained successfully')
        },
        (error) => {
          toast.error('स्थान प्राप्त करने में त्रुटि | Error getting location')
          console.error('Error getting location:', error)
        }
      )
    } else {
      toast.error('आपका ब्राउज़र स्थान सेवा का समर्थन नहीं करता | Your browser does not support location services')
    }
  }

  const handleSendSOS = () => {
    if (!emergencyDetails.type) {
      toast.error('कृपया आपातकाल का प्रकार चुनें | Please select emergency type')
      return
    }

    setSosActive(true)
    
    // Simulate SOS sending
    setTimeout(() => {
      toast.success('🚨 SOS भेजा गया! सहायता 15-20 मिनट में पहुंचेगी | SOS sent! Help will arrive in 15-20 minutes')
    }, 2000)

    // Auto-get location when SOS is activated
    if (!location) {
      handleGetLocation()
    }
  }

  const quickActions = [
    {
      title: 'तत्काल कॉल करें',
      english: 'Call Immediately',
      actions: [
        { name: 'NDRF', number: '1078' },
        { name: 'पुलिस', number: '100' },
        { name: 'अग्निशमन', number: '101' },
        { name: 'एम्बुलेंस', number: '108' }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-600 mb-2">
            🚨 आपातकालीन सहायता
          </h1>
          <p className="text-xl text-slate-600">
            Emergency Assistance System
          </p>
          <p className="text-lg text-slate-500 mt-2">
            तुरंत सहायता के लिए SOS बटन दबाएं | Press SOS button for immediate help
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* SOS System */}
          <Card className="border-red-200 bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-red-600">
                🆘 SOS अनुरोध भेजें
              </CardTitle>
              <CardDescription>
                Send SOS Request - Emergency services will be notified immediately
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Location Status */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-700">📍 आपका स्थान</p>
                    <p className="text-sm text-slate-600">Your Location</p>
                  </div>
                  {location ? (
                    <Badge className="bg-green-600">
                      स्थान मिल गया ✓
                    </Badge>
                  ) : (
                    <Button
                      onClick={handleGetLocation}
                      variant="outline"
                      size="sm"
                    >
                      स्थान प्राप्त करें
                    </Button>
                  )}
                </div>
                {location && (
                  <p className="text-xs text-slate-500 mt-2">
                    {location.lat.toFixed(6)}, {location.lng.toFixed(6)}
                  </p>
                )}
              </div>

              {/* Emergency Type Selection */}
              <div>
                <label className="block font-medium text-slate-700 mb-3">
                  आपातकाल का प्रकार चुनें | Select Emergency Type
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {emergencyTypes.map((type) => (
                    <Button
                      key={type.id}
                      variant={emergencyDetails.type === type.id ? "default" : "outline"}
                      className={`h-auto p-3 ${
                        emergencyDetails.type === type.id 
                          ? 'bg-red-600 hover:bg-red-700' 
                          : 'border-red-200 hover:bg-red-50'
                      }`}
                      onClick={() => setEmergencyDetails(prev => ({ ...prev, type: type.id }))}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-1">{type.icon}</div>
                        <div className="text-sm font-medium">{type.label}</div>
                        <div className="text-xs opacity-70">{type.english}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Emergency Details */}
              <div>
                <label className="block font-medium text-slate-700 mb-2">
                  स्थिति का विवरण | Situation Description
                </label>
                <Textarea
                  placeholder="आपातकाल के बारे में जानकारी दें... / Describe the emergency..."
                  value={emergencyDetails.description}
                  onChange={(e) => setEmergencyDetails(prev => ({ ...prev, description: e.target.value }))}
                  className="resize-none"
                  rows={3}
                />
              </div>

              {/* Contact Number */}
              <div>
                <label className="block font-medium text-slate-700 mb-2">
                  संपर्क नंबर | Contact Number
                </label>
                <Input
                  placeholder="आपका मोबाइल नंबर / Your mobile number"
                  value={emergencyDetails.contact}
                  onChange={(e) => setEmergencyDetails(prev => ({ ...prev, contact: e.target.value }))}
                />
              </div>

              {/* SOS Button */}
              <Button
                onClick={handleSendSOS}
                disabled={sosActive}
                className={`w-full h-16 text-xl font-bold ${
                  sosActive
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-red-600 hover:bg-red-700 animate-pulse'
                }`}
              >
                {sosActive ? (
                  <>
                    ✅ SOS भेजा गया! सहायता आ रही है
                    <br />
                    <span className="text-sm">SOS Sent! Help is coming</span>
                  </>
                ) : (
                  <>
                    🚨 SOS भेजें | SEND SOS
                    <br />
                    <span className="text-sm">तत्काल सहायता के लिए</span>
                  </>
                )}
              </Button>

              {sosActive && (
                <div className="bg-green-50 p-4 rounded-lg animate-pulse">
                  <p className="font-medium text-green-800">
                    🚑 आपका SOS प्राप्त हुआ!
                  </p>
                  <p className="text-sm text-green-600 mt-1">
                    • निकटतम टीम को सूचना भेजी गई
                    <br />
                    • अनुमानित पहुंचने का समय: 15-20 मिनट
                    <br />
                    • ट्रैकिंग ID: SOS{Date.now().toString().slice(-6)}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="space-y-6">
            {/* Emergency Contacts */}
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-600">
                  📞 तत्काल कॉल करें
                </CardTitle>
                <CardDescription>
                  Emergency Helpline Numbers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {quickActions[0].actions.map((contact, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-200">
                      <div>
                        <p className="font-semibold text-slate-800">{contact.name}</p>
                        <p className="text-sm text-slate-600">24x7 Available</p>
                      </div>
                      <Button
                        onClick={() => window.open(`tel:${contact.number}`, '_self')}
                        className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg min-w-[80px]"
                      >
                        {contact.number}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Status Updates */}
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">
                  📊 वर्तमान स्थिति
                </CardTitle>
                <CardDescription>
                  Current Emergency Status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">सक्रिय टीमें</span>
                    <Badge className="bg-green-600">12 Available</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">औसत प्रतिक्रिया समय</span>
                    <Badge className="bg-blue-600">18 Minutes</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">आज के SOS</span>
                    <Badge className="bg-orange-600">47 Handled</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Safety Tips */}
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-600">
                  💡 सुरक्षा सुझाव
                </CardTitle>
                <CardDescription>
                  Emergency Safety Tips
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• शांत रहें और घबराएं नहीं</li>
                  <li>• Stay calm and don't panic</li>
                  <li>• अपना स्थान स्पष्ट रूप से बताएं</li>
                  <li>• Clearly state your location</li>
                  <li>• सुरक्षित स्थान पर जाने का प्रयास करें</li>
                  <li>• Try to move to a safe place</li>
                  <li>• बार-बार SOS न भेजें</li>
                  <li>• Don't send multiple SOS requests</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}