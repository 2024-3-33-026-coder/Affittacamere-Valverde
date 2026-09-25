import { AmenityItem, SustainabilityCategory, DetailItem } from '../types';

export const PROPERTY_INFO = {
  name: 'AFFITTACAMERE-VALVERDE',
  displayName: 'Affittacamere Valverde',
  type: 'Guesthouse / Affittacamere',
  locationLabel: 'Loc. Vessus, Italy',
  tagline: 'A quieter place to stay. A simpler way to arrive.',
  subtitle: 'A calm, welcoming stay with breakfast, pool, free Wi-Fi, and free parking.',
  address: 'svgregione Vessus, Str. Vicinale Valverde, 114, ingresso B/numero 23, 07041 Loc. Vessus, SS, Italy',
  phone: '+39 079 973 6072',
  phoneRaw: '+390799736072',
  checkIn: '16:00',
  checkOut: '11:00',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=svgregione+Vessus,+Str.+Vicinale+Valverde,+114,+ingresso+B/numero+23,+07041+Loc.+Vessus,+SS,+Italy',
  googleTravelUrl: 'https://www.google.com/travel/search?q=Affittacamere%20Valverde&g2lb=4965990%2C72471280%2C72573224%2C72647020%2C72686036%2C72799179%2C72803964%2C72882230%2C73064764%2C121529350%2C121608706%2C121738283%2C121762713%2C121921501%2C121951222%2C121960738%2C122014428%2C122014429%2C122078726&hl=en-BD&gl=bd&cs=1&ssta=1&ts=CAEaRwopEicyJTB4MTJkY2YxYzA0MGRkYjcxNToweGY1OWVmOGY3MGJjMGVhY2ESGhIUCgcI6g8QCxgLEgcI6g8QCxgMGAEyAggC&qs=CAEyFENnc0l5dFdEM3ZDZXZzXzFBUkFCOAJCCQnK6sAL9_ie9UIJCcrqwAv3-J71&ap=ugEGcGhvdG9z&ictx=111',
};

export const AMENITIES: AmenityItem[] = [
  // Featured
  { name: 'POOL', category: 'featured', isAvailable: true, description: 'Open-air pool set amid natural countryside surroundings' },
  { name: 'FREE BREAKFAST', category: 'featured', isAvailable: true, description: 'Complimentary morning breakfast ritual included with your stay' },
  { name: 'FREE WI-FI', category: 'featured', isAvailable: true, description: 'High-speed complimentary connection throughout the property' },
  { name: 'FREE PARKING', category: 'featured', isAvailable: true, description: 'Complimentary on-site guest parking with self-parking convenience' },
  { name: 'AIR CONDITIONING', category: 'featured', isAvailable: true, description: 'Independent climate control in every guest accommodation' },
  { name: 'REFRIGERATOR', category: 'featured', isAvailable: true, description: 'In-room refrigeration for personal beverages and refreshments' },
  { name: 'PRIVATE BATHROOM', category: 'featured', isAvailable: true, description: 'Dedicated en-suite bathroom with shower and clean linen' },
  { name: 'SHOWER', category: 'featured', isAvailable: true, description: 'Modern water-efficient walk-in shower facilities' },
  { name: 'CHILD-FRIENDLY', category: 'featured', isAvailable: true, description: 'Welcoming families with spacious and calm garden spaces' },

  // Parking & Transport
  { name: 'FREE PARKING', category: 'parking', isAvailable: true, description: 'Dedicated guest spaces at no additional cost' },
  { name: 'SELF PARKING', category: 'parking', isAvailable: true, description: 'Direct access to your vehicle at all hours' },

  // Internet
  { name: 'FREE WI-FI', category: 'internet', isAvailable: true, description: 'Seamless in-room wireless access' },
  { name: 'WI-FI IN PUBLIC AREAS', category: 'internet', isAvailable: true, description: 'Coverage extends to patio and shared grounds' },

  // Pools
  { name: 'SWIMMING POOL', category: 'pools', isAvailable: true, description: 'Sun-drenched outdoor pool surrounded by greenery' },
  { name: 'NO HOT TUB', category: 'pools', isAvailable: false, description: 'Traditional unheated pool experience' },

  // Wellness
  { name: 'NO FITNESS CENTRE', category: 'wellness', isAvailable: false, description: 'Open countryside terrain for walking and running' },
  { name: 'NO SPA', category: 'wellness', isAvailable: false, description: 'Quiet personal relaxation in room and by the pool' },

  // Pets
  { name: 'NO PETS', category: 'pets', isAvailable: false, description: 'Preserving quiet allergies-conscious environments for all guests' },

  // Policies & Payments
  { name: 'SMOKE-FREE PROPERTY', category: 'policies', isAvailable: true, description: 'Clean fresh air preserved throughout all interior spaces' },
  { name: 'CREDIT CARDS ACCEPTED', category: 'policies', isAvailable: true, description: 'Visa, Mastercard, and major credit networks' },
  { name: 'DEBIT CARDS ACCEPTED', category: 'policies', isAvailable: true, description: 'Electronic payment cards supported' },
  { name: 'CASH ACCEPTED', category: 'policies', isAvailable: true, description: 'Euro currency accepted on site' },
];

export const SUSTAINABILITY_CATEGORIES: SustainabilityCategory[] = [
  {
    id: 'energy',
    title: 'ENERGY EFFICIENCY',
    iconName: 'Zap',
    commitments: [
      'ENERGY FROM CARBON-FREE SOURCES',
      'ENERGY-EFFICIENT HEATING AND COOLING SYSTEMS',
      'ENERGY-EFFICIENT LIGHTING',
    ],
  },
  {
    id: 'waste',
    title: 'WASTE REDUCTION',
    iconName: 'Recycle',
    commitments: [
      'RECYCLING PROGRAMME',
      'DONATES EXCESS FOOD',
      'SOAP AND TOILETRY DONATION PROGRAMME',
      'SAFE DISPOSAL OF ELECTRONICS, BATTERIES AND LIGHTBULBS',
      'REFILLABLE TOILETRY CONTAINERS',
      'NO POLYSTYRENE FOOD CONTAINERS',
      'NO SINGLE-USE PLASTIC STRAWS',
    ],
  },
  {
    id: 'water',
    title: 'WATER CONSERVATION',
    iconName: 'Droplets',
    commitments: [
      'WATER USE AUDITED BY AN INDEPENDENT ORGANISATION',
      'WATER-EFFICIENT TAPS, TOILETS AND SHOWERS',
      'TOWEL AND LINEN REUSE PROGRAMME',
    ],
  },
  {
    id: 'sourcing',
    title: 'SUSTAINABLE SOURCING',
    iconName: 'Leaf',
    commitments: [
      'RESPONSIBLE PURCHASING POLICY',
      'LOCALLY SOURCED FOOD AND BEVERAGES',
      'ORGANIC CAGE-FREE EGGS',
      'VEGETARIAN AND VEGAN MEALS',
    ],
  },
];

export const PROPERTY_IMAGES = {
  hero: '/assets/images/valverde-hero.jpg',
  exterior: '/assets/images/valverde-exterior.jpg',
  garden: '/assets/images/valverde-garden.jpg',
  room01: '/assets/images/valverde-room-01.jpg',
  room02: '/assets/images/valverde-room-02.jpg',
  bathroom: '/assets/images/valverde-bathroom.jpg',
  breakfast: '/assets/images/valverde-breakfast.jpg',
  detail: '/assets/images/valverde-detail.jpg',
  pool: '/assets/images/valverde-pool.jpg',
  landscape: '/assets/images/valverde-landscape.jpg',
  balcony: '/assets/images/valverde-balcony.jpg',
};

export const EDITORIAL_DETAILS: DetailItem[] = [
  {
    id: 'morning-light',
    title: 'MORNING ON THE BALCONY',
    caption: 'Soft sunlight filtering over the rolling Sardinian hills and Loc. Vessus countryside from the private terrace.',
    aspect: '4:3',
    category: 'TERRACE VIEW',
    imgSrc: '/assets/images/valverde-balcony.jpg',
    palette: { bg: '#F2ECE1', accent: '#D4AF37', border: '#DFD7C7' },
  },
  {
    id: 'quiet-afternoon',
    title: 'A QUIET AFTERNOON',
    caption: 'Long shadows resting across the grounds while warm Mediterranean air moves softly through the trees.',
    aspect: '16:9',
    category: 'GARDEN & GROUNDS',
    imgSrc: '/assets/images/valverde-garden.jpg',
    palette: { bg: '#EAE5DB', accent: '#3D4833', border: '#D5CDC0' },
  },
  {
    id: 'by-the-water',
    title: 'BY THE WATER',
    caption: 'The pool surface catching the midday sun, offering quiet reflection and unhurried calm.',
    aspect: '3:4',
    category: 'POOL',
    imgSrc: '/assets/images/valverde-pool.jpg',
    palette: { bg: '#E3E9E5', accent: '#2A5D5A', border: '#C8D4CE' },
  },
  {
    id: 'before-breakfast',
    title: 'BREAKFAST WITH A VIEW',
    caption: 'A relaxed morning ritual: espresso and local treats laid out with sweeping panoramic countryside views.',
    aspect: '4:3',
    category: 'BREAKFAST',
    imgSrc: '/assets/images/valverde-breakfast.jpg',
    palette: { bg: '#F5EFEB', accent: '#A8583B', border: '#E4D8D0' },
  },
  {
    id: 'mediterranean-stone',
    title: 'MEDITERRANEAN ARCHITECTURE',
    caption: 'Authentic local stonework and countryside architecture that keeps interiors naturally tempered during summer afternoons.',
    aspect: '3:4',
    category: 'ARCHITECTURE',
    imgSrc: '/assets/images/valverde-exterior.jpg',
    palette: { bg: '#ECE7DF', accent: '#7A6B58', border: '#D8D1C5' },
  },
  {
    id: 'fresh-linen',
    title: 'COMFORTABLE REST',
    caption: 'Simple, unhurried tactile comforts: breathable cotton sheets, peaceful countryside quiet, and total stillness.',
    aspect: '16:9',
    category: 'BEDROOM',
    imgSrc: '/assets/images/valverde-room-01.jpg',
    palette: { bg: '#F8F6F1', accent: '#9E9484', border: '#E5E1D8' },
  },
];
