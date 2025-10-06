export interface County {
  name: string;
  cities: string[];
  color: string;
}

export const counties: Record<string, County> = {
  orange: {
    name: "Orange County",
    cities: [
      "Aliso Viejo", "Anaheim", "Brea", "Buena Park", "Costa Mesa", "Cypress",
      "Dana Point", "Fountain Valley", "Fullerton", "Garden Grove",
      "Huntington Beach", "Irvine", "La Habra", "La Palma", "Laguna Beach",
      "Laguna Hills", "Laguna Niguel", "Laguna Woods", "Lake Forest",
      "Los Alamitos", "Mission Viejo", "Newport Beach", "Orange", "Placentia",
      "Rancho Santa Margarita", "San Clemente", "San Juan Capistrano",
      "Santa Ana", "Seal Beach", "Stanton", "Tustin", "Villa Park",
      "Westminster", "Yorba Linda"
    ],
    color: "hsl(328 100% 54%)" // Magenta
  },
  riverside: {
    name: "Riverside County",
    cities: [
      "Banning", "Beaumont", "Blythe", "Calimesa", "Canyon Lake",
      "Cathedral City", "Coachella", "Corona", "Desert Hot Springs",
      "Eastvale", "Hemet", "Indian Wells", "Indio", "Jurupa Valley",
      "Lake Elsinore", "La Quinta", "Menifee", "Moreno Valley", "Murrieta",
      "Norco", "Palm Desert", "Palm Springs", "Perris", "Rancho Mirage",
      "Riverside", "San Jacinto", "Temecula", "Wildomar"
    ],
    color: "hsl(145 100% 50%)" // Neon Green
  },
  sanBernardino: {
    name: "San Bernardino County",
    cities: [
      "Adelanto", "Angelus Oaks", "Apple Valley", "Barstow", "Big Bear City", "Big Bear Lake", 
      "Bloomington", "Blue Jay", "Cedar Glen", "Cedarpines Park", "Chino", "Chino Hills", 
      "Colton", "Crestline", "Fontana", "Grand Terrace", "Green Valley Lake", "Hesperia", 
      "Highland", "Lake Arrowhead", "Loma Linda", "Lucerne Valley", "Mentone", "Montclair", 
      "Morongo Valley", "Needles", "Newberry Springs", "Ontario", "Oro Grande", "Parker Dam", 
      "Phelan", "Pinon Hills", "Rancho Cucamonga", "Redlands", "Rialto", "Running Springs", 
      "San Bernardino", "Skyforest", "Sugarloaf", "Twentynine Palms", "Upland", "Victorville", 
      "Wrightwood", "Yucaipa", "Yucca Valley"
    ],
    color: "hsl(51 100% 50%)" // Gold
  },
  sanDiego: {
    name: "San Diego County",
    cities: [
      "Carlsbad", "Chula Vista", "Coronado", "Del Mar", "El Cajon",
      "Encinitas", "Escondido", "Imperial Beach", "La Mesa", "Lemon Grove",
      "National City", "Oceanside", "Poway", "San Diego", "San Marcos",
      "Santee", "Solana Beach", "Vista"
    ],
    color: "hsl(328 100% 54% / 0.7)" // Light Magenta
  },
  losAngeles: {
    name: "Los Angeles County",
    cities: [
      "Acton", "Agoura Hills", "Alhambra", "Altadena", "Arcadia", "Artesia", "Avalon", "Azusa", 
      "Baldwin Park", "Bell Gardens", "Bellflower", "Beverly Hills", "Burbank", "Calabasas", 
      "Canoga Park", "Canyon Country", "Carson", "Castaic", "Cerritos", "Chatsworth", "Claremont", 
      "Compton", "Covina", "Culver City", "Diamond Bar", "Downey", "Duarte", "El Monte", 
      "El Segundo", "Encino", "Gardena", "Glendale", "Glendora", "Granada Hills", "Hacienda Heights", 
      "Harbor City", "Hawaiian Gardens", "Hawthorne", "Hermosa Beach", "Huntington Park", 
      "Inglewood", "La Cañada Flintridge", "La Crescenta", "La Mirada", "La Puente", "La Verne", 
      "Lake Hughes", "Lakewood", "Lancaster", "Lawndale", "Littlerock", "Llano", "Lomita", 
      "Long Beach", "Los Angeles", "Lynwood", "Malibu", "Manhattan Beach", "Marina del Rey", 
      "Maywood", "Mission Hills", "Monrovia", "Montebello", "Monterey Park", "Montrose", 
      "Mount Wilson", "Newhall", "North Hills", "North Hollywood", "Northridge", "Norwalk", 
      "Pacific Palisades", "Pacoima", "Palmdale", "Palos Verdes Peninsula", "Panorama City", 
      "Paramount", "Pasadena", "Pearblossom", "Pico Rivera", "Playa del Rey", "Playa Vista", 
      "Pomona", "Porter Ranch", "Rancho Palos Verdes", "Redondo Beach", "Reseda", "Rosemead", 
      "Rowland Heights", "San Dimas", "San Fernando", "San Gabriel", "San Marino", "San Pedro", 
      "Santa Clarita", "Santa Fe Springs", "Santa Monica", "Sherman Oaks", "Sierra Madre", 
      "Signal Hill", "South El Monte", "South Gate", "South Pasadena", "Stevenson Ranch", 
      "Studio City", "Sun Valley", "Sunland", "Sylmar", "Tarzana", "Temple City", "Topanga", 
      "Torrance", "Tujunga", "Valencia", "Valley Village", "Valyermo", "Van Nuys", "Venice", 
      "Verdugo City", "Walnut", "West Covina", "West Hills", "West Hollywood", "Whittier", 
      "Wilmington", "Winnetka", "Woodland Hills"
    ],
    color: "hsl(145 100% 50% / 0.7)" // Light Green
  },
  ventura: {
    name: "Ventura County",
    cities: [
      "Camarillo", "Fillmore", "Moorpark", "Ojai", "Oxnard", "Port Hueneme",
      "San Buenaventura", "Santa Paula", "Simi Valley", "Thousand Oaks"
    ],
    color: "hsl(51 100% 50% / 0.7)" // Light Gold
  }
};

