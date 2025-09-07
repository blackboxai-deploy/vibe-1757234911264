'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export default function EmergencyButton() {
  const [isOpen, setIsOpen] = useState(false)
  
  const emergencyNumbers = [
    { name: 'राष्ट्रीय आपदा हेल्पलाइन', number: '1078', description: 'National Disaster Helpline' },
    { name: 'पुलिस', number: '100', description: 'Police Emergency' },
    { name: 'अग्निशमन सेवा', number: '101', description: 'Fire Services' },
    { name: 'एम्बुलेंस', number: '108', description: 'Medical Emergency' },
  ]

  const handleCall = (number: string) => {
    window.open(`tel:${number}`, '_self')
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white shadow-lg animate-pulse font-bold text-lg px-8 py-3"
          >
            🚨 आपातकाल | EMERGENCY
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-red-600 text-xl">
              🚨 आपातकालीन सहायता
            </DialogTitle>
            <DialogDescription>
              तुरंत सहायता के लिए नीचे दिए गए नंबरों पर कॉल करें
              <br />
              Call the numbers below for immediate assistance
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 mt-4">
            {emergencyNumbers.map((contact, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                <div>
                  <p className="font-semibold text-slate-800">{contact.name}</p>
                  <p className="text-sm text-slate-600">{contact.description}</p>
                </div>
                <Button
                  onClick={() => handleCall(contact.number)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg min-w-[80px]"
                >
                  {contact.number}
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t">
            <Link href="/emergency" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-orange-600 hover:bg-orange-700">
                विस्तृत SOS सिस्टम | Detailed SOS System
              </Button>
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}