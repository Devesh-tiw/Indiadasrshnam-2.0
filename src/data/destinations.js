export const CATEGORIES = [
  { id: 'all', label: 'All Curated', icon: '✨', color: '#F59E0B' },
  { id: 'spiritual', label: 'Spiritual & Mandir', icon: '🕉️', color: '#EA580C' },
  { id: 'mountain', label: 'Hills & Mountains', icon: '🏔️', color: '#0284C7' },
  { id: 'trek', label: 'Trekking & Trails', icon: '🥾', color: '#0D9488' },
  { id: 'heritage', label: 'Forts & UNESCO', icon: '🏰', color: '#DC2626' },
  { id: 'wildlife', label: 'Nature & Wildlife', icon: '🌿', color: '#16A34A' }
];

export const CIRCUITS = [
  {
    id: 'up-sacred-quad',
    title: 'Uttar Pradesh Sacred Maha Quad Yatra',
    category: 'spiritual',
    badge: 'UP Holy Quad',
    duration: '7–9 Days',
    distance: '1,120 km',
    description: 'The supreme spiritual corridor of North India: Kashi Vishwanath, Ayodhya Ram Janmabhoomi, Prayagraj Triveni Sangam, Naimisharanya Dham & Mathura-Vrindavan.',
    sites: [105, 110, 111, 112, 113],
    polyline: [
      [27.4924, 77.6737], // Mathura-Vrindavan
      [27.3486, 80.4856], // Naimisharanya Dham
      [26.7922, 82.1998], // Ayodhya Ram Mandir
      [25.3109, 83.0107], // Kashi Vishwanath, Varanasi
      [25.4358, 81.8463]  // Prayagraj Triveni Sangam
    ]
  },
  {
    id: 'all-india-chardham',
    title: 'All-India Maha Char Dham Yatra (4 Corners)',
    category: 'spiritual',
    badge: 'Supreme 4 Dhams',
    duration: '14–18 Days',
    distance: '4,850 km',
    description: 'The supreme quadrilateral pilgrimage established by Adi Shankaracharya in the 8th century spanning Badrinath (North), Puri (East), Rameswaram (South), and Dwarka (West).',
    sites: [104, 115, 118, 116],
    polyline: [
      [30.7433, 79.4938], // Badrinath (North)
      [19.8135, 85.8312], // Puri Jagannath (East)
      [9.2881, 79.3174],  // Rameswaram (South)
      [22.2394, 68.9678]  // Dwarkadhish (West)
    ]
  },
  {
    id: 'chardham-uk',
    title: 'Uttarakhand Himalayan Char Dham Yatra',
    category: 'spiritual',
    badge: 'Himalayan Yatra',
    duration: '10–12 Days',
    distance: '1,450 km',
    description: 'The holiest Himalayan pilgrimage covering Yamunotri, Gangotri, Kedarnath, and Badrinath in the Garhwal Himalayas.',
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
    id: 'buddhist-enlightenment',
    title: 'Sacred Buddhist Enlightenment Circuit',
    category: 'spiritual',
    badge: 'Enlightenment Trail',
    duration: '5–6 Days',
    distance: '680 km',
    description: 'Follow the footsteps of Gautama Buddha: Mahabodhi Temple in Bodh Gaya, First Sermon in Sarnath (Varanasi), and Ancient Nalanda University.',
    sites: [114, 105, 403],
    polyline: [
      [24.6961, 84.9913], // Bodh Gaya
      [25.1357, 85.4439], // Nalanda
      [25.3762, 83.0227]  // Sarnath / Varanasi
    ]
  },
  {
    id: '12-jyotirlinga-north',
    title: 'Sacred Northern Jyotirlinga Trail',
    category: 'spiritual',
    badge: 'Divine Shiva Trail',
    duration: '7–9 Days',
    distance: '1,820 km',
    description: 'Connect with the divine vibrations of Somnath, Mahakaleshwar, Omkareshwar, Kashi Vishwanath, and Kedarnath.',
    sites: [117, 106, 107, 105, 103],
    polyline: [
      [20.8880, 70.4012], // Somnath
      [22.2464, 76.1517], // Omkareshwar
      [23.1827, 75.7682], // Ujjain
      [25.3109, 83.0107], // Varanasi
      [30.7352, 79.0669]  // Kedarnath
    ]
  },
  {
    id: 'himachal-loop',
    title: 'Himachal Alpine Valley Circuit',
    category: 'mountain',
    badge: 'Scenic Roadtrip',
    duration: '6–8 Days',
    distance: '920 km',
    description: 'Traverse colonial Shimla, Solang Valley adventure in Manali, and the Tibetan serenity of Dharamshala.',
    sites: [201, 202, 203, 301],
    polyline: [
      [31.1048, 77.1734], // Shimla
      [32.2432, 77.1892], // Manali
      [32.3716, 77.2466], // Solang
      [32.2190, 76.3234]  // Dharamshala
    ]
  },
  {
    id: 'chola-trail',
    title: 'Great Living Chola Temples Trail',
    category: 'heritage',
    badge: 'UNESCO Heritage',
    duration: '4–5 Days',
    distance: '430 km',
    description: 'Marvel at monumental 10th–12th century Dravidian granite architecture across Thanjavur and Chidambaram.',
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
  // 🕉️ UTTAR PRADESH SACRED QUAD (Ayodhya, Kashi, Prayagraj, Mathura, Naimisharanya)
  {
    id: 110,
    title: "Shri Ram Janmabhoomi Mandir, Ayodhya",
    state: "Uttar Pradesh",
    category: "spiritual",
    era: -5000,
    eraLabel: "Treta Yuga (Ramayana Era)",
    lat: 26.7922,
    lng: 82.1998,
    altitude: "102 m",
    bestTime: "October–March",
    rating: 5.0,
    reviewsCount: 45000,
    tags: ["Ram Janmabhoomi", "Hanuman Garhi", "Sarayu Aarti", "Nagara Architecture"],
    image: "/images/ayodhya.png",
    desc: "The sacred birthplace of Maryada Purushottam Lord Shri Rama on the banks of the holy Sarayu River, featuring the grand pink sandstone Nagara-style temple.",
    history: "Ancient capital of the Solar Dynasty (Suryavansha) described in Valmiki Ramayana. Consecrated in 2024 as a global spiritual epicenter.",
    darshanTimings: "6:30 AM – 12:00 PM, 2:00 PM – 9:30 PM (Shringaar Aarti at 6:30 AM)",
    stays: [
      { name: "OYO Townhouse Ram Janmabhoomi View", type: "OYO Townhouse", distance: "600 m to Mandir", rating: 4.9, price: 2650, amenities: ["Mandir View", "AC", "Satvik Food", "WiFi"] },
      { name: "OYO Flagship Sarayu Riverfront Inn", type: "OYO Flagship", distance: "1.2 km", rating: 4.7, price: 1850, amenities: ["River Walk", "24x7 Assistance", "AC"] },
      { name: "OYO Premium Ayodhya Heritage Suites", type: "OYO Premium", distance: "850 m", rating: 4.8, price: 3100, amenities: ["VIP Transit", "Satvik Dining", "Family Suites"] }
    ]
  },
  {
    id: 105,
    title: "Kashi Vishwanath Temple, Varanasi",
    state: "Uttar Pradesh",
    category: "spiritual",
    era: -5000,
    eraLabel: "Puranic / Satya Yuga",
    lat: 25.3109,
    lng: 83.0107,
    altitude: "81 m",
    bestTime: "October–March",
    rating: 4.9,
    reviewsCount: 38400,
    tags: ["Jyotirlinga", "Ganga Aarti", "Vishwanath Corridor", "Maha Shivaratri"],
    image: "/images/kashi.jpg",
    desc: "The eternal spiritual heart of India and foremost Jyotirlinga, situated on the sacred ghats of the River Ganga.",
    history: "Celebrated in the Skanda Purana. Reconstructed by Queen Ahilyabai Holkar in 1780 CE, now revitalized into a magnificent riverfront corridor.",
    darshanTimings: "3:00 AM – 11:00 PM (Mangala Aarti: 3:00 AM, Sapta Rishi Aarti: 7:00 PM)",
    stays: [
      { name: "OYO Townhouse Ghatview Varanasi", type: "OYO Townhouse", distance: "450 m to Ghat", rating: 4.8, price: 2150, amenities: ["Ghat View", "AC", "Buffet Breakfast"] },
      { name: "OYO Flagship Sacred City Inn", type: "OYO Flagship", distance: "1.1 km", rating: 4.5, price: 1499, amenities: ["WiFi", "24x7 Room Service"] }
    ]
  },
  {
    id: 111,
    title: "Triveni Sangam & Bade Hanuman, Prayagraj",
    state: "Uttar Pradesh",
    category: "spiritual",
    era: -5000,
    eraLabel: "Puranic Era (Teerthraj)",
    lat: 25.4358,
    lng: 81.8463,
    altitude: "98 m",
    bestTime: "October–March (Magh / Kumbh Mela)",
    rating: 4.9,
    reviewsCount: 28000,
    tags: ["Triveni Sangam", "Kumbh Mela", "Bade Hanumanji", "Akshayavat"],
    image: "/images/prayagraj.jpg",
    desc: "Known as 'Teerthraj' (King of all Pilgrimage Sites), the sacred confluence of the three holy rivers: Ganga, Yamuna, and the mythical Saraswati.",
    history: "Site where Lord Brahma performed the first Prakrishta Yajna after creation. Renowned worldwide as the host of the Maha Kumbh Mela.",
    darshanTimings: "Boat Darshan at Sangam: 5:00 AM – 7:00 PM (Hanuman Mandir open till 10:00 PM)",
    stays: [
      { name: "OYO Townhouse Sangam View Prayagraj", type: "OYO Townhouse", distance: "1.5 km to Sangam", rating: 4.7, price: 2200, amenities: ["Riverfront Access", "AC", "WiFi"] },
      { name: "OYO Flagship Civil Lines Inn", type: "OYO Flagship", distance: "3.0 km", rating: 4.5, price: 1600, amenities: ["Parking", "AC", "24x7 Service"] }
    ]
  },
  {
    id: 112,
    title: "Shri Krishna Janmabhoomi & Vrindavan, Mathura",
    state: "Uttar Pradesh",
    category: "spiritual",
    era: -3100,
    eraLabel: "Dvapara Yuga (Mahabharata)",
    lat: 27.4924,
    lng: 77.6737,
    altitude: "174 m",
    bestTime: "September–March (Janmashtami / Holi)",
    rating: 4.9,
    reviewsCount: 31000,
    tags: ["Krishna Janmabhoomi", "Banke Bihari", "Prem Mandir", "Braj Dham"],
    image: "/images/vrindavan.jpg",
    desc: "The sacred birthplace of Lord Shri Krishna in Mathura and the divine playground (Leela Bhoomi) of Vrindavan with Banke Bihari and Prem Mandir.",
    history: "Capital of the ancient Shurasena Kingdom. Center of the Braj region visited by millions for Janmashtami and Lathmar Holi.",
    darshanTimings: "5:00 AM – 12:00 PM, 4:00 PM – 9:30 PM",
    stays: [
      { name: "OYO Townhouse Vrindavan Divine Stay", type: "OYO Townhouse", distance: "Near Prem Mandir", rating: 4.8, price: 2350, amenities: ["Temple Shuttle", "AC", "Pure Veg"] },
      { name: "OYO Flagship Krishna Janmabhoomi Road", type: "OYO Flagship", distance: "700 m to Janmasthan", rating: 4.6, price: 1750, amenities: ["AC", "WiFi", "Parking"] }
    ]
  },
  {
    id: 113,
    title: "Naimisharanya Dham (Neemsar)",
    state: "Uttar Pradesh",
    category: "spiritual",
    era: -5000,
    eraLabel: "Satya Yuga (88,000 Rishis Tapobhoomi)",
    lat: 27.3486,
    lng: 80.4856,
    altitude: "140 m",
    bestTime: "October–March",
    rating: 4.8,
    reviewsCount: 9500,
    tags: ["88,000 Rishis", "Chakra Teerth", "Lalita Devi Shaktipeeth", "Vyas Gaddi"],
    image: "/images/naimisharanya.jpg",
    desc: "The supreme forest of penance on the Gomti River where Sage Ved Vyasa authored the 18 Puranas and 88,000 rishis performed thousand-year yajnas.",
    history: "Lord Brahma rolled his Manomaya Chakra to mark the center of the Earth where it stopped, forming the miraculous circular Chakra Teerth.",
    darshanTimings: "5:00 AM – 8:30 PM",
    stays: [
      { name: "OYO Naimisharanya Pilgrim Retreat", type: "OYO Rooms", distance: "400 m to Chakra Teerth", rating: 4.6, price: 1650, amenities: ["Hot Water", "Satvik Food", "Temple Walk"] },
      { name: "OYO Gomti Riverside Ashraya", type: "OYO Spot On", distance: "1.1 km", rating: 4.4, price: 1350, amenities: ["Quiet Ambience", "Power Backup"] }
    ]
  },

  // 🕉️ BIHAR & BUDDHIST CIRCUIT
  {
    id: 114,
    title: "Mahabodhi Temple & Bodhi Tree, Bodh Gaya",
    state: "Bihar",
    category: "spiritual",
    era: -589,
    eraLabel: "589 BCE (Buddha Enlightenment)",
    lat: 24.6961,
    lng: 84.9913,
    altitude: "111 m",
    bestTime: "October–March",
    rating: 5.0,
    reviewsCount: 24500,
    tags: ["UNESCO World Heritage", "Bodhi Tree", "Vajrasana", "Enlightenment Seat"],
    image: "/images/bodhgaya.jpg",
    desc: "The sacred epicenter of Buddhism where Siddhartha Gautama attained Supreme Enlightenment under the sacred Bodhi Tree.",
    history: "First built by Emperor Ashoka in the 3rd century BCE with its majestic 55-meter pyramidical brick spire recognized as a UNESCO World Heritage site.",
    darshanTimings: "5:00 AM – 9:00 PM (Chanting at 5:30 AM & 6:00 PM)",
    stays: [
      { name: "OYO Townhouse Bodhi Tree Sanctuary", type: "OYO Townhouse", distance: "500 m to Temple", rating: 4.8, price: 2100, amenities: ["Meditation Garden", "AC", "WiFi"] },
      { name: "OYO Flagship Nirvana Retreat", type: "OYO Flagship", distance: "900 m", rating: 4.5, price: 1550, amenities: ["AC", "Restaurant", "Airport Shuttle"] }
    ]
  },

  // 🕉️ PAN-INDIA 4 CHAR DHAMS & JYOTIRLINGAS
  {
    id: 115,
    title: "Shree Jagannath Temple, Puri",
    state: "Odisha",
    category: "spiritual",
    era: -3000,
    eraLabel: "Puranic Era (Eastern Char Dham)",
    lat: 19.8135,
    lng: 85.8312,
    altitude: "18 m (Coast)",
    bestTime: "October–March (Rath Yatra: June/July)",
    rating: 4.9,
    reviewsCount: 42000,
    tags: ["Char Dham", "Rath Yatra", "Mahaprasad", "Neelachakra"],
    image: "/images/puri.jpg",
    desc: "One of the Four Original Char Dhams housing Lord Jagannath, Balabhadra, and Subhadra, famed for the world's largest kitchen and annual Rath Yatra.",
    history: "Commissioned by King Anantavarman Chodaganga Deva in the 12th century CE atop ancient sanctum foundations.",
    darshanTimings: "5:00 AM – 11:00 PM",
    stays: [
      { name: "OYO Townhouse Sea Beach Puri", type: "OYO Townhouse", distance: "Beachfront 800 m to Mandir", rating: 4.8, price: 2450, amenities: ["Sea View", "AC", "Mahaprasad Delivery"] },
      { name: "OYO Flagship Grand Road Puri", type: "OYO Flagship", distance: "400 m to Temple", rating: 4.6, price: 1750, amenities: ["AC", "WiFi", "Dining"] }
    ]
  },
  {
    id: 116,
    title: "Dwarkadhish Temple (Jagat Mandir), Dwarka",
    state: "Gujarat",
    category: "spiritual",
    era: -3100,
    eraLabel: "Dvapara Yuga (Western Char Dham)",
    lat: 22.2394,
    lng: 68.9678,
    altitude: "12 m (Arabian Sea)",
    bestTime: "October–March",
    rating: 4.9,
    reviewsCount: 29000,
    tags: ["Char Dham", "Lord Krishna Kingdom", "Gomti Ghat", "52-Yard Dhwaja"],
    image: "/images/dwarka.webp",
    desc: "The 2,200-year-old 5-story limestone citadel dedicated to the King of Dwarka (Lord Krishna) perched where the Gomti River meets the Arabian Sea.",
    history: "Originally built by Vajranabha, great-grandson of Lord Krishna. Famed for its grand 52-yard sacred flag hoisted five times daily.",
    darshanTimings: "6:30 AM – 1:00 PM, 5:00 PM – 9:30 PM",
    stays: [
      { name: "OYO Townhouse Gomti Ghat Dwarka", type: "OYO Townhouse", distance: "350 m to Mandir", rating: 4.7, price: 2200, amenities: ["Ghat View", "AC", "Satvik Food"] },
      { name: "OYO Flagship Dwarkadhish Residency", type: "OYO Flagship", distance: "800 m", rating: 4.5, price: 1650, amenities: ["AC", "Parking", "WiFi"] }
    ]
  },
  {
    id: 117,
    title: "Somnath Jyotirlinga",
    state: "Gujarat",
    category: "spiritual",
    era: -5000,
    eraLabel: "First Among 12 Jyotirlingas",
    lat: 20.8880,
    lng: 70.4012,
    altitude: "8 m (Coast)",
    bestTime: "October–March",
    rating: 4.9,
    reviewsCount: 36000,
    tags: ["1st Jyotirlinga", "Arabian Sea", "Prabhas Patan", "Sound & Light Show"],
    image: "/images/somnath.jpg",
    desc: "The 'Eternal Shrine' and first of the twelve sacred Jyotirlingas, situated dramatically on the shores of the Arabian Sea.",
    history: "Reconstructed by Sardar Vallabhbhai Patel after Indian independence in magnificent Kailash Mahameru Prasad style.",
    darshanTimings: "6:00 AM – 10:00 PM (Aarti at 7:00 AM, 12:00 PM, 7:00 PM)",
    stays: [
      { name: "OYO Townhouse Somnath Sea Breeze", type: "OYO Townhouse", distance: "600 m to Temple", rating: 4.8, price: 2300, amenities: ["Sea View", "AC", "Pure Veg"] }
    ]
  },
  {
    id: 118,
    title: "Ramanathaswamy Temple, Rameswaram",
    state: "Tamil Nadu",
    category: "spiritual",
    era: -5000,
    eraLabel: "Ramayana Era (Southern Char Dham)",
    lat: 9.2881,
    lng: 79.3174,
    altitude: "10 m (Island)",
    bestTime: "October–March",
    rating: 4.9,
    reviewsCount: 31500,
    tags: ["Char Dham", "Jyotirlinga", "22 Holy Theerthams", "Longest Corridor"],
    image: "/images/rameswaram.jpg",
    desc: "Consecrated by Lord Rama after his victory in Lanka; famous for the world's longest pillared corridor and 22 sacred holy bathing theerthams.",
    history: "Expanded by the Pandya and Jaffna kings in the 12th century with over 1,200 sculptured granite pillars.",
    darshanTimings: "5:00 AM – 1:00 PM, 3:00 PM – 9:00 PM",
    stays: [
      { name: "OYO Townhouse Temple View Rameswaram", type: "OYO Townhouse", distance: "400 m to East Gate", rating: 4.7, price: 2150, amenities: ["Temple View", "AC", "WiFi"] }
    ]
  },
  {
    id: 119,
    title: "Maa Kamakhya Temple, Guwahati",
    state: "Assam",
    category: "spiritual",
    era: -5000,
    eraLabel: "Satya Yuga (Foremost Shaktipeeth)",
    lat: 26.1664,
    lng: 91.7054,
    altitude: "244 m (Nilachal Hill)",
    bestTime: "October–April (Ambubachi Mela: June)",
    rating: 4.9,
    reviewsCount: 22000,
    tags: ["51 Shakti Peethas", "Nilachal Hill", "Tantra Peetha", "Ambubachi"],
    image: "/images/kamakhya.jpg",
    desc: "The supreme seat of Tantric worship and foremost among the 51 Shakti Peethas situated atop the scenic Nilachal Hills overlooking the Brahmaputra River.",
    history: "Rebuilt by King Naranarayana of the Koch Dynasty in 1565 CE with unique beehive-shaped shikhara.",
    darshanTimings: "5:30 AM – 1:00 PM, 2:30 PM – 8:00 PM",
    stays: [
      { name: "OYO Townhouse Nilachal View Guwahati", type: "OYO Townhouse", distance: "1.2 km", rating: 4.7, price: 2100, amenities: ["Hill View", "AC", "WiFi"] }
    ]
  },
  {
    id: 120,
    title: "Harmandir Sahib (Golden Temple), Amritsar",
    state: "Punjab",
    category: "spiritual",
    era: 1577,
    eraLabel: "1577 CE (Guru Ram Das Ji)",
    lat: 31.6200,
    lng: 74.8765,
    altitude: "234 m",
    bestTime: "October–March",
    rating: 5.0,
    reviewsCount: 65000,
    tags: ["Golden Temple", "Amrit Sarovar", "Guru Granth Sahib", "24x7 Langar"],
    image: "/images/amritsar.jpg",
    desc: "The holiest Gurdwara of Sikhism surrounded by the sacred Amrit Sarovar (Pool of Nectar) and covered in pure gold leaf.",
    history: "Founded in 1577 by Guru Ram Das Ji; gold plating added in 1830 by Maharaja Ranjit Singh. World's largest free community kitchen (Langar).",
    darshanTimings: "Open 24 Hours Daily",
    stays: [
      { name: "OYO Townhouse Heritage Amritsar", type: "OYO Townhouse", distance: "600 m to Golden Temple", rating: 4.9, price: 2400, amenities: ["Temple Walk", "AC", "Buffet"] }
    ]
  },
  {
    id: 121,
    title: "Mata Vaishno Devi Shrine, Katra",
    state: "Jammu & Kashmir",
    category: "spiritual",
    era: -3000,
    eraLabel: "Trikuta Holy Mountains",
    lat: 33.0308,
    lng: 74.9490,
    altitude: "1,585 m",
    bestTime: "March–November",
    rating: 5.0,
    reviewsCount: 52000,
    tags: ["Holy Pindies", "Bhavan", "Trikuta Hills", "Bhairon Ghati"],
    image: "/images/vaishnodevi.jpg",
    desc: "Holy mountain cave shrine of Goddess Vaishno Devi in the Trikuta Mountains, visited by millions undertaking the 13 km sacred trek from Katra.",
    history: "Holy manifestation of Mahakali, Mahalakshmi, and Mahasaraswati as natural rock Pindies in the sanctum cave.",
    darshanTimings: "5:00 AM – 12:00 PM, 4:00 PM – 10:00 PM (Aarti at Sunrise & Sunset)",
    stays: [
      { name: "OYO Townhouse Katra Helipad Road", type: "OYO Townhouse", distance: "Near Ban Ganga Base", rating: 4.8, price: 2500, amenities: ["Heater", "Mountain View", "Satvik Food"] }
    ]
  },
  {
    id: 122,
    title: "Trimbakeshwar Shiva Temple, Nashik",
    state: "Maharashtra",
    category: "spiritual",
    era: -3000,
    eraLabel: "Puranic Era (Godavari Origin)",
    lat: 19.9324,
    lng: 73.5308,
    altitude: "750 m (Brahmagiri Hill)",
    bestTime: "October–March",
    rating: 4.8,
    reviewsCount: 21000,
    tags: ["Jyotirlinga", "Godavari River", "Kumbh Mela", "Brahmagiri"],
    image: "/images/trimbakeshwar.jpg",
    desc: "Ancient Jyotirlinga nestled between three hills: Brahmagiri, Nilagiri, and Kalagiri; origin of the sacred Godavari River.",
    history: "Houses unique three-faced lingam representing Brahma, Vishnu, and Shiva. Present black stone temple built by Peshwa Balaji Baji Rao.",
    darshanTimings: "5:30 AM – 9:00 PM",
    stays: [
      { name: "OYO Townhouse Trimbak Valley Stay", type: "OYO Townhouse", distance: "450 m to Mandir", rating: 4.7, price: 2150, amenities: ["Mountain View", "AC", "WiFi"] }
    ]
  },

  // 🕉️ HIMALAYAN CHAR DHAM (Kedarnath, Badrinath, Gangotri, Yamunotri)
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
    bestTime: "May–June, Sep–Oct",
    rating: 4.9,
    reviewsCount: 38900,
    tags: ["Jyotirlinga", "Char Dham", "Panch Kedar", "Lord Shiva"],
    image: "/images/kedarnath.jpg",
    desc: "One of the most sacred 12 Jyotirlingas and highest of the Char Dham temples, nestled against snow-capped Himalayan peaks.",
    history: "Originally consecrated by the Pandavas to seek Lord Shiva's blessings and restored in the 8th century CE by Adi Shankaracharya.",
    darshanTimings: "4:00 AM – 9:00 PM (Aarti at 7:00 PM)",
    stays: [
      { name: "OYO Shiva Residency Gaurikund", type: "OYO Premium", distance: "Base Camp", rating: 4.8, price: 2800, amenities: ["Geyser", "Temple View", "Veg Dining"] },
      { name: "OYO Townhouse Alpine Retreat", type: "OYO Townhouse", distance: "Helipad Zone", rating: 4.7, price: 2350, amenities: ["Heated Beds", "Free WiFi", "Power Backup"] }
    ]
  },
  {
    id: 104,
    title: "Badrinath Temple",
    state: "Uttarakhand",
    category: "spiritual",
    era: -3000,
    eraLabel: "Vedic Era (Northern Char Dham)",
    lat: 30.7433,
    lng: 79.4938,
    altitude: "3,300 m",
    bestTime: "May–October",
    rating: 4.9,
    reviewsCount: 26500,
    tags: ["Char Dham", "Lord Vishnu", "Alaknanda", "Tapt Kund"],
    image: "/images/badrinath.webp",
    desc: "One of the four prime Char Dham pilgrim shrines of India, dedicated to Lord Badri (Vishnu) along the roaring Alaknanda River.",
    history: "Adi Shankaracharya discovered the sacred Saligram idol in the Narad Kund and enshrined it in the 9th century CE.",
    darshanTimings: "4:30 AM – 9:00 PM",
    stays: [
      { name: "OYO Alaknanda Alpine Inn", type: "OYO Rooms", distance: "800 m", rating: 4.6, price: 2200, amenities: ["Hot Water", "Alaknanda View", "Heater"] }
    ]
  },
  {
    id: 101,
    title: "Yamunotri Temple",
    state: "Uttarakhand",
    category: "spiritual",
    era: -3000,
    eraLabel: "Puranic Era",
    lat: 30.9992,
    lng: 78.4604,
    altitude: "3,293 m",
    bestTime: "May–October",
    rating: 4.8,
    reviewsCount: 11420,
    tags: ["Char Dham", "Hot Springs", "Goddess Yamuna"],
    image: "/images/yamunotri.jpg",
    desc: "Seat of the Goddess Yamuna and the first sanctuary of the revered Char Dham Himalayan circuit.",
    history: "Revered as the hermitage of Sage Asit; the modern sanctum was built by Maharani Guleria of Jaipur in the 19th century.",
    darshanTimings: "6:00 AM – 8:00 PM",
    stays: [
      { name: "OYO Mountain Bliss Inn", type: "OYO Rooms", distance: "2.1 km", rating: 4.6, price: 1899, amenities: ["Mountain View", "Hot Water", "Restaurant"] }
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
    bestTime: "May–October",
    rating: 4.9,
    reviewsCount: 12100,
    tags: ["Char Dham", "River Ganga", "Bhagirathi"],
    image: "/images/gangotri.jpg",
    desc: "Sacred origin shrine of River Ganga where King Bhagiratha meditated to bring the holy waters to earth.",
    history: "Built by Gorkha General Amar Singh Thapa in the 18th century, surrounded by majestic deodar forests.",
    darshanTimings: "6:15 AM – 9:30 PM",
    stays: [
      { name: "OYO Himalayan Riverfront Lodge", type: "OYO Rooms", distance: "1.2 km", rating: 4.5, price: 1999, amenities: ["Riverfront", "Heater", "Satvik Food"] }
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
    bestTime: "October–March",
    rating: 4.9,
    reviewsCount: 31200,
    tags: ["Jyotirlinga", "Bhasma Aarti", "Shipra River", "Mahakal Corridor"],
    image: "/images/mahakal.jpg",
    desc: "The only south-facing (Dakshinamurti) Jyotirlinga, world-famous for its divine 4:00 AM Bhasma Aarti and newly built Mahakal Lok corridor.",
    history: "Historical time-keeping meridian of ancient India; reconstructed by Maratha rulers in the 18th century.",
    darshanTimings: "4:00 AM – 11:00 PM (Bhasma Aarti: 4:00 AM)",
    stays: [
      { name: "OYO Townhouse Mahakal Corridor", type: "OYO Townhouse", distance: "300 m", rating: 4.8, price: 2400, amenities: ["Corridor Walk", "AC", "WiFi"] }
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
    bestTime: "October–March",
    rating: 4.8,
    reviewsCount: 15400,
    tags: ["Jyotirlinga", "Narmada River", "Om Island"],
    image: "/images/omkareshwar.webp",
    desc: "Sacred island shaped naturally like the 'OM' symbol in the Narmada River housing one of the 12 Jyotirlingas.",
    history: "Associated with King Mandhata. Rebuilt across the Paramara dynasty and restored by Maharani Ahilyabai Holkar.",
    darshanTimings: "5:00 AM – 9:30 PM",
    stays: [
      { name: "OYO Narmada Island Retreat", type: "OYO Rooms", distance: "600 m", rating: 4.5, price: 1600, amenities: ["River View", "Veg Food", "AC"] }
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
    bestTime: "September–March",
    rating: 4.9,
    reviewsCount: 52000,
    tags: ["Tirumala", "Lord Balaji", "Seven Hills"],
    image: "/images/tirupati.jpg",
    desc: "One of the most visited pilgrimage sanctuaries globally, perched on the sacred Seshachalam Seven Hills.",
    history: "Grandly patronized by the Cholas, Pandyas, and Vijayanagara Emperor Sri Krishnadevaraya.",
    darshanTimings: "3:00 AM – 11:30 PM",
    stays: [
      { name: "OYO Townhouse Balaji Hillview", type: "OYO Townhouse", distance: "1.4 km", rating: 4.7, price: 2350, amenities: ["Hill View", "AC", "WiFi"] }
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
    bestTime: "November–February",
    rating: 4.8,
    reviewsCount: 14200,
    tags: ["Pancha Bhoota (Akasha)", "Cosmic Dance", "Chola Art"],
    image: "/images/chidambaram.jpg",
    desc: "Represents the Akasha (Space) element among the Pancha Bhoota Sthalas with the cosmic idol of Nataraja in Ananda Tandava.",
    history: "Mentioned in Sangam poetry; present gold-roofed towers were built by 10th-century Chola monarchs.",
    darshanTimings: "6:00 AM – 12:30 PM, 4:30 PM – 10:00 PM",
    stays: [
      { name: "OYO Golden Gopuram Residency", type: "OYO Flagship", distance: "500 m", rating: 4.5, price: 1400, amenities: ["Near Temple", "AC", "WiFi"] }
    ]
  },

  // 🏔️ MOUNTAINS & HILL STATIONS
  {
    id: 201,
    title: "Manali & Solang Valley",
    state: "Himachal Pradesh",
    category: "mountain",
    era: 1947,
    eraLabel: "Kullu Heritage & Modern Retreat",
    lat: 32.2432,
    lng: 77.1892,
    altitude: "2,050 m",
    bestTime: "Oct–June (Snow: Dec–Feb)",
    rating: 4.8,
    reviewsCount: 28500,
    tags: ["Snow Peaks", "Solang Valley", "Hadimba Temple", "Beas River"],
    image: "/images/manali.jpg",
    desc: "India's premier high-altitude adventure hub in the Beas Valley surrounded by snow peaks, pine forests, and apple orchards.",
    history: "Named after Sage Manu who recreated human civilization here after the Great Deluge according to Hindu lore.",
    darshanTimings: "Scenic valley open year-round",
    stays: [
      { name: "OYO Home Pine Forest View Cottage", type: "OYO Home", distance: "1.5 km to Mall Rd", rating: 4.8, price: 2499, amenities: ["Balcony View", "Bonfire", "Heater"] },
      { name: "OYO Townhouse Apple Valley Resort", type: "OYO Townhouse", distance: "Solang Road", rating: 4.7, price: 2999, amenities: ["Spa", "Mountain View", "Buffet"] }
    ]
  },
  {
    id: 202,
    title: "Shimla & Kufri",
    state: "Himachal Pradesh",
    category: "mountain",
    era: 1864,
    eraLabel: "Colonial Summer Capital",
    lat: 31.1048,
    lng: 77.1734,
    altitude: "2,276 m",
    bestTime: "March–June, Dec–Jan",
    rating: 4.7,
    reviewsCount: 24200,
    tags: ["Mall Road", "Toy Train", "Jakhoo Temple", "Ridge"],
    image: "/images/shimla.jpg",
    desc: "The 'Queen of Hill Stations', famed for Victorian architecture, pedestrian Mall Road, and panoramic Himalayan vistas.",
    history: "Declared British India's summer capital in 1864, connected by the UNESCO Kalka-Shimla Toy Train.",
    darshanTimings: "Open year-round",
    stays: [
      { name: "OYO Flagship Mall Road Shimla", type: "OYO Flagship", distance: "300 m to Ridge", rating: 4.6, price: 2199, amenities: ["City Center", "Heater", "WiFi"] }
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
    bestTime: "September–April",
    rating: 4.9,
    reviewsCount: 32000,
    tags: ["Yoga Capital", "White Water Rafting", "Triveni Ghat", "Lakshman Jhula"],
    image: "/images/rishikesh.jpg",
    desc: "World Capital of Yoga where the holy Ganga surges out from the Himalayan foothills onto the plains.",
    history: "Ancient land of penance for sages and Lord Rama; world-famous hub for yoga, ashrams, and adventure rafting.",
    darshanTimings: "Ganga Aarti at Triveni Ghat: 6:00 PM daily",
    stays: [
      { name: "OYO Townhouse Ganga Riverfront", type: "OYO Townhouse", distance: "Tapovan", rating: 4.8, price: 2250, amenities: ["Riverfront", "Yoga Deck", "Cafe"] }
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
    bestTime: "September–March",
    rating: 4.9,
    reviewsCount: 26800,
    tags: ["Tea Estates", "Anamudi Peak", "Western Ghats", "Misty Hills"],
    image: "/images/munnar.jpg",
    desc: "Endless rolling emerald tea plantations, mist-covered valleys, and home to South India's highest peak (Anamudi).",
    history: "Developed by Scottish tea planters in the late 19th century into one of Asia's most picturesque hill retreats.",
    darshanTimings: "Open year-round",
    stays: [
      { name: "OYO Home Misty Hills Tea Villa", type: "OYO Home", distance: "Tea Garden View", rating: 4.8, price: 2350, amenities: ["Tea Estate View", "Campfire", "Balcony"] }
    ]
  },
  {
    id: 205,
    title: "Ooty & Nilgiri Mountain Range",
    state: "Tamil Nadu",
    category: "mountain",
    era: 1821,
    eraLabel: "Nilgiri Colonial Heritage",
    lat: 11.4102,
    lng: 76.6950,
    altitude: "2,240 m",
    bestTime: "October–June",
    rating: 4.7,
    reviewsCount: 25100,
    tags: ["Nilgiri Toy Train", "Botanical Gardens", "Doddabetta Peak", "Pine Forests"],
    image: "/images/ooty.jpg",
    desc: "The Nilgiri 'Blue Mountains' retreat known for eucalyptus groves, Toda tribal heritage, and the UNESCO heritage Toy Train.",
    history: "Founded by John Sullivan in 1821 as the summer capital of the Madras Presidency.",
    darshanTimings: "Open year-round",
    stays: [
      { name: "OYO Townhouse Nilgiri Pine Resort", type: "OYO Townhouse", distance: "1.0 km to Lake", rating: 4.7, price: 2199, amenities: ["Fireplace", "Garden View", "WiFi"] }
    ]
  },

  // 🥾 TREKKING & TRAILS
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
    bestTime: "March–June, Sep–Dec",
    rating: 4.8,
    reviewsCount: 17400,
    tags: ["Dhauladhar Ridge", "Camping", "9 km Trek", "Sunset Views"],
    image: "/images/triund.jpg",
    desc: "A thrilling ridge trek offering grand views of the towering Dhauladhar mountain wall on one side and Kangra Valley on the other.",
    history: "Traditional shepherd trail transformed into India's most loved beginner-friendly Himalayan ridge trek.",
    darshanTimings: "Day trek (start 7:00 AM from McLeodGanj)",
    stays: [
      { name: "OYO Townhouse McLeodGanj Base", type: "OYO Townhouse", distance: "Trail Base 1.0 km", rating: 4.7, price: 2100, amenities: ["Trail Access", "Cafe", "WiFi"] }
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
    bestTime: "July–September (Peak Bloom)",
    rating: 5.0,
    reviewsCount: 13900,
    tags: ["UNESCO Biosphere", "500+ Wildflowers", "Hemkund Sahib"],
    image: "/images/valley_of_flowers.jpg",
    desc: "A fairy-tale high altitude valley carpeted with over 500 varieties of blooming alpine wildflowers.",
    history: "Discovered by British mountaineer Frank Smythe in 1931 and designated a UNESCO World Heritage site.",
    darshanTimings: "Open 7:00 AM – 2:00 PM (July–Oct only)",
    stays: [
      { name: "OYO Govindghat Base Lodge", type: "OYO Rooms", distance: "Trek Starting Point", rating: 4.4, price: 1650, amenities: ["Hot Water", "Luggage Storage", "Dining"] }
    ]
  },

  // 🏰 HERITAGE & FORTS
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
    bestTime: "October–March",
    rating: 4.9,
    reviewsCount: 24000,
    tags: ["UNESCO World Heritage", "Stone Chariot", "Tungabhadra River"],
    image: "/images/hampi.jpg",
    desc: "Ruins of the magnificent Vijayanagara Empire with boulder-strewn landscapes and ancient Dravidian temple complexes.",
    history: "Founded in 1336 CE by Harihara and Bukka, once the world's second-largest medieval city after Beijing.",
    darshanTimings: "6:00 AM – 6:00 PM",
    stays: [
      { name: "OYO Townhouse Heritage Hampi", type: "OYO Townhouse", distance: "2.3 km", rating: 4.7, price: 2150, amenities: ["Swimming Pool", "AC", "Cycle Rental"] }
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
    bestTime: "October–March",
    rating: 4.9,
    reviewsCount: 29800,
    tags: ["Blue City", "Rathore Palace", "Cannon Outpost"],
    image: "/images/jodhpur.jpg",
    desc: "One of India's most colossal forts towering 400 feet above the famous Blue City of Jodhpur.",
    history: "Commissioned by Rao Jodha in 1459; houses seven grand gates, palatial mahals, and royal Rathore armories.",
    darshanTimings: "9:00 AM – 5:00 PM",
    stays: [
      { name: "OYO Flagship Blue City Fort View", type: "OYO Flagship", distance: "600 m", rating: 4.7, price: 1750, amenities: ["Fort Rooftop View", "AC", "WiFi"] }
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
    bestTime: "October–March",
    rating: 4.9,
    reviewsCount: 17800,
    tags: ["UNESCO World Heritage", "Chola Architecture", "Granite Marvel"],
    image: "/images/thanjavur.jpg",
    desc: "The pinnacle of Chola granite engineering featuring an 80-tonne monolithic cupola atop its 216-foot vimana.",
    history: "Commissioned by the great Emperor Raja Raja Chola I, completed in 1010 CE without using binding mortar.",
    darshanTimings: "6:00 AM – 12:30 PM, 4:00 PM – 8:30 PM",
    stays: [
      { name: "OYO Townhouse Royal Thanjavur", type: "OYO Townhouse", distance: "1.2 km", rating: 4.6, price: 1850, amenities: ["AC", "Breakfast", "WiFi"] }
    ]
  },
  {
    id: 403,
    title: "Ancient Nalanda Mahavihara",
    state: "Bihar",
    category: "heritage",
    era: 427,
    eraLabel: "427 CE (Gupta Empire)",
    lat: 25.1357,
    lng: 85.4439,
    altitude: "67 m",
    bestTime: "October–March",
    rating: 4.8,
    reviewsCount: 16500,
    tags: ["UNESCO World Heritage", "Ancient University", "Sariputra Stupa"],
    image: "/images/nalanda.jpg",
    desc: "The world's first residential international university where over 10,000 scholars and 2,000 teachers studied Buddhist philosophy, astronomy, and medicine.",
    history: "Established during the Gupta Empire in the 5th century CE; patronized by King Harshavardhana and Pala monarchs.",
    darshanTimings: "9:00 AM – 5:00 PM",
    stays: [
      { name: "OYO Nalanda Heritage Residency", type: "OYO Rooms", distance: "1.0 km to Ruins", rating: 4.5, price: 1700, amenities: ["Garden View", "AC", "WiFi"] }
    ]
  },

  // 🌿 WILDLIFE & NATURE
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
    bestTime: "November–June",
    rating: 4.7,
    reviewsCount: 21000,
    tags: ["Bengal Tiger", "Jungle Safari", "Ramganga River", "Eco-Resorts"],
    image: "/images/corbett.jpg",
    desc: "India's first national park, celebrated for the highest density of Royal Bengal Tigers and pristine Himalayan foothills.",
    history: "Established in 1936 as Hailey National Park and later renamed in honour of legendary author and naturalist Jim Corbett.",
    darshanTimings: "Morning Safari: 6:00 AM | Evening Safari: 2:30 PM",
    stays: [
      { name: "OYO Wilderness Eco Resort Corbett", type: "OYO Premium", distance: "Dhikala Gate 3 km", rating: 4.8, price: 2800, amenities: ["Jungle View", "Pool", "Safari Booking"] }
    ]
  },
  {
    id: 502,
    title: "Wayanad Wildlife Sanctuary",
    state: "Kerala",
    category: "wildlife",
    era: 1973,
    eraLabel: "Nilgiri Biosphere Reserve",
    lat: 11.6854,
    lng: 76.1320,
    altitude: "700–2,100 m",
    bestTime: "October–May",
    rating: 4.8,
    reviewsCount: 19200,
    tags: ["Wild Elephants", "Nilgiri Biosphere", "Chembra Peak", "Banasura Dam"],
    image: "/images/wayanad.jpg",
    desc: "Verdant rainforest haven in Kerala's Western Ghats home to herds of wild Asian elephants, leopards, and rare hornbills.",
    history: "Integral part of the Nilgiri Biosphere Reserve; rich in Neolithic Edakkal rock engravings dating to 6000 BCE.",
    darshanTimings: "Safari: 7:00 AM – 10:00 AM, 3:00 PM – 5:00 PM",
    stays: [
      { name: "OYO Home Rainforest Plantation Stay", type: "OYO Home", distance: "Sanctuary Border", rating: 4.7, price: 2200, amenities: ["Coffee Estate", "Treehouse", "Campfire"] }
    ]
  }
];