export const services = [
  { key: "window-cleaning", name: "Window Cleaning" },
  { key: "pressure-washing", name: "Pressure Washing" },
  { key: "solar-panel-cleaning", name: "Solar Panel Cleaning" },
  { key: "roof-cleaning", name: "Roof Cleaning" },
  { key: "graffiti-removal", name: "Graffiti Removal" },
  { key: "gutter-cleaning", name: "Gutter Cleaning" },
  { key: "construction-cleanup", name: "Post-Construction Cleanup" }
];

export interface ServiceContent {
  title: string;
  metaDescription: string;
  heroHeading: string;
  heroSubheading: string;
  services: string[];
  whyChoose: string[];
}

export const serviceContent: Record<string, ServiceContent> = {
  "pressure-washing": {
    title: "Professional Pressure Washing & Power Washing Services Near You",
    metaDescription: "Driveway, roof, and deck cleaning specialists. Royalty Cleaning Services provides top-rated pressure washing near you for homes and businesses.",
    heroHeading: "Welcome to Royalty Pressure Washing",
    heroSubheading: "Looking for pressure washing near me or power washing services near me? Royalty Cleaning Services delivers professional pressure washing, soft washing, and power washing. From driveway cleaning to roof washing and deck cleaning, our expert team keeps your property spotless and protected.",
    services: [
      "Driveway Cleaning – Remove oil stains, dirt, and grime for lasting curb appeal",
      "Roof Washing – Extend your roof's life with gentle soft wash treatment",
      "Deck & Patio Cleaning – Eliminate algae and buildup to restore beauty and safety",
      "Sidewalk & Walkway Cleaning – Perfect for commercial properties and HOAs",
      "Exterior Building Washing – Safe, high-efficiency cleaning for offices, restaurants, and retail spaces"
    ],
    whyChoose: [
      "Fully licensed and insured",
      "Affordable pressure washing prices with free estimates",
      "Residential & commercial expertise",
      "100% satisfaction guarantee",
      "Soft washing • Gum removal • Exterior cleaning • Pressure washer maintenance"
    ]
  },
  "window-cleaning": {
    title: "Window Cleaning Services Near You – Residential & Commercial Experts",
    metaDescription: "Residential and commercial window cleaners. Affordable window cleaning services including interior & exterior window washing.",
    heroHeading: "Crystal-Clear Windows You Can See the Value In",
    heroSubheading: "Searching for window cleaners near me? Royalty Cleaning Services offers top-rated residential window cleaning and commercial window cleaning. We make your windows shine inside and out.",
    services: [
      "Interior & Exterior Window Cleaning",
      "High-Rise Window Cleaning",
      "Screen & Track Cleaning",
      "Hard Water Stain Removal",
      "Glass Restoration & Maintenance"
    ],
    whyChoose: [
      "Affordable pricing",
      "Trained, uniformed window cleaners",
      "Eco-friendly cleaning products",
      "Satisfaction guaranteed"
    ]
  },
  "graffiti-removal": {
    title: "Graffiti Removal & Paint Cleaning Services",
    metaDescription: "Professional graffiti remover, paint cleaning, and anti-graffiti coating services. Remove vandalism fast with Royalty Cleaning Services.",
    heroHeading: "Fast, Safe, and Effective Graffiti Cleaning",
    heroSubheading: "Need graffiti removal near me? Royalty Cleaning Services specializes in graffiti remover, paint removal, and street art removal for homes, businesses, and public areas.",
    services: [
      "Pressure Washing & Soft Washing",
      "Citrus-Based & Acetone Cleaning",
      "Baking Soda Paste & Sandblasting",
      "Anti-Graffiti Coatings for Long-Term Protection"
    ],
    whyChoose: [
      "We use trusted brands like Goof Off, Kilz, and eco-friendly graffiti cleaning products",
      "Same-day graffiti removal available",
      "Safe for all surfaces",
      "Long-term protection solutions"
    ]
  },
  "roof-cleaning": {
    title: "Soft Wash Roof & Exterior Cleaning Services Near You",
    metaDescription: "Safe, low-pressure cleaning for roofs, siding, and stucco. Soft wash services remove mold, algae, and mildew effectively.",
    heroHeading: "Safe & Gentle Exterior Cleaning",
    heroSubheading: "Looking for soft wash services near me? Royalty Cleaning Services provides expert soft washing for roofs, siding, stucco, and solar panels. We use low-pressure systems that clean without damage.",
    services: [
      "Roof Cleaning",
      "House Washing & Siding Soft Wash",
      "Mold & Mildew Removal",
      "Stucco, Brick, and Concrete Soft Washing",
      "Exterior Cleaning & Maintenance"
    ],
    whyChoose: [
      "Kills organic growth at the source",
      "Safe for shingles, tiles, and paint",
      "Eco-friendly and long-lasting results",
      "Extends roof lifespan"
    ]
  },
  "solar-panel-cleaning": {
    title: "Solar Panel Cleaning & Maintenance Services",
    metaDescription: "Keep your solar panels performing efficiently. Professional solar panel cleaning near you by Royalty Cleaning Services.",
    heroHeading: "Clean Panels, More Power",
    heroSubheading: "Looking for solar panel cleaning near me? Royalty Cleaning Services offers reliable solar panel cleaning, solar maintenance, and service to improve energy output and protect your investment.",
    services: [
      "Residential & Commercial Solar Panel Cleaning",
      "Soft Wash for Delicate Panels",
      "Hard Water Spot Removal",
      "Regular Maintenance Plans"
    ],
    whyChoose: [
      "Dust, pollen, and debris reduce efficiency",
      "Regular cleaning ensures maximum performance",
      "Extends solar panel lifespan",
      "Eco-friendly cleaning methods"
    ]
  },
  "construction-cleanup": {
    title: "Post-Construction Cleaning & Final Cleanup",
    metaDescription: "After construction cleaning services for residential and commercial properties. Deep cleaning, dust removal, and debris haul-off.",
    heroHeading: "From Construction Site to Move-In Ready",
    heroSubheading: "Need post construction cleaning near me? Royalty Cleaning Services specializes in after construction cleanup, new build cleaning, and renovation cleaning for both residential and commercial spaces.",
    services: [
      "Dust Removal & Surface Cleaning",
      "Window Cleaning & Track Detailing",
      "Deep Cleaning for Floors & Walls",
      "Debris Removal & Final Clean",
      "Residential & Commercial Projects"
    ],
    whyChoose: [
      "Trusted by contractors and builders",
      "Affordable post-construction cleaning prices",
      "Flexible scheduling and same-day availability",
      "Move-in ready results"
    ]
  },
  "gutter-cleaning": {
    title: "Professional Gutter Cleaning Services",
    metaDescription: "Keep your gutters flowing freely. Professional gutter cleaning and maintenance services by Royalty Cleaning Services.",
    heroHeading: "Clean Gutters, Protected Home",
    heroSubheading: "Clogged gutters can cause serious damage. Royalty Cleaning Services provides thorough gutter cleaning to protect your home from water damage and foundation issues.",
    services: [
      "Complete Gutter Cleaning",
      "Downspout Clearing",
      "Debris Removal",
      "Gutter Guard Installation",
      "Seasonal Maintenance Plans"
    ],
    whyChoose: [
      "Prevent water damage and foundation issues",
      "Extend gutter lifespan",
      "Safe, professional service",
      "Affordable pricing"
    ]
  }
};

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function getAllCityServiceCombinations() {
  const combinations: Array<{ service: string; city: string; county: string }> = [];
  
  Object.values(counties).forEach(county => {
    county.cities.forEach(city => {
      services.forEach(service => {
        combinations.push({
          service: service.key,
          city: slugify(city),
          county: county.name
        });
      });
    });
  });
  
  return combinations;
}
