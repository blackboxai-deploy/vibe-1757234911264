'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { mockDisasters, mockResourceCenters } from '@/lib/data'

export default function DisasterMapPage() {
  const [selectedDisasterType, setSelectedDisasterType] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState<any>(null)
  const [mapCenter, setMapCenter] = useState({ lat: 20.5937, lng: 78.9629 }) // India center
  
  const disasterTypes = [
    { value: 'all', label: 'सभी आपदाएं', english: 'All Disasters' },
    { value: 'flood', label: 'बाढ़', english: 'Floods' },
    { value: 'heatwave', label: 'हीटवेव', english: 'Heat Wave' },
    { value: 'cyclone', label: 'चक्रवात', english: 'Cyclone' },
    { value: 'earthquake', label: 'भूकंप', english: 'Earthquake' },
    { value: 'fire', label: 'आग', english: 'Fire' },
  ]

  const filteredDisasters = selectedDisasterType === 'all' 
    ? mockDisasters 
    : mockDisasters.filter(disaster => disaster.englishType.toLowerCase().includes(selectedDisasterType))

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-600'
      case 'high': return 'bg-orange-500'
      case 'medium': return 'bg-yellow-500'
      case 'low': return 'bg-green-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">
            🗺️ आपदा मैप
          </h1>
          <p className="text-xl text-slate-600">
            Interactive Disaster Map
          </p>
          <p className="text-lg text-slate-500 mt-2">
            वास्तविक समय में आपदाओं की स्थिति और संसाधनों का मैप
          </p>
        </div>

        {/* Filter Controls */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>🔍 मैप फ़िल्टर | Map Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">
                  आपदा प्रकार चुनें
                </label>
                <Select value={selectedDisasterType} onValueChange={setSelectedDisasterType}>
                  <SelectTrigger>
                    <SelectValue placeholder="आपदा प्रकार चुनें" />
                  </SelectTrigger>
                  <SelectContent>
                    {disasterTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label} ({type.english})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-end">
                <Button className="w-full">
                  📍 मेरा स्थान दिखाएं
                </Button>
              </div>
              
              <div className="flex items-end">
                <Button variant="outline" className="w-full">
                  🔄 मैप रीफ्रेश करें
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <Card className="h-[600px]">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>🌍 इंटरैक्टिव मैप</span>
                  <Badge className="bg-green-600">Live Updates</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="h-full">
                <div className="relative w-full h-full bg-slate-100 rounded-lg overflow-hidden">
                  <img 
                    src="https://placehold.co/800x500?text=Interactive+India+Disaster+Map+showing+real-time+flood+cyclone+earthquake+locations+with+emergency+response+centers"
                    alt="Interactive India disaster management map showing real-time locations of floods, cyclones, earthquakes, relief camps, and emergency response centers with color-coded severity levels"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Map Legend */}
                  <div className="absolute top-4 left-4 bg-white/95 p-4 rounded-lg shadow-lg">
                    <h4 className="font-bold text-sm mb-2">मैप लेजेंड</h4>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                        <span>अतिगंभीर</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span>गंभीर</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span>मध्यम</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span>कम</span>
                      </div>
                    </div>
                  </div>

                  {/* Current Status */}
                  <div className="absolute bottom-4 right-4 bg-white/95 p-3 rounded-lg shadow-lg">
                    <p className="text-xs font-medium">वर्तमान दिखाए गए:</p>
                    <p className="text-sm font-bold">{filteredDisasters.length} आपदाएं</p>
                    <p className="text-sm font-bold">{mockResourceCenters.length} राहत केंद्र</p>
                  </div>

                  {/* Quick Controls */}
                  <div className="absolute top-4 right-4 space-y-2">
                    <Button size="sm" className="block">🔍</Button>
                    <Button size="sm" variant="outline" className="block">📍</Button>
                    <Button size="sm" variant="outline" className="block">🏠</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar with disaster info */}
          <div className="space-y-6">
            {/* Active Disasters */}
            <Card>
              <CardHeader>
                <CardTitle>🚨 सक्रिय आपदाएं</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 max-h-80 overflow-y-auto">
                {filteredDisasters.map((disaster) => (
                  <div 
                    key={disaster.id}
                    className="p-3 bg-slate-50 rounded-lg border-l-4 border-l-red-500 cursor-pointer hover:bg-slate-100"
                    onClick={() => setSelectedLocation(disaster)}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{disaster.icon}</span>
                        <span className="font-semibold text-sm">{disaster.type}</span>
                      </div>
                      <Badge className={`${getSeverityColor(disaster.severity)} text-white text-xs`}>
                        {disaster.severity}
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-600 mb-1">📍 {disaster.location}</p>
                    <p className="text-xs text-slate-500">👥 {disaster.affectedPeople}</p>
                    <p className="text-xs text-slate-500">⏰ {disaster.lastUpdated}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Resource Centers */}
            <Card>
              <CardHeader>
                <CardTitle>🏥 राहत केंद्र</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 max-h-80 overflow-y-auto">
                {mockResourceCenters.map((center) => (
                  <div 
                    key={center.id}
                    className="p-3 bg-green-50 rounded-lg border-l-4 border-l-green-500 cursor-pointer hover:bg-green-100"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-sm">{center.name}</span>
                      <Badge className="bg-green-600 text-white text-xs">
                        {center.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-600 mb-1">📍 {center.location}</p>
                    <p className="text-xs text-slate-500">👥 {center.currentOccupancy} / {center.capacity}</p>
                    <p className="text-xs text-slate-500">📞 {center.contact}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {center.facilities.slice(0, 2).map((facility, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {facility}
                        </Badge>
                      ))}
                      {center.facilities.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{center.facilities.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Statistics */}
            <Card>
              <CardHeader>
                <CardTitle>📊 आंकड़े</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">कुल आपदाएं</span>
                    <Badge className="bg-red-600">{mockDisasters.length}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">राहत केंद्र</span>
                    <Badge className="bg-green-600">{mockResourceCenters.length}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">अतिगंभीर स्थितियां</span>
                    <Badge className="bg-red-600">
                      {mockDisasters.filter(d => d.severity === 'critical').length}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">सुरक्षित क्षेत्र</span>
                    <Badge className="bg-blue-600">28 राज्य</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Information */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>ℹ️ मैप की जानकारी | Map Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="font-medium text-slate-600">डेटा स्रोत</p>
                <p>भारत मौसम विभाग, ISRO, NDRF</p>
              </div>
              <div>
                <p className="font-medium text-slate-600">अपडेट आवृत्ति</p>
                <p>प्रत्येक 5 मिनट में</p>
              </div>
              <div>
                <p className="font-medium text-slate-600">कवरेज</p>
                <p>संपूर्ण भारत + सीमावर्ती क्षेत्र</p>
              </div>
              <div>
                <p className="font-medium text-slate-600">भाषा समर्थन</p>
                <p>22 भारतीय भाषाएं</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}