// Mock data for disaster management system

export const mockAlerts = [
  {
    id: '1',
    title: 'असम में भीषण बाढ़ की चेतावनी',
    description: 'ब्रह्मपुत्र नदी के जल स्तर में तेज वृद्धि। तत्काल सुरक्षित स्थानों पर जाएं।',
    location: 'असम - काजीरंगा, गुवाहाटी',
    severity: 'urgent' as const,
    time: '2 मिनट पहले',
    type: 'flood'
  },
  {
    id: '2',
    title: 'राजस्थान में हीटवेव अलर्ट',
    description: 'तापमान 48°C तक पहुंचने की संभावना। बाहर न निकलें।',
    location: 'राजस्थान - जैसलमेर, बाड़मेर',
    severity: 'urgent' as const,
    time: '15 मिनट पहले',
    type: 'heatwave'
  },
  {
    id: '3',
    title: 'तमिलनाडु तट पर चक्रवात की चेतावनी',
    description: 'अगले 24 घंटों में तेज चक्रवाती तूफान की संभावना।',
    location: 'तमिलनाडु - चेन्नई, कांचीपुरम',
    severity: 'warning' as const,
    time: '1 घंटा पहले',
    type: 'cyclone'
  }
]

export const mockDisasters = [
  {
    id: '1',
    type: 'बाढ़',
    englishType: 'Flood',
    location: 'असम, बिहार, उत्तर प्रदेश',
    severity: 'critical' as const,
    affectedPeople: '2.5 लाख लोग प्रभावित',
    description: 'मानसून की भारी बारिश के कारण नदियों में बाढ़। कई गांव जलमग्न। राहत कार्य जारी।',
    status: 'सक्रिय आपातकाल',
    lastUpdated: '10 मिनट पहले',
    icon: '🌊'
  },
  {
    id: '2',
    type: 'हीटवेव',
    englishType: 'Heat Wave',
    location: 'राजस्थान, हरियाणा, दिल्ली',
    severity: 'high' as const,
    affectedPeople: '50 लाख लोग प्रभावित',
    description: 'अत्यधिक गर्मी से स्वास्थ्य समस्याएं। तापमान 47°C तक पहुंचा।',
    status: 'निगरानी में',
    lastUpdated: '30 मिनट पहले',
    icon: '🌡️'
  },
  {
    id: '3',
    type: 'चक्रवात',
    englishType: 'Cyclone',
    location: 'ओडिशा, आंध्र प्रदेश',
    severity: 'high' as const,
    affectedPeople: '1.2 लाख लोग पूर्व तैयारी में',
    description: 'समुद्री तूफान का खतरा। तटीय इलाकों से लोगों को हटाया जा रहा है।',
    status: 'पूर्व चेतावनी',
    lastUpdated: '45 मिनट पहले',
    icon: '🌀'
  },
  {
    id: '4',
    type: 'भूकंप',
    englishType: 'Earthquake',
    location: 'हिमाचल प्रदेश, उत्तराखंड',
    severity: 'medium' as const,
    affectedPeople: 'कोई हताहत नहीं',
    description: '4.2 तीव्रता का भूकंप। कोई नुकसान नहीं, केवल कंपन महसूस हुआ।',
    status: 'मॉनिटरिंग',
    lastUpdated: '2 घंटे पहले',
    icon: '🌋'
  },
  {
    id: '5',
    type: 'जंगलों में आग',
    englishType: 'Forest Fire',
    location: 'उत्तराखंड, हिमाचल प्रदेश',
    severity: 'medium' as const,
    affectedPeople: '5000 लोग सुरक्षित स्थानांतरित',
    description: 'वन क्षेत्र में आग लगी। अग्निशमन दल कार्यरत। हवाई सर्वे जारी।',
    status: 'नियंत्रण में',
    lastUpdated: '3 घंटे पहले',
    icon: '🔥'
  },
  {
    id: '6',
    type: 'भूस्खलन',
    englishType: 'Landslide',
    location: 'उत्तराखंड, हिमाचल प्रदेश',
    severity: 'low' as const,
    affectedPeople: 'राजमार्ग बंद, वैकल्पिक मार्ग उपलब्ध',
    description: 'भारी बारिश से पहाड़ी क्षेत्र में मिट्टी खिसकी। सड़क यातायात बाधित।',
    status: 'सफाई कार्य जारी',
    lastUpdated: '5 घंटे पहले',
    icon: '⛰️'
  }
]

export const mockStats = [
  {
    value: '12',
    label: 'सक्रिय आपातकाल',
    englishLabel: 'Active Emergencies'
  },
  {
    value: '2.8L+',
    label: 'लोग बचाए गए',
    englishLabel: 'People Rescued'
  },
  {
    value: '150+',
    label: 'राहत शिविर',
    englishLabel: 'Relief Camps'
  },
  {
    value: '24/7',
    label: 'निगरानी सेवा',
    englishLabel: 'Monitoring Service'
  }
]

