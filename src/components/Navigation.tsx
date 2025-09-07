'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'होम', english: 'Home' },
    { href: '/map', label: 'आपदा मैप', english: 'Disaster Map' },
    { href: '/emergency', label: 'आपातकाल', english: 'Emergency', isEmergency: true },
    { href: '/alerts', label: 'अलर्ट', english: 'Alerts' },
    { href: '/resources', label: 'संसाधन', english: 'Resources' },
    { href: '/awareness', label: 'जागरूकता', english: 'Awareness' },
    { href: '/volunteer', label: 'स्वयंसेवक', english: 'Volunteer' },
    { href: '/helplines', label: 'हेल्पलाइन', english: 'Helplines' },
    { href: '/about', label: 'हमारे बारे में', english: 'About' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-red-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">🛡️</span>
            </div>
            <div className="hidden md:block">
              <h1 className="font-bold text-lg text-slate-800">
                भारत आपदा प्रबंधन
              </h1>
              <p className="text-xs text-slate-600">Disaster Management System</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  item.isEmergency
                    ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg animate-pulse'
                    : 'text-slate-700 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                <div className="flex flex-col items-center">
                  <span className="text-xs">{item.label}</span>
                  <span className="text-xs opacity-70">{item.english}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Emergency Button for Mobile */}
          <div className="flex items-center space-x-2">
            <Link href="/emergency" className="lg:hidden">
              <Button 
                size="sm" 
                className="bg-red-600 hover:bg-red-700 text-white animate-pulse shadow-lg"
              >
                🚨 SOS
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="lg:hidden">
                  <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                    <div className="w-6 h-0.5 bg-slate-600"></div>
                    <div className="w-6 h-0.5 bg-slate-600"></div>
                    <div className="w-6 h-0.5 bg-slate-600"></div>
                  </div>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>भारत आपदा प्रबंधन</SheetTitle>
                  <SheetDescription>
                    Disaster Management System Navigation
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col space-y-3 mt-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex flex-col p-3 rounded-lg transition-colors ${
                        item.isEmergency
                          ? 'bg-red-600 text-white shadow-lg'
                          : 'hover:bg-slate-100'
                      }`}
                    >
                      <span className="font-medium">{item.label}</span>
                      <span className="text-sm opacity-70">{item.english}</span>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}