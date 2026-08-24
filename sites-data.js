// Comprehensive Data for IndiaDarshnam 2.0
// Categories: spiritual, mountain, trek, heritage, wildlife

export const CATEGORIES = [
  { id: 'all', label: 'All Destinations', icon: '✨', color: '#f4a340' },
  { id: 'spiritual', label: 'Spiritual & Mandir', icon: '🕉️', color: '#FF7A00' },
  { id: 'mountain', label: 'Hills & Mountains', icon: '🏔️', color: '#00B4D8' },
  { id: 'trek', label: 'Trekking & Trails', icon: '🥾', color: '#2EC4B6' },
  { id: 'heritage', label: 'Forts & UNESCO', icon: '🏰', color: '#E71D36' },
  { id: 'wildlife', label: 'Nature & Wildlife', icon: '🌿', color: '#70E000' }
];

export const CIRCUITS = [
  {
    id: 'chardham-uk',
    title: 'Uttarakhand Char Dham Yatra',
    category: 'spiritual',
    badge: 'Holy Yatra',
    duration: '10-12 Days',
    distance: '1,450 km',
    description: 'The supreme Himalayan pilgrimage covering Yamunotri, Gangotri, Kedarnath, and Badrinath.',
    sites: [101, 102, 103, 104],
    polyline: [
      [30.0869, 78.2676], // Rishikesh
      [30.9992, 78.4604], // Yamunotri
      [30.9947, 78.9398], // Gangotri
      [30.7352, 79.0669], // Kedarnath
      [30.7433, 79.4938]  // Badrinath
    ]
  },
  {
    id: '12-jyotirlinga-north',
    title: 'Northern Jyotirlinga Circuit',
    category: 'spiritual',
    badge: 'Divine Shiva Trail',
    duration: '7-9 Days',
    distance: '1,820 km',
    description: 'Sacred Jyotirlinga pilgrimage connecting Kashi Vishwanath, Mahakaleshwar, Omkareshwar, and Kedarnath.',
    sites: [103, 105, 106, 107],
    polyline: [
      [25.3109, 83.0107], // Kashi Vishwanath, Varanasi
      [23.1827, 75.7682], // Mahakaleshwar, Ujjain
      [22.2464, 76.1517], // Omkareshwar
      [30.7352, 79.0669]  // Kedarnath
    ]
  },
  {
    id: 'himachal-mountain-loop',
    title: 'Himachal High Altitude Mountain Loop',
    category: 'mountain',
    badge: 'Scenic Roadtrip',
    duration: '6-8 Days',
    distance: '950 km',
    description: 'Traverse Shimla, Kullu Valley, Manali, Rohtang, and the spiritual tranquility of Dharamshala.',
    sites: [201, 202, 203, 301],
    polyline: [
      [31.1048, 77.1734], // Shimla
      [32.2432, 77.1892], // Manali
      [32.3716, 77.2466], // Rohtang / Solang
      [32.2190, 76.3234]  // Dharamshala
    ]
  },
  {
    id: 'chola-tamil-trail',
    title: 'Great Living Chola Temples & Heritage',
    category: 'heritage',
    badge: 'UNESCO Heritage',
    duration: '4-5 Days',
    distance: '420 km',
    description: 'Explore the zenith of Dravidian temple architecture in Thanjavur, Gangaikonda Cholapuram, and Darasuram.',
    sites: [6, 7, 8, 1],
    polyline: [
      [11.3996, 79.6937], // Chidambaram
      [11.2085, 79.4497], // Gangaikonda Cholapuram
      [10.9514, 79.3561], // Darasuram
      [10.7828, 79.1318]  // Thanjavur
    ]
  }
];

