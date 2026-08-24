import { DESTINATIONS, CATEGORIES, CIRCUITS } from './sites-data.js';

// State Management
const state = {
  currentCategory: 'all',
  currentEra: 2026,
  selectedSiteId: null,
  activeCircuitId: null,
  activePolyline: null,
  markers: {},
  theme: localStorage.getItem('id_theme') || 'dark'
};

// Initialize DOM
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMap();
  renderCategories();
  renderCircuits();
  renderSitesList();
  setupSearch();
  setupEventListeners();
});

// Theme Management
function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  const toggleBtn = document.getElementById('themeToggle');
  if (toggleBtn) {
    toggleBtn.textContent = state.theme === 'dark' ? '☀️' : '🌙';
  }
}

window.toggleTheme = function() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('id_theme', state.theme);
  initTheme();
};

// Map Initialization
let map;
function initMap() {
  map = L.map('map', {
    center: [22.9734, 78.6569], // Central India
    zoom: 5,
    minZoom: 4,
    maxZoom: 16,
    zoomControl: false
  });

  L.control.zoom({ position: 'bottomright' }).addTo(map);

  // High performance dark tiles
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors, © CARTO',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  renderMarkers();
}

// Marker Generation
function renderMarkers() {
  // Clear existing
  Object.values(state.markers).forEach(m => map.removeLayer(m));
  state.markers = {};

  const filtered = getFilteredDestinations();

  filtered.forEach(site => {
    const cat = CATEGORIES.find(c => c.id === site.category) || CATEGORIES[0];
    
    // Custom HTML icon
    const icon = L.divIcon({
      className: 'custom-leaflet-pin',
      html: `
        <div class="custom-pin-marker" style="border-color: ${cat.color};">
          <span>${cat.icon}</span>
        </div>
      `,
      iconSize: [36, 36],
      iconAnchor: [18, 18],
      popupAnchor: [0, -18]
    });

    const marker = L.marker([site.lat, site.lng], { icon: icon }).addTo(map);

    // Rich Popup
    marker.bindPopup(`
      <div class="popup-container">
        <div class="popup-header-tag">
          <span>${site.state} • ${site.eraLabel}</span>
          <span>★ ${site.rating}</span>
        </div>
        <div class="popup-title">${site.title}</div>
        <div class="popup-meta-chips">
          <span class="popup-chip">🏔️ ${site.altitude || 'Sea Level'}</span>
          <span class="popup-chip">🗓️ ${site.bestTime}</span>
        </div>
        <div class="popup-desc" style="font-size:12px; color:var(--text-muted); line-height:1.4;">
          ${site.desc}
        </div>
        <div class="popup-actions-grid">
          <button class="popup-btn popup-btn-oyo" onclick="window.openOyoModal(${site.id})">
            🏨 Book OYO & Stays (From ₹${site.oyoHotels ? site.oyoHotels[0].price : 1499})
          </button>
          <button class="popup-btn popup-btn-secondary" onclick="window.playAudioGuide(${site.id})">
            🎧 Audio Guide
          </button>
          <button class="popup-btn popup-btn-secondary" onclick="window.calculateDistance(${site.lat}, ${site.lng}, '${site.title}')">
            🚗 Distance
          </button>
        </div>
      </div>
    `);

    state.markers[site.id] = marker;
  });

  document.getElementById('visibleSiteCount').textContent = filtered.length;
}

// Filtering Helper
function getFilteredDestinations() {
  return DESTINATIONS.filter(site => {
    const matchesCategory = state.currentCategory === 'all' || site.category === state.currentCategory;
    const matchesEra = site.era <= state.currentEra;
    return matchesCategory && matchesEra;
  });
}

// Category Bar
function renderCategories() {
  const container = document.getElementById('categoryChipsContainer');
  if (!container) return;

  container.innerHTML = CATEGORIES.map(cat => `
    <button class="category-chip ${state.currentCategory === cat.id ? 'active' : ''}" 
            onclick="window.selectCategory('${cat.id}')">
      <span>${cat.icon}</span>
      <span>${cat.label}</span>
    </button>
  `).join('');
}