export const mockResourceCenters = [
  {
    id: '1',
    name: 'केंद्रीय राहत शिविर',
    englishName: 'Central Relief Camp',
    location: 'गुवाहाटी, असम',
    type: 'shelter',
    capacity: '5000 लोग',
    currentOccupancy: '3200 लोग',
    facilities: ['भोजन', 'चिकित्सा', 'स्वच्छता', 'बच्चों की देखभाल'],
    contact: '+91 9876543210',
    status: 'available',
    coordinates: { lat: 26.1445, lng: 91.7362 }
  },
  {
    id: '2',
    name: 'आपातकालीन अस्पताल',
    englishName: 'Emergency Hospital',
    location: 'पटना, बिहार',
    type: 'medical',
    capacity: '200 बेड',
    currentOccupancy: '150 बेड भरे',
    facilities: ['आपातकालीन सेवा', 'सर्जरी', 'ICU', 'दवाखाना'],
    contact: '+91 9876543211',
    status: 'available',
    coordinates: { lat: 25.5941, lng: 85.1376 }
  },
  {
    id: '3',
    name: 'खाद्य वितरण केंद्र',
    englishName: 'Food Distribution Center',
    location: 'लखनऊ, उत्तर प्रदेश',
    type: 'food',
    capacity: '10000 लोगों के लिए दैनिक',
    currentOccupancy: '7500 लोग सेवित',
    facilities: ['पका हुआ भोजन', 'राशन किट', 'पानी', 'बच्चों का भोजन'],
    contact: '+91 9876543212',
    status: 'available',
    coordinates: { lat: 26.8467, lng: 80.9462 }
  }
]

export const mockVolunteers = [
  {
    id: '1',
    name: 'राज सिंह',
    location: 'दिल्ली',
    skills: ['चिकित्सा सहायता', 'खोज और बचाव'],
    availability: 'available',
    contact: '+91 9876543213'
  },
  {
    id: '2',
    name: 'प्रिया शर्मा',
    location: 'मुंबई',
    skills: ['भोजन वितरण', 'बच्चों की देखभाल'],
    availability: 'busy',
    contact: '+91 9876543214'
  }
]

export const mockHelplines = [
  {
    category: 'राष्ट्रीय आपदा प्रबंधन',
    englishCategory: 'National Disaster Management',
    contacts: [
      {
        name: 'NDRF हेल्पलाइन',
        number: '1078',
        description: '24x7 National Disaster Response Force',
        languages: ['हिंदी', 'English']
      },
      {
        name: 'आपदा प्रबंधन नियंत्रण कक्ष',
        number: '011-26701700',
        description: 'National Disaster Management Authority',
        languages: ['हिंदी', 'English']
      }
    ]
  },
  {
    category: 'आपातकालीन सेवाएं',
    englishCategory: 'Emergency Services',
    contacts: [
      {
        name: 'पुलिस',
        number: '100',
        description: 'Police Emergency',
        languages: ['All Indian Languages']
      },
      {
        name: 'अग्निशमन सेवा',
        number: '101',
        description: 'Fire Emergency',
        languages: ['All Indian Languages']
      },
      {
        name: 'एम्बुलेंस',
        number: '108',
        description: 'Medical Emergency',
        languages: ['All Indian Languages']
      }
    ]
  },
  {
    category: 'राज्य आपदा प्रबंधन',
    englishCategory: 'State Disaster Management',
    contacts: [
      {
        name: 'असम SDRF',
        number: '0361-2237236',
        description: 'Assam State Disaster Response Force',
        languages: ['हिंदी', 'English', 'असमिया']
      },
      {
        name: 'बिहार SDRF',
        number: '0612-2214911',
        description: 'Bihar State Disaster Response Force',
        languages: ['हिंदी', 'English']
      }
    ]
  }
]

export const mockAwarenessContent = [
  {
    id: '1',
    title: 'बाढ़ के दौरान सुरक्षा',
    englishTitle: 'Safety During Floods',
    category: 'flood',
    description: 'बाढ़ के समय क्या करें और क्या न करें - पूरी जानकारी',
    content: 'बाढ़ के दौरान ऊंची जगह पर जाएं, बिजली के उपकरणों से दूर रहें...',
    readTime: '5 मिनट',
    views: '15.2K'
  },
  {
    id: '2',
    title: 'भूकंप से बचाव',
    englishTitle: 'Earthquake Safety',
    category: 'earthquake',
    description: 'भूकंप आने पर तुरंत क्या करें - जीवन बचाने के उपाय',
    content: 'भूकंप के दौरान मेज के नीचे छुपें, दीवार से दूर रहें...',
    readTime: '4 मिनट',
    views: '12.8K'
  },
  {
    id: '3',
    title: 'हीटवेव से बचाव',
    englishTitle: 'Heat Wave Protection',
    category: 'heatwave',
    description: 'गर्मी की लहर में स्वास्थ्य की सुरक्षा कैसे करें',
    content: 'हीटवेव के दौरान छाया में रहें, पानी अधिक पिएं...',
    readTime: '3 मिनट',
    views: '9.5K'
  }
]