export const DESTINATIONS = [
  // SPIRITUAL
  {
    id: 101,
    title: "Yamunotri Temple",
    state: "Uttarakhand",
    category: "spiritual",
    era: -3000,
    eraLabel: "Puranic / Vedic Era",
    lat: 30.9992,
    lng: 78.4604,
    altitude: "3,293 m",
    bestTime: "May to October",
    rating: 4.8,
    reviewsCount: 1420,
    tags: ["Char Dham", "Himalayas", "Goddess Yamuna"],
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&auto=format&fit=crop&q=80",
    desc: "The source of the holy Yamuna river and the first stop of the revered Char Dham Yatra high in the Garhwal Himalayas.",
    history: "Associated with Sage Asit, who had his hermitage here. The temple was built in the 19th century by Maharani Guleria of Jaipur.",
    darshanTimings: "6:00 AM – 8:00 PM (Aarti: 6:30 PM)",
    oyoHotels: [
      { name: "OYO Mountain Bliss Inn", distance: "2.1 km", rating: 4.6, price: 1899, tag: "OYO Rooms" },
      { name: "OYO Premium Yatra Retreat", distance: "3.4 km", rating: 4.7, price: 2450, tag: "OYO Townhouse" }
    ]
  },
  {
    id: 102,
    title: "Gangotri Temple",
    state: "Uttarakhand",
    category: "spiritual",
    era: -3000,
    eraLabel: "Puranic Era",
    lat: 30.9947,
    lng: 78.9398,
    altitude: "3,100 m",
    bestTime: "May to October",
    rating: 4.9,
    reviewsCount: 2100,
    tags: ["Char Dham", "River Ganga", "Bhagirathi"],
    image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?w=600&auto=format&fit=crop&q=80",
    desc: "Origin seat of the River Ganga where King Bhagiratha did severe penance to bring Ganga down from heaven.",
    history: "Built by the Gorkha Commander Amar Singh Thapa in the early 18th century, surrounded by deodar and pine forests.",
    darshanTimings: "6:15 AM – 2:00 PM, 3:00 PM – 9:30 PM",
    oyoHotels: [
      { name: "OYO Himalayan Riverfront Residency", distance: "1.2 km", rating: 4.5, price: 1999, tag: "OYO Rooms" },
      { name: "OYO Bhagirathi Pilgrim Lodge", distance: "2.8 km", rating: 4.3, price: 1550, tag: "OYO Spot On" }
    ]
  },
  {
    id: 103,
    title: "Kedarnath Temple",
    state: "Uttarakhand",
    category: "spiritual",
    era: -3100,
    eraLabel: "Mahabharata Era",
    lat: 30.7352,
    lng: 79.0669,
    altitude: "3,584 m",
    bestTime: "May to June, Sep to Oct",
    rating: 5.0,
    reviewsCount: 8900,
    tags: ["Jyotirlinga", "Char Dham", "Panch Kedar", "Lord Shiva"],
    image: "https://images.unsplash.com/photo-1609137144820-7f2a7db50d8a?w=600&auto=format&fit=crop&q=80",
    desc: "One of the most sacred 12 Jyotirlingas and highest of the Char Dham temples, situated against the snow-clad Kedarnath peak.",
    history: "Originally built by the Pandavas to seek Shiva's forgiveness, and resurrected by Adi Shankaracharya in the 8th century CE.",
    darshanTimings: "4:00 AM – 9:00 PM (Temple closed 3:00 PM - 5:00 PM)",
    oyoHotels: [
      { name: "OYO Shiva Residency Gaurikund", distance: "Base Camp", rating: 4.7, price: 2800, tag: "OYO Premium" },
      { name: "OYO Valley View Guptkashi", distance: "Near Helipad", rating: 4.6, price: 2300, tag: "OYO Townhouse" }
    ]
  },
  {
    id: 104,
    title: "Badrinath Temple",
    state: "Uttarakhand",
    category: "spiritual",
    era: -3000,
    eraLabel: "Vedic / Puranic Era",
    lat: 30.7433,
    lng: 79.4938,
    altitude: "3,300 m",
    bestTime: "May to October",
    rating: 4.9,
    reviewsCount: 6500,
    tags: ["Char Dham", "Lord Vishnu", "Alaknanda"],
    image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?w=600&auto=format&fit=crop&q=80",
    desc: "Ancient shrine dedicated to Lord Vishnu situated along the banks of the roaring Alaknanda River.",
    history: "Adi Shankaracharya discovered the Saligram idol of Lord Badrinarayan in the Alaknanda river and enshrined it in the 9th century.",
    darshanTimings: "4:30 AM – 1:00 PM, 4:00 PM – 9:00 PM",
    oyoHotels: [
      { name: "OYO Alaknanda Alpine Inn", distance: "800 m", rating: 4.5, price: 2200, tag: "OYO Rooms" },
      { name: "OYO Smart Stay Joshimath", distance: "Near Transit", rating: 4.4, price: 1750, tag: "OYO Townhouse" }
    ]
  },
  {
    id: 105,
    title: "Kashi Vishwanath Temple, Varanasi",
    state: "Uttar Pradesh",
    category: "spiritual",
    era: -5000,
    eraLabel: "Puranic / Treta Yuga",
    lat: 25.3109,
    lng: 83.0107,
    altitude: "81 m",
    bestTime: "October to March",
    rating: 4.9,
    reviewsCount: 15400,
    tags: ["Jyotirlinga", "Ganga Aarti", "Maha Shivaratri"],
    image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600&auto=format&fit=crop&q=80",
    desc: "The eternal spiritual capital of India and foremost Jyotirlinga, on the sacred ghats of the River Ganga.",
    history: "Mentioned in the Skanda Purana. Rebuilt by Ahilyabai Holkar in 1780 CE, now expanded into the magnificent Vishwanath Corridor.",
    darshanTimings: "3:00 AM – 11:00 PM (Mangala Aarti: 3:00 AM)",
    oyoHotels: [
      { name: "OYO Townhouse Ghatview Varanasi", distance: "450 m", rating: 4.8, price: 2150, tag: "OYO Townhouse" },
      { name: "OYO Flagship Sacred City Inn", distance: "1.1 km", rating: 4.4, price: 1499, tag: "OYO Flagship" },
      { name: "OYO Collection O Dashashwamedh", distance: "700 m", rating: 4.7, price: 2890, tag: "Collection O" }
    ]
  },
  {
    id: 106,
    title: "Mahakaleshwar Temple, Ujjain",
    state: "Madhya Pradesh",
    category: "spiritual",
    era: -3000,
    eraLabel: "Puranic Era",
    lat: 23.1827,
    lng: 75.7682,
    altitude: "492 m",
    bestTime: "October to March",
    rating: 4.9,
    reviewsCount: 11200,
    tags: ["Dakshinabhimukhi Jyotirlinga", "Bhasma Aarti", "Shipra River"],
    image: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?w=600&auto=format&fit=crop&q=80",
    desc: "Only south-facing (Dakshinamurti) Jyotirlinga, famous worldwide for its divine daily 4:00 AM Bhasma Aarti.",
    history: "Ancient time-keeping meridian of India; reconstructed by Maratha general Ramchandra Baba Shenavi in the 18th century.",
    darshanTimings: "4:00 AM – 11:00 PM (Bhasma Aarti: 4:00 AM - 6:00 AM)",
    oyoHotels: [
      { name: "OYO Townhouse Ujjain Mahakal Corridor", distance: "300 m", rating: 4.8, price: 2400, tag: "OYO Townhouse" },
      { name: "OYO Flagship Shipra View", distance: "950 m", rating: 4.5, price: 1650, tag: "OYO Flagship" }
    ]
  },
  {
    id: 107,
    title: "Omkareshwar Jyotirlinga",
    state: "Madhya Pradesh",
    category: "spiritual",
    era: -3000,
    eraLabel: "Puranic Era",
    lat: 22.2464,
    lng: 76.1517,
    altitude: "178 m",
    bestTime: "October to March",
    rating: 4.8,
    reviewsCount: 5400,
    tags: ["Jyotirlinga", "Narmada River", "Om Island"],
    image: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?w=600&auto=format&fit=crop&q=80",
    desc: "Island shaped like the sacred symbol 'OM' in the Narmada River housing one of the 12 Jyotirlingas.",
    history: "Ancient shrine connected to King Mandhata. Expanded by the Paramara rulers and later restored by Ahilyabai Holkar.",
    darshanTimings: "5:00 AM – 9:30 PM",
    oyoHotels: [
      { name: "OYO Narmada Island Retreat", distance: "600 m", rating: 4.4, price: 1600, tag: "OYO Rooms" },
      { name: "OYO Pilgrim Palace Omkareshwar", distance: "1.5 km", rating: 4.3, price: 1350, tag: "OYO Spot On" }
    ]
  },
  {
    id: 61,
    title: "Venkateswara Temple, Tirupati",
    state: "Andhra Pradesh",
    category: "spiritual",
    era: -3000,
    eraLabel: "Varaha Purana Era",
    lat: 13.6833,
    lng: 79.3473,
    altitude: "853 m",
    bestTime: "September to March",
    rating: 4.9,
    reviewsCount: 32000,
    tags: ["Tirumala", "Lord Balaji", "Seven Hills"],
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
    desc: "The world's richest and most visited pilgrimage site perched on the sacred Seshachalam Seven Hills.",
    history: "Patronized by Pallavas, Cholas, Pandyas, and grandly expanded by Sri Krishnadevaraya of Vijayanagara empire.",
    darshanTimings: "3:00 AM – 11:30 PM (Suprabhatam at 3:00 AM)",
    oyoHotels: [
      { name: "OYO Premium Tirupati Hillview", distance: "2.1 km", rating: 4.7, price: 1950, tag: "OYO Premium" },
      { name: "OYO Townhouse Balaji Road", distance: "1.4 km", rating: 4.6, price: 2350, tag: "OYO Townhouse" }
    ]
  },
  {
    id: 1,
    title: "Nataraja Temple, Chidambaram",
    state: "Tamil Nadu",
    category: "spiritual",
    era: -300,
    eraLabel: "300 BCE (Sangam Era)",
    lat: 11.3996,
    lng: 79.6937,
    altitude: "6 m",
    bestTime: "November to February",
    rating: 4.8,
    reviewsCount: 4200,
    tags: ["Pancha Bhoota (Akasha)", "Cosmic Dance", "Chola Art"],
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&auto=format&fit=crop&q=80",
    desc: "One of the Pancha Bhoota Sthalas representing Akasha (Space) with the iconic idol of Lord Shiva in Ananda Tandava.",
    history: "Core antiquity dating back to Sangam literature; current grand gold-plated gopurams constructed by 10th-century Chola monarchs.",
    darshanTimings: "6:00 AM – 12:30 PM, 4:30 PM – 10:00 PM",
    oyoHotels: [
      { name: "OYO Golden Gopuram Residency", distance: "500 m", rating: 4.5, price: 1400, tag: "OYO Flagship" }
    ]
  },
  {
    id: 6,
    title: "Brihadeeswarar Temple, Thanjavur",
    state: "Tamil Nadu",
    category: "heritage",
    era: 1010,
    eraLabel: "1010 CE (Chola Dynasty)",
    lat: 10.7828,
    lng: 79.1318,
    altitude: "59 m",
    bestTime: "October to March",
    rating: 4.9,
    reviewsCount: 7800,
    tags: ["UNESCO World Heritage", "Chola Architecture", "Granite Marvel"],
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&auto=format&fit=crop&q=80",
    desc: "The world's first all-granite temple with an 80-tonne single granite capstone atop its soaring 216-foot vimana.",
    history: "Commissioned by the greatest Chola Emperor Raja Raja Chola I, completed in 1010 CE as an architectural triumph.",
    darshanTimings: "6:00 AM – 12:30 PM, 4:00 PM – 8:30 PM",
    oyoHotels: [
      { name: "OYO Townhouse Royal Thanjavur", distance: "1.2 km", rating: 4.6, price: 1850, tag: "OYO Townhouse" }
    ]
  },

  // MOUNTAIN & HILL STATIONS
  {
    id: 201,
    title: "Manali & Solang Valley",
    state: "Himachal Pradesh",
    category: "mountain",
    era: 1947,
    eraLabel: "Modern / Ancient Kullu Heritage",
    lat: 32.2432,
    lng: 77.1892,
    altitude: "2,050 m",
    bestTime: "October to June (Snow: Dec-Feb)",
    rating: 4.8,
    reviewsCount: 18500,
    tags: ["Snow Peaks", "Solang Valley", "Hadimba Temple", "Beas River"],
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&auto=format&fit=crop&q=80",
    desc: "India's premier high-altitude adventure and mountain retreat in the scenic Beas River valley surrounded by snow-capped peaks.",
    history: "Named after Sage Manu who stepped off his ark in Manali to recreate human life after the great deluge.",
    darshanTimings: "All day scenic destination (Hadimba Temple: 8:00 AM – 6:00 PM)",
    oyoHotels: [
      { name: "OYO Home Pine Forest View Cottage", distance: "Mall Road 1.5 km", rating: 4.8, price: 2499, tag: "OYO Home" },
      { name: "OYO Townhouse Apple Valley Resort", distance: "Solang Road", rating: 4.7, price: 2999, tag: "OYO Townhouse" },
      { name: "OYO Flagship Snow Crest Inn", distance: "Old Manali", rating: 4.5, price: 1799, tag: "OYO Flagship" }
    ]
  },
  {
    id: 202,
    title: "Shimla & Kufri",
    state: "Himachal Pradesh",
    category: "mountain",
    era: 1864,
    eraLabel: "British Colonial Summer Capital",
    lat: 31.1048,
    lng: 77.1734,
    altitude: "2,276 m",
    bestTime: "March to June, Dec to Jan (Snow)",
    rating: 4.7,
    reviewsCount: 14200,
    tags: ["Mall Road", "Toy Train", "Jakhoo Temple", "Ridge"],
    image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?w=600&auto=format&fit=crop&q=80",
    desc: "The 'Queen of Hill Stations', featuring colonial architecture, pedestrian-only Mall Road, and panoramic Himalayan vistas.",
    history: "Declared the summer capital of British India in 1864, connected by the UNESCO World Heritage Kalka-Shimla Toy Train.",
    darshanTimings: "Open year-round",
    oyoHotels: [
      { name: "OYO Flagship Mall Road Shimla", distance: "300 m to Ridge", rating: 4.6, price: 2199, tag: "OYO Flagship" },
      { name: "OYO Townhouse Pine Wood Escape", distance: "Near Kufri", rating: 4.7, price: 2650, tag: "OYO Townhouse" }
    ]
  },
  {
    id: 203,
    title: "Rishikesh & Ganga Valley",
    state: "Uttarakhand",
    category: "mountain",
    era: -1500,
    eraLabel: "Vedic Era",
    lat: 30.0869,
    lng: 78.2676,
    altitude: "340 m",
    bestTime: "September to April",
    rating: 4.9,
    reviewsCount: 22000,
    tags: ["Yoga Capital", "White Water Rafting", "Triveni Ghat", "Lakshman Jhula"],
    image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?w=600&auto=format&fit=crop&q=80",
    desc: "The Yoga Capital of the World where the sacred Ganga emerges from the Shivalik Himalayas onto the northern plains.",
    history: "Where Lord Rama did penance after killing Ravana; ancient hub of meditation, sadhus, and Beatles ashram.",
    darshanTimings: "Ganga Aarti at Triveni Ghat: 6:00 PM – 7:00 PM daily",
    oyoHotels: [
      { name: "OYO Townhouse Ganga Riverfront", distance: "Tapovan", rating: 4.8, price: 2250, tag: "OYO Townhouse" },
      { name: "OYO Home Yoga Serenity Villa", distance: "High Bank", rating: 4.7, price: 1890, tag: "OYO Home" }
    ]
  },
  {
    id: 204,
    title: "Munnar Tea Hills",
    state: "Kerala",
    category: "mountain",
    era: 1870,
    eraLabel: "Colonial Tea Plantation Era",
    lat: 10.0889,
    lng: 77.0595,
    altitude: "1,532 m",
    bestTime: "September to March",
    rating: 4.9,
    reviewsCount: 16800,
    tags: ["Tea Estates", "Anamudi Peak", "Western Ghats", "Misty Hills"],
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
    desc: "Rolling emerald tea plantations, misty mountain valleys, and home to South India's highest peak (Anamudi).",
    history: "Discovered by British planters in the late 19th century and transformed into iconic tea cultivation estates.",
    darshanTimings: "Open year-round",
    oyoHotels: [
      { name: "OYO Home Misty Hills Tea Villa", distance: "Tea Garden View", rating: 4.8, price: 2350, tag: "OYO Home" },
      { name: "OYO Townhouse Cloud Peak Munnar", distance: "2 km to town", rating: 4.6, price: 1999, tag: "OYO Townhouse" }
    ]
  },

  // TREKKING & TRAILS
  {
    id: 301,
    title: "Triund Trek, Dharamshala",
    state: "Himachal Pradesh",
    category: "trek",
    era: 1947,
    eraLabel: "Dhauladhar Ridge Trail",
    lat: 32.2570,
    lng: 76.3533,
    altitude: "2,850 m",
    bestTime: "March to June, Sep to Dec",
    rating: 4.8,
    reviewsCount: 7400,
    tags: ["Dhauladhar Ridge", "Camping", "9 km Trek", "Sunset Views"],
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&auto=format&fit=crop&q=80",
    desc: "One of India's most popular weekend ridge treks overlooking the mighty Dhauladhar mountain wall and Kangra valley.",
    history: "Traditional shepherd trail used for centuries, now India's premier beginner-friendly Himalayan ridge trek.",
    darshanTimings: "Day trek (start by 8:00 AM from McLeodGanj)",
    oyoHotels: [
      { name: "OYO Townhouse McLeodGanj View", distance: "Trail Base 1.0 km", rating: 4.7, price: 2100, tag: "OYO Townhouse" }
    ]
  },
  {
    id: 302,
    title: "Valley of Flowers Trek",
    state: "Uttarakhand",
    category: "trek",
    era: 1931,
    eraLabel: "UNESCO World Biosphere",
    lat: 30.7280,
    lng: 79.6053,
    altitude: "3,658 m",
    bestTime: "July to September (Peak Blooming)",
    rating: 5.0,
    reviewsCount: 3900,
    tags: ["UNESCO Biosphere", "500+ Wildflowers", "Hemkund Sahib"],
    image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?w=600&auto=format&fit=crop&q=80",
    desc: "A surreal high-altitude Himalayan valley carpeted with over 500 varieties of endemic blooming alpine wildflowers.",
    history: "Brought to international fame by British mountaineer Frank S. Smythe in 1931 when he stumbled upon this lost valley.",
    darshanTimings: "Open 7:00 AM – 2:00 PM (Entry permitted July–Oct)",
    oyoHotels: [
      { name: "OYO Govindghat Base Lodge", distance: "Trek Starting Point", rating: 4.4, price: 1650, tag: "OYO Rooms" }
    ]
  },

  // HERITAGE & FORTS
  {
    id: 401,
    title: "Virupaksha & Vijayanagara, Hampi",
    state: "Karnataka",
    category: "heritage",
    era: 1336,
    eraLabel: "1336 CE (Vijayanagara Empire)",
    lat: 15.3350,
    lng: 76.4600,
    altitude: "467 m",
    bestTime: "October to March",
    rating: 4.9,
    reviewsCount: 14000,
    tags: ["UNESCO World Heritage", "Stone Chariot", "Tungabhadra River"],
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&auto=format&fit=crop&q=80",
    desc: "Capital of the opulent Vijayanagara Empire with boulder-strewn landscapes and magnificent 14th-century Dravidian temples.",
    history: "Founded in 1336 by Harihara and Bukka, once the world's second-largest medieval-era city after Beijing.",
    darshanTimings: "6:00 AM – 6:00 PM",
    oyoHotels: [
      { name: "OYO Townhouse Heritage Hampi", distance: "2.3 km", rating: 4.7, price: 2150, tag: "OYO Townhouse" },
      { name: "OYO Boulder View Homestay", distance: "Sanapur Lake", rating: 4.6, price: 1800, tag: "OYO Home" }
    ]
  },
  {
    id: 402,
    title: "Mehrangarh Fort, Jodhpur",
    state: "Rajasthan",
    category: "heritage",
    era: 1459,
    eraLabel: "1459 CE (Rathore Dynasty)",
    lat: 26.2980,
    lng: 73.0189,
    altitude: "122 m Cliff",
    bestTime: "October to March",
    rating: 4.9,
    reviewsCount: 19800,
    tags: ["Blue City", "Rathore Palace", "Cannon Outpost"],
    image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600&auto=format&fit=crop&q=80",
    desc: "One of India's largest and most formidable hill forts rising 400 feet above the famous Blue City of Jodhpur.",
    history: "Built by Rao Jodha in 1459; houses seven grand gates, palatial mahals, and royal Rathore armories.",
    darshanTimings: "9:00 AM – 5:00 PM",
    oyoHotels: [
      { name: "OYO Flagship Blue City Fort View", distance: "600 m", rating: 4.7, price: 1750, tag: "OYO Flagship" },
      { name: "OYO Townhouse Royal Haveli Jodhpur", distance: "1.2 km", rating: 4.8, price: 2400, tag: "OYO Townhouse" }
    ]
  },

  // WILDLIFE & NATURE
  {
    id: 501,
    title: "Jim Corbett National Park",
    state: "Uttarakhand",
    category: "wildlife",
    era: 1936,
    eraLabel: "Oldest National Park in India",
    lat: 29.5300,
    lng: 78.7747,
    altitude: "385 m",
    bestTime: "November to June",
    rating: 4.7,
    reviewsCount: 11000,
    tags: ["Bengal Tiger", "Jungle Safari", "Ramganga River", "Eco-Resorts"],
    image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600&auto=format&fit=crop&q=80",
    desc: "India's first and oldest national park, famous for the highest tiger density and scenic Himalayan foothill jungles.",
    history: "Established in 1936 as Hailey National Park and later renamed in honour of legendary conservationist Jim Corbett.",
    darshanTimings: "Morning Safari: 6:00 AM | Evening Safari: 2:30 PM",
    oyoHotels: [
      { name: "OYO Wilderness Eco Resort Corbett", distance: "Dhikala Gate 3 km", rating: 4.8, price: 2800, tag: "OYO Premium" },
      { name: "OYO Jungle Edge Safari Lodge", distance: "Ramnagar", rating: 4.5, price: 1950, tag: "OYO Rooms" }
    ]
  }
];