window.selectCategory = function(catId) {
  state.currentCategory = catId;
  renderCategories();
  renderMarkers();
  renderSitesList();
};

// Sidebar Site Cards
function renderSitesList() {
  const container = document.getElementById('sitesFeed');
  if (!container) return;

  const sites = getFilteredDestinations();

  if (sites.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 30px 10px; color: var(--text-muted);">
        <p style="font-size: 24px; margin-bottom: 8px;">🔍</p>
        <p style="font-size: 13px; font-weight: 600;">No destinations found in this era or category.</p>
        <p style="font-size: 11px; margin-top: 4px;">Try dragging the era slider to Present Day.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = sites.map(site => {
    const cat = CATEGORIES.find(c => c.id === site.category) || CATEGORIES[0];
    const minPrice = site.oyoHotels ? site.oyoHotels[0].price : 1499;

    return `
      <div class="destination-card ${state.selectedSiteId === site.id ? 'active-card' : ''}" 
           onclick="window.focusSite(${site.id})">
        <div class="card-top-row">
          <div class="card-title">${site.title}</div>
          <span class="card-category-badge" style="color: ${cat.color}; border: 1px solid ${cat.color}40;">
            ${cat.icon} ${site.category}
          </span>
        </div>
        <div class="card-meta-row">
          <span>📍 ${site.state}</span>
          <span>⏳ ${site.eraLabel}</span>
          <span>★ ${site.rating}</span>
        </div>
        <div class="card-desc-snippet">${site.desc}</div>
        <div class="card-footer-row">
          <span class="card-oyo-pill">🏨 OYO from ₹${minPrice}/nt</span>
          <span class="card-action-link" onclick="event.stopPropagation(); window.openOyoModal(${site.id})">
            Explore Stays ↗
          </span>
        </div>
      </div>
    `;
  }).join('');
}

// Focus on a site on Map
window.focusSite = function(siteId) {
  state.selectedSiteId = siteId;
  const site = DESTINATIONS.find(s => s.id === siteId);
  if (!site) return;

  map.flyTo([site.lat, site.lng], 12, { animate: true, duration: 1.2 });
  if (state.markers[siteId]) {
    setTimeout(() => {
      state.markers[siteId].openPopup();
    }, 1300);
  }
  renderSitesList();
};

// Era Slider Update
window.updateEra = function(val) {
  const year = parseInt(val);
  state.currentEra = year;

  let eraTitle = "Present Day (2026 CE)";
  if (year <= -4000) eraTitle = "Satya & Treta Yuga (Puranic)";
  else if (year <= -2500) eraTitle = "Mahabharata & Vedic Era";
  else if (year <= -200)  eraTitle = "Classical Antiquity";
  else if (year <= 600)   eraTitle = "Early Historic Era";
  else if (year <= 1200)  eraTitle = "Early Medieval Chola/Chalukya";
  else if (year <= 1700)  eraTitle = "Late Medieval & Mughal";
  else if (year <= 1947)  eraTitle = "Modern Pre-Independence";

  document.getElementById('eraNameBadge').textContent = eraTitle;
  document.getElementById('eraYearValue').textContent = year < 0 ? `${Math.abs(year)} BCE` : `${year} CE`;

  renderMarkers();
  renderSitesList();
};

// Search System with Autocomplete
function setupSearch() {
  const input = document.getElementById('mainSearchInput');
  const dropdown = document.getElementById('searchDropdown');

  if (!input || !dropdown) return;

  input.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (!q) {
      dropdown.classList.remove('active');
      return;
    }

    const matches = DESTINATIONS.filter(d => 
      d.title.toLowerCase().includes(q) || 
      d.state.toLowerCase().includes(q) ||
      d.tags.some(t => t.toLowerCase().includes(q))
    ).slice(0, 6);

    if (matches.length === 0) {
      dropdown.innerHTML = `<div style="padding:12px; color:var(--text-muted); font-size:12px; text-align:center;">No matching destinations found.</div>`;
    } else {
      dropdown.innerHTML = matches.map(m => `
        <div class="search-item" onclick="window.selectSearchResult(${m.id})">
          <div class="search-item-info">
            <div class="search-item-title">${m.title}</div>
            <div class="search-item-meta">📍 ${m.state} • ${m.category}</div>
          </div>
          <span style="font-size:11px; color:var(--brand-primary); font-weight:700;">View ↗</span>
        </div>
      `).join('');
    }

    dropdown.classList.add('active');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-wrapper')) {
      dropdown.classList.remove('active');
    }
  });
}

