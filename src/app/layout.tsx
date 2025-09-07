import type { Metadata } from 'next'
import { Inter, Noto_Sans_Devanagari } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const notoDevanagari = Noto_Sans_Devanagari({ 
  subsets: ['devanagari'],
  variable: '--font-devanagari',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'भारत आपदा प्रबंधन सिस्टम | India Disaster Management System',
  description: 'आपातकालीन सहायता, वास्तविक समय अलर्ट, और आपदा प्रबंधन के लिए व्यापक मंच। Real-time alerts, emergency assistance, and comprehensive disaster management platform for India.',
  keywords: 'disaster management, emergency, India, आपदा प्रबंधन, आपातकाल, बाढ़, भूकंप, चक्रवात',
  authors: [{ name: 'India Disaster Management Team' }],
  openGraph: {
    title: 'भारत आपदा प्रबंधन सिस्टम',
    description: 'आपातकालीन सहायता और आपदा प्रबंधन के लिए व्यापक मंच',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hi" className={`${inter.variable} ${notoDevanagari.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#dc2626" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100`}>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <footer className="bg-slate-900 text-white py-8 mt-12">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-bold text-lg mb-4">आपातकालीन हेल्पलाइन</h3>
                  <div className="space-y-2 text-sm">
                    <p>राष्ट्रीय आपदा: <span className="font-bold text-red-400">1078</span></p>
                    <p>पुलिस: <span className="font-bold text-red-400">100</span></p>
                    <p>अग्निशमन: <span className="font-bold text-red-400">101</span></p>
                    <p>एम्बुलेंस: <span className="font-bold text-red-400">108</span></p>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4">त्वरित लिंक</h3>
                  <div className="space-y-2 text-sm">
                    <p>NDRF</p>
                    <p>मौसम विभाग</p>
                    <p>स्वास्थ्य मंत्रालय</p>
                    <p>गृह मंत्रालय</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4">संपर्क</h3>
                  <div className="space-y-2 text-sm">
                    <p>disaster-helpdesk@gov.in</p>
                    <p>24/7 Support Available</p>
                    <p>Multi-language Support</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-slate-700 mt-8 pt-6 text-center text-sm">
                <p>&copy; 2024 भारत आपदा प्रबंधन सिस्टम। सभी अधिकार सुरक्षित।</p>
              </div>
            </div>
          </footer>
        </div>
        <Toaster />
      </body>
    </html>
  )
}