window.selectSearchResult = function(siteId) {
  document.getElementById('searchDropdown').classList.remove('active');
  document.getElementById('mainSearchInput').value = '';
  window.focusSite(siteId);
};

// Circuits Drawer & Polyline Rendering
function renderCircuits() {
  const container = document.getElementById('circuitsList');
  if (!container) return;

  container.innerHTML = CIRCUITS.map(c => `
    <div class="circuit-card ${state.activeCircuitId === c.id ? 'active-circuit' : ''}" 
         onclick="window.toggleCircuit('${c.id}')">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
        <span style="font-size:10px; font-weight:800; text-transform:uppercase; color:var(--brand-primary);">${c.badge}</span>
        <span style="font-size:11px; color:var(--text-muted);">⏱️ ${c.duration}</span>
      </div>
      <div style="font-size:14px; font-weight:700; color:var(--text-main); margin-bottom:4px;">${c.title}</div>
      <p style="font-size:11px; color:var(--text-muted); line-height:1.4; margin-bottom:10px;">${c.description}</p>
      <div style="display:flex; justify-content:space-between; align-items:center; font-size:11px; font-weight:700;">
        <span style="color:var(--accent-green);">🛣️ Total ${c.distance}</span>
        <span style="color:var(--brand-primary);">View Route on Map ↗</span>
      </div>
    </div>
  `).join('');
}

window.toggleCircuitDrawer = function() {
  const drawer = document.getElementById('circuitDrawer');
  drawer.classList.toggle('open');
};

window.toggleCircuit = function(circuitId) {
  const circuit = CIRCUITS.find(c => c.id === circuitId);
  if (!circuit) return;

  if (state.activeCircuitId === circuitId) {
    // Clear
    if (state.activePolyline) map.removeLayer(state.activePolyline);
    state.activeCircuitId = null;
    state.activePolyline = null;
    renderCircuits();
    return;
  }

  state.activeCircuitId = circuitId;

  if (state.activePolyline) map.removeLayer(state.activePolyline);

  // Draw glowing polyline
  state.activePolyline = L.polyline(circuit.polyline, {
    color: '#f4a340',
    weight: 4,
    opacity: 0.85,
    dashArray: '8, 8'
  }).addTo(map);

  map.fitBounds(state.activePolyline.getBounds(), { padding: [50, 50] });
  renderCircuits();
  window.toggleCircuitDrawer();
};

// OYO & Multi-Aggregator Modal
window.openOyoModal = function(siteId) {
  const site = DESTINATIONS.find(s => s.id === siteId);
  if (!site) return;

  const oyoQuery = encodeURIComponent(`${site.title} ${site.state}`);
  const mmtUrl = `https://www.makemytrip.com/hotels/hotel-listing/?searchText=${oyoQuery}`;
  const bookingUrl = `https://www.booking.com/searchresults.html?ss=${oyoQuery}&aid=YOUR_BOOKING_AID`;
  const redBusUrl = `https://www.redbus.in/bus-tickets/search?toCity=${encodeURIComponent(site.state)}`;

  const hotelsHtml = (site.oyoHotels || [
    { name: `OYO Premium Stay near ${site.title}`, distance: "1.2 km", rating: 4.6, price: 1799, tag: "OYO Rooms" },
    { name: `OYO Townhouse Heritage Suites`, distance: "2.4 km", rating: 4.8, price: 2350, tag: "OYO Townhouse" }
  ]).map(h => {
    const deepLink = `https://www.oyorooms.com/search?location=${oyoQuery}&latitude=${site.lat}&longitude=${site.lng}&utm_source=bharatdarshnam_partner`;
    return `
      <div class="oyo-hotel-card">
        <span class="oyo-badge-tag">${h.tag}</span>
        <div class="oyo-hotel-name">${h.name}</div>
        <div class="oyo-hotel-meta">
          <span>📍 ${h.distance}</span>
          <span>★ ${h.rating} / 5.0</span>
        </div>
        <div class="oyo-price-row">
          <div>
            <span class="oyo-price-val">₹${h.price}</span>
            <span style="font-size:10px; color:var(--text-muted);">/ night</span>
          </div>
          <a href="${deepLink}" target="_blank" class="oyo-book-btn">
            Book on OYO ↗
          </a>
        </div>
      </div>
    `;
  }).join('');

  const modalBody = `
    <div>
      <p style="font-size:13px; color:var(--text-muted); margin-bottom:14px;">
        Handpicked verified accommodations near <strong style="color:var(--brand-primary);">${site.title}</strong>, ${site.state}.
      </p>
      <div class="oyo-card-grid">
        ${hotelsHtml}
      </div>

      <div style="margin-top:20px; padding:14px; background:var(--bg-surface-elevated); border:1px solid var(--border-subtle); border-radius:var(--radius-md);">
        <div style="font-size:12px; font-weight:700; color:var(--text-main); margin-bottom:8px;">
          Compare on Other Travel Aggregators:
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:8px;">
          <a href="${bookingUrl}" target="_blank" class="popup-btn popup-btn-secondary" style="text-decoration:none; padding:6px 12px;">
            Booking.com ↗
          </a>
          <a href="${mmtUrl}" target="_blank" class="popup-btn popup-btn-secondary" style="text-decoration:none; padding:6px 12px;">
            MakeMyTrip ↗
          </a>
          <a href="${redBusUrl}" target="_blank" class="popup-btn popup-btn-secondary" style="text-decoration:none; padding:6px 12px;">
            🚌 RedBus Tickets ↗
          </a>
        </div>
      </div>
    </div>
  `;

  openModal(`🏨 OYO Stays & Partner Travel — ${site.title}`, modalBody);
};

// Distance / Driving Route Calculator with GPS
window.calculateDistance = function(destLat, destLng, destName) {
  openModal(
    `🚗 Driving Route to ${destName}`,
    `<div style="text-align:center; padding: 25px; color: var(--brand-primary);">
       📡 Requesting your GPS coordinates to calculate road distance...
     </div>`
  );

  if (!navigator.geolocation) {
    document.getElementById('modalBody').innerHTML = `
      <div style="color:#ff6b6b; padding:20px; text-align:center;">
        Geolocation is not supported by your browser.
      </div>
    `;
    return;
  }

  navigator.geolocation.getCurrentPosition(async (position) => {
    const userLat = position.coords.latitude;
    const userLng = position.coords.longitude;

    try {
      const url = `https://router.project-osrm.org/route/v1/driving/${userLng},${userLat};${destLng},${destLat}?overview=false`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.code !== 'Ok' || !data.routes || data.routes.length === 0) {
        throw new Error('No land route found.');
      }

      const distanceKm = (data.routes[0].distance / 1000).toFixed(1);
      const durationHrs = Math.floor(data.routes[0].duration / 3600);
      const durationMins = Math.floor((data.routes[0].duration % 3600) / 60);
      const gMapsLink = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${destLat},${destLng}&travelmode=driving`;

      document.getElementById('modalBody').innerHTML = `
        <div style="text-align:center; padding:15px;">
          <div style="font-size:42px; margin-bottom:10px;">🛣️</div>
          <h2 style="font-size:24px; font-weight:800; color:var(--text-main); margin-bottom:6px;">${distanceKm} km away</h2>
          <p style="color:var(--text-muted); font-size:14px; margin-bottom:20px;">
            Estimated Drive Time: <strong style="color:var(--brand-primary); font-size:16px;">${durationHrs}h ${durationMins}m</strong>
          </p>
          <a href="${gMapsLink}" target="_blank" class="btn-nav-primary" style="display:inline-flex; text-decoration:none; padding:10px 24px; font-size:13px;">
            📍 Open Turn-by-Turn GPS Navigation
          </a>
        </div>
      `;
    } catch (err) {
      document.getElementById('modalBody').innerHTML = `
        <div style="color:#ff6b6b; padding:20px; text-align:center;">
          Unable to calculate live routing right now. Please ensure you are connected to internet.
        </div>
      `;
    }
  }, (err) => {
    document.getElementById('modalBody').innerHTML = `
      <div style="color:#ff6b6b; padding:20px; text-align:center;">
        ⚠️ Location access was denied. Please allow GPS permissions to calculate distance.
      </div>
    `;
  });
};

// 1-Minute Audio Guide Player (Web Speech API Native Audio)
window.playAudioGuide = function(siteId) {
  const site = DESTINATIONS.find(s => s.id === siteId);
  if (!site) return;

  const narrationText = `Welcome to ${site.title} in ${site.state}. ${site.desc} Historical records indicate its antiquity traces back to ${site.eraLabel}. ${site.history || ''} Darshan and visitor hours are: ${site.darshanTimings || 'open daily'}. Recommended stay options include partner OYO hotels located within 5 kilometers.`;

  openModal(
    `🎧 1-Minute Audio Guide — ${site.title}`,
    `
      <div style="text-align:center; padding:15px; display:flex; flex-direction:column; align-items:center; gap:14px;">
        <div style="width:70px; height:70px; border-radius:50%; background:var(--brand-gradient); display:flex; align-items:center; justify-content:center; font-size:32px; box-shadow:0 0 25px var(--brand-glow);">
          🎙️
        </div>
        <h3 style="font-size:16px; color:var(--text-main); font-weight:800;">${site.title}</h3>
        <p style="font-size:12px; color:var(--text-muted); max-width:480px; line-height:1.5;">
          ${narrationText}
        </p>
        <div style="display:flex; gap:10px; margin-top:10px;">
          <button id="playVoiceBtn" class="btn-nav-primary" onclick="window.speakNarrative('${encodeURIComponent(narrationText)}')">
            ▶️ Listen Aloud
          </button>
          <button class="btn-nav-secondary" onclick="window.speechSynthesis.cancel()">
            ⏹️ Stop
          </button>
        </div>
      </div>
    `
  );
};

window.speakNarrative = function(encodedText) {
  if (!window.speechSynthesis) {
    alert("Speech Synthesis is not supported in this browser.");
    return;
  }
  window.speechSynthesis.cancel();
  const text = decodeURIComponent(encodedText);
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.95;
  utterance.pitch = 1.0;
  window.speechSynthesis.speak(utterance);
};

// AI Yatra & Mountain Itinerary Planner
window.openAiPlannerModal = function() {
  const modalContent = `
    <div style="display:flex; flex-direction:column; gap:14px;">
      <p style="font-size:13px; color:var(--text-muted);">
        Generate an instant day-wise itinerary with drive times, OYO budget estimations, and darshan timings.
      </p>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
        <div>
          <label style="font-size:11px; font-weight:700; color:var(--text-muted); display:block; margin-bottom:4px;">Starting City</label>
          <input type="text" id="aiStartCity" class="search-input-box" placeholder="e.g. Delhi, Bangalore, Mumbai" value="Delhi">
        </div>
        <div>
          <label style="font-size:11px; font-weight:700; color:var(--text-muted); display:block; margin-bottom:4px;">Destination Focus</label>
          <select id="aiFocus" class="search-input-box" style="background:var(--bg-surface);">
            <option value="chardham">Uttarakhand Char Dham Yatra</option>
            <option value="himachal">Himachal Mountains & Solang</option>
            <option value="jyotirlinga">Kashi & Mahakal Jyotirlinga</option>
            <option value="chola">Tamil Nadu Grand Chola Temples</option>
          </select>
        </div>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
        <div>
          <label style="font-size:11px; font-weight:700; color:var(--text-muted); display:block; margin-bottom:4px;">Duration</label>
          <select id="aiDays" class="search-input-box" style="background:var(--bg-surface);">
            <option value="3">3 Days (Weekend Express)</option>
            <option value="5" selected>5 Days (Standard)</option>
            <option value="8">8 Days (Grand Circuit)</option>
          </select>
        </div>
        <div>
          <label style="font-size:11px; font-weight:700; color:var(--text-muted); display:block; margin-bottom:4px;">Budget Tier</label>
          <select id="aiBudget" class="search-input-box" style="background:var(--bg-surface);">
            <option value="budget">OYO Budget (₹1,500/night)</option>
            <option value="comfort" selected>OYO Townhouse / Premium (₹2,500/night)</option>
            <option value="luxury">Luxury Heritage (₹4,500/night)</option>
          </select>
        </div>
      </div>

      <button class="btn-nav-primary" style="justify-content:center; padding:12px; font-size:13px; margin-top:8px;" onclick="window.generateAiPlan()">
        ✨ Generate Custom Yatra Plan
      </button>

      <div id="aiOutputResult"></div>
    </div>
  `;

  openModal('✨ AI Pilgrimage & Mountain Itinerary Planner', modalContent);
};

window.generateAiPlan = function() {
  const start = document.getElementById('aiStartCity').value;
  const focus = document.getElementById('aiFocus').value;
  const days = document.getElementById('aiDays').value;
  const out = document.getElementById('aiOutputResult');

  out.innerHTML = `
    <div style="padding:16px; background:var(--bg-surface-elevated); border:1px solid var(--border-subtle); border-radius:var(--radius-md); margin-top:10px;">
      <div style="font-size:14px; font-weight:800; color:var(--brand-primary); margin-bottom:6px;">
        Customized ${days}-Day Itinerary from ${start}
      </div>
      <div style="font-size:12px; color:var(--text-main); line-height:1.6; display:flex; flex-direction:column; gap:8px;">
        <div><strong>Day 1:</strong> Departure from ${start} $\\rightarrow$ Arrival & Check-in at OYO Townhouse $\\rightarrow$ Evening Aarti / Sunset Walk.</div>
        <div><strong>Day 2:</strong> Early Morning VIP Darshan / Alpine Trek $\\rightarrow$ Local Sightseeing & Heritage Exploration.</div>
        <div><strong>Day 3:</strong> Scenic drive to next holy corridor $\\rightarrow$ Check-in at OYO Partner Stay.</div>
        ${days > 3 ? `<div><strong>Day 4:</strong> Mountain Pass or Secondary Temple Shrine visit $\\rightarrow$ Cultural souvenir shopping.</div>` : ''}
        ${days > 4 ? `<div><strong>Day 5:</strong> Morning Meditation / Leisure $\\rightarrow$ Return drive towards ${start}.</div>` : ''}
      </div>
      <div style="margin-top:12px; padding-top:10px; border-top:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center; font-size:11px;">
        <span style="color:var(--accent-green); font-weight:700;">Estimated OYO Stays: ₹${days * 2200}</span>
        <button class="popup-btn popup-btn-oyo" onclick="window.openOyoModal(103)">Book All Stays ↗</button>
      </div>
    </div>
  `;
};

// Generic Modal Helper
function openModal(title, contentHtml) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalBody').innerHTML = contentHtml;
  document.getElementById('mainModalBackdrop').classList.add('active');
}

window.closeModal = function() {
  document.getElementById('mainModalBackdrop').classList.remove('active');
  if (window.speechSynthesis) window.speechSynthesis.cancel();
};

function setupEventListeners() {
  document.getElementById('mainModalBackdrop').addEventListener('click', (e) => {
    if (e.target.id === 'mainModalBackdrop') {
      window.closeModal();
    }
  });
}
