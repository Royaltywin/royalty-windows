export interface County {
  name: string;
  cities: string[];
  color: string;
}

export const counties: Record<string, County> = {
  orange: {
    name: "Orange County",
    cities: [
      "Aliso Viejo", "Anaheim", "Brea", "Buena Park", "Capistrano Beach", 
      "Corona Del Mar", "Costa Mesa", "Coto de Caza", "Cypress", "Dana Point", 
      "Foothill Ranch", "Fountain Valley", "Fullerton", "Garden Grove",
      "Huntington Beach", "Irvine", "La Habra", "La Palma", "Laguna Beach",
      "Laguna Hills", "Laguna Niguel", "Laguna Woods", "Lake Forest", "Los Alamitos",
      "Los Flores", "Mission Viejo", "Newport Beach", "Newport Coast", "Orange", 
      "Placentia", "Rancho Santa Margarita", "San Clemente", "San Juan Capistrano",
      "Santa Ana", "Seal Beach", "Silverado", "Stanton", "Talega", "Trabuco Canyon",
      "Tustin", "Villa Park", "Westminster", "Yorba Linda"
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

export interface CityWindowCleaningContent {
  title: string;
  metaDescription: string;
  heading: string;
  intro: string;
  services: string[];
  whyChoose: string[];
  nearbyAreas?: string;
}

export const cityWindowCleaningContent: Record<string, CityWindowCleaningContent> = {
  "aliso-viejo": {
    title: "Window Cleaning in Aliso Viejo, CA | Royalty Window Cleaning",
    metaDescription: "Professional residential and commercial window cleaning in Aliso Viejo, CA. Streak-free shine, inside & out. Call (951) 999-4546 for your free quote.",
    heading: "Welcome to Royalty Window Cleaning Aliso Viejo",
    intro: "We proudly serve Aliso Viejo homeowners and businesses with spotless, streak-free window cleaning. From hillside homes with ocean views to Town Center storefronts, our trained professionals ensure every window sparkles.",
    services: [
      "Interior & Exterior Window Cleaning",
      "Screen & Track Cleaning",
      "Hard Water Stain Removal",
      "Post-Construction Glass Detailing",
      "Skylight & Mirror Cleaning"
    ],
    whyChoose: [
      "Locally operated and insured",
      "Eco-friendly cleaning solutions",
      "5-Star rated for quality and reliability",
      "Satisfaction guaranteed every time"
    ],
    nearbyAreas: "Laguna Niguel • Mission Viejo • Laguna Hills • Lake Forest"
  },
  "anaheim": {
    title: "Window Cleaning in Anaheim, CA | Royalty Window Cleaning",
    metaDescription: "Trusted window cleaners in Anaheim for homes, offices, and attractions. Get streak-free glass with Royalty Window Cleaning.",
    heading: "Professional Window Cleaning in Anaheim",
    intro: "From resort-area hotels near Disneyland to suburban homes and commercial plazas, Royalty Window Cleaning Anaheim keeps your property shining bright.",
    services: [
      "Residential Window Cleaning",
      "Commercial Glass Cleaning",
      "Screen, Track & Frame Detailing",
      "High-Reach and Skylight Cleaning"
    ],
    whyChoose: [
      "Experienced technicians with top-grade tools",
      "Fully insured and safety-certified",
      "Affordable, transparent pricing",
      "Satisfaction guaranteed"
    ],
    nearbyAreas: "Anaheim Hills • Platinum Triangle • West Anaheim • Downtown Anaheim"
  },
  "brea": {
    title: "Window Cleaning in Brea, CA | Royalty Window Cleaning",
    metaDescription: "Expert window cleaners in Brea providing residential & commercial services.",
    heading: "About Our Brea Window Cleaning",
    intro: "Royalty Window Cleaning Brea brings sparkle to homes and offices near the Brea Mall, Birch Street Promenade, and beyond.",
    services: [
      "Interior & Exterior Glass Cleaning",
      "Screen & Track Detailing",
      "Hard Water Spot Removal",
      "Skylight Cleaning"
    ],
    whyChoose: [
      "Licensed, insured & trusted technicians",
      "Environmentally safe cleaning",
      "Always on-time service"
    ],
    nearbyAreas: "Fullerton • La Habra • Placentia"
  },
  "buena-park": {
    title: "Window Cleaning in Buena Park, CA | Royalty Window Cleaning",
    metaDescription: "Brighten your Buena Park property with our professional window cleaning team.",
    heading: "Welcome to Royalty Window Cleaning Buena Park",
    intro: "Whether you manage a Knott's Berry Farm–area business or a residential community, our window specialists restore perfect clarity.",
    services: [
      "Residential & Commercial Window Cleaning",
      "Screen, Track & Frame Cleaning",
      "Pressure-Rinse & Spot-Free Finish"
    ],
    whyChoose: [
      "Locally operated with years of experience",
      "Friendly, uniformed staff",
      "100% satisfaction guarantee"
    ],
    nearbyAreas: "La Palma • Cypress • Fullerton"
  },
  "costa-mesa": {
    title: "Window Cleaning in Costa Mesa, CA | Royalty Window Cleaning",
    metaDescription: "Reliable window cleaning for Costa Mesa homes and businesses.",
    heading: "Crystal-Clear Windows in Costa Mesa",
    intro: "Royalty Window Cleaning Costa Mesa serves local homes near South Coast Plaza and the Eastside neighborhood with precision, shine, and care.",
    services: [
      "Residential Window Washing",
      "Commercial Glass Cleaning",
      "Hard-Water & Salt-Air Treatment",
      "Track & Screen Detailing"
    ],
    whyChoose: [
      "Trusted in Orange County for years",
      "Modern tools & spot-free finish systems",
      "Licensed, insured, and eco-safe"
    ],
    nearbyAreas: "Newport Beach • Fountain Valley • Irvine"
  },
  "cypress": {
    title: "Window Cleaning in Cypress, CA | Royalty Window Cleaning",
    metaDescription: "Residential & commercial window cleaning in Cypress, CA.",
    heading: "Shine Brighter with Royalty Window Cleaning Cypress",
    intro: "Our Cypress team handles single-story homes to large business centers — delivering streak-free windows every time.",
    services: [
      "Interior & Exterior Window Cleaning",
      "Track & Screen Detailing",
      "Skylight & Mirror Cleaning"
    ],
    whyChoose: [
      "Locally owned & operated",
      "Attention to detail, guaranteed results",
      "Same-day quotes available"
    ],
    nearbyAreas: "Buena Park • La Palma • Los Alamitos"
  },
  "dana-point": {
    title: "Window Cleaning in Dana Point, CA | Royalty Window Cleaning",
    metaDescription: "Coastal window cleaning experts in Dana Point, CA. Restore clarity and shine to ocean-view homes and businesses.",
    heading: "Local Window Cleaning Experts",
    intro: "At Royalty Window Cleaning Dana Point, we specialize in removing salt air residue and ocean spray from windows across Monarch Beach, Lantern District, and Dana Hills.",
    services: [
      "Interior & Exterior Window Cleaning",
      "Screen & Track Detailing",
      "Salt-Air & Hard-Water Treatment",
      "Post-Construction Glass Cleaning"
    ],
    whyChoose: [
      "Local technicians experienced with coastal glass care",
      "Eco-friendly, streak-free finish",
      "Licensed, insured, and professional"
    ],
    nearbyAreas: "San Clemente • Laguna Niguel • Capistrano Beach"
  },
  "fountain-valley": {
    title: "Window Cleaning in Fountain Valley, CA | Royalty Window Cleaning",
    metaDescription: "Sparkling window cleaning for Fountain Valley homes and offices. Call Royalty Window Cleaning for streak-free results.",
    heading: "Expert Window Cleaning in Fountain Valley",
    intro: "We service family homes and shopping centers near Mile Square Park, Fountain Valley High, and Ellis Avenue. Our experienced cleaners bring bright, spotless windows to every property.",
    services: [
      "Residential Window Cleaning",
      "Commercial Storefront Glass",
      "Screen & Track Detailing",
      "Hard-Water Spot Removal"
    ],
    whyChoose: [
      "Fast, friendly, reliable teams",
      "100% satisfaction guarantee",
      "Fair, transparent pricing"
    ],
    nearbyAreas: "Huntington Beach • Westminster • Costa Mesa"
  },
  "fullerton": {
    title: "Window Cleaning in Fullerton, CA | Royalty Window Cleaning",
    metaDescription: "Professional window cleaning in Fullerton for homes, schools, and offices. Trusted, affordable, and insured.",
    heading: "Fullerton's Trusted Window Cleaners",
    intro: "From downtown apartments to CSU Fullerton campus offices, we keep windows spotless across all of Fullerton.",
    services: [
      "Interior/Exterior Window Cleaning",
      "Screen & Track Cleaning",
      "Glass Restoration (Hard Water Removal)",
      "Skylight and Solar Tube Cleaning"
    ],
    whyChoose: [
      "Local Orange County expertise",
      "Safe ladder and lift equipment",
      "Affordable maintenance plans"
    ],
    nearbyAreas: "Placentia • Brea • Anaheim"
  },
  "garden-grove": {
    title: "Window Cleaning in Garden Grove, CA | Royalty Window Cleaning",
    metaDescription: "Affordable window cleaning in Garden Grove, CA for homes and commercial buildings.",
    heading: "Reliable Garden Grove Window Cleaning",
    intro: "Royalty Window Cleaning Garden Grove brightens homes and storefronts across West Garden Grove, Little Saigon, and Civic Center areas.",
    services: [
      "Residential Window Cleaning",
      "Commercial & Retail Glass Cleaning",
      "Track & Screen Detail",
      "Skylight & Solar Panel Glass"
    ],
    whyChoose: [
      "Experienced & insured team",
      "Spot-free rinse technology",
      "Satisfaction guaranteed"
    ],
    nearbyAreas: "Stanton • Westminster • Anaheim"
  },
  "huntington-beach": {
    title: "Window Cleaning in Huntington Beach, CA | Royalty Window Cleaning",
    metaDescription: "Ocean-air window cleaning specialists in Huntington Beach. Keep your coastal property spotless.",
    heading: "Shine Brighter by the Coast",
    intro: "Royalty Window Cleaning Huntington Beach handles everything from surf-side homes to Main Street storefronts — removing salt residue and keeping your glass crystal-clear.",
    services: [
      "Residential & Commercial Window Cleaning",
      "Screen, Frame, & Track Cleaning",
      "Hard-Water & Salt-Film Removal",
      "Skylight & Balcony Glass"
    ],
    whyChoose: [
      "Coastal glass specialists",
      "Eco-friendly, streak-free finish",
      "Local technicians, licensed & insured"
    ],
    nearbyAreas: "Newport Beach • Fountain Valley • Costa Mesa"
  },
  "irvine": {
    title: "Window Cleaning in Irvine, CA | Royalty Window Cleaning",
    metaDescription: "Trusted window cleaners in Irvine, CA — residential, commercial & solar glass cleaning.",
    heading: "Window Cleaning Services in Irvine",
    intro: "At Royalty Window Cleaning Irvine, we service all master-planned communities — from Woodbridge to Turtle Rock — delivering spotless, glare-free glass for homes and offices alike.",
    services: [
      "Interior & Exterior Window Cleaning",
      "Screen & Track Detailing",
      "Hard-Water Stain Removal",
      "Post-Construction Cleaning"
    ],
    whyChoose: [
      "Fast, efficient, professional service",
      "Advanced equipment for high windows",
      "Eco-friendly cleaning solutions"
    ],
    nearbyAreas: "Tustin • Lake Forest • Costa Mesa • Newport Beach"
  },
  "la-habra": {
    title: "Window Cleaning in La Habra, CA | Royalty Window Cleaning",
    metaDescription: "Local experts providing residential & commercial window cleaning in La Habra. Fast, affordable, and streak-free. Call (951) 999-4546.",
    heading: "Brighten Your View in La Habra",
    intro: "From hillside homes overlooking the Canyons to busy retail centers along Whittier Boulevard, Royalty Window Cleaning La Habra keeps every window crystal-clear.",
    services: [
      "Interior & Exterior Window Cleaning",
      "Track & Screen Detail Service",
      "Hard-Water Stain Removal",
      "Skylight and Mirror Glass Cleaning"
    ],
    whyChoose: [
      "Reliable and insured professionals",
      "Eco-safe products for lasting clarity",
      "5-Star customer reviews"
    ],
    nearbyAreas: "Brea • Fullerton • La Mirada"
  },
  "la-palma": {
    title: "Window Cleaning in La Palma, CA | Royalty Window Cleaning",
    metaDescription: "Professional window cleaning services in La Palma for homes and offices. Call Royalty Window Cleaning for sparkling results.",
    heading: "Window Cleaning Made Easy",
    intro: "Royalty Window Cleaning La Palma offers personalized service for residents and businesses near Walker Street and Moody Park. Enjoy streak-free glass that brightens every room.",
    services: [
      "Interior/Exterior Window Cleaning",
      "Track & Screen Washing",
      "Skylight & Patio Door Glass"
    ],
    whyChoose: [
      "Prompt, courteous teams",
      "Insured for residential & commercial properties",
      "Satisfaction guaranteed"
    ],
    nearbyAreas: "Cypress • Buena Park • Los Alamitos"
  },
  "laguna-beach": {
    title: "Window Cleaning in Laguna Beach, CA | Royalty Window Cleaning",
    metaDescription: "Expert coastal window cleaning in Laguna Beach. Remove salt residue and enhance ocean views with Royalty Window Cleaning.",
    heading: "Keeping Laguna Views Perfect",
    intro: "From Pacific Coast Highway homes to Downtown galleries, Royalty Window Cleaning Laguna Beach brings clarity to coastal glass while protecting against salt and sand.",
    services: [
      "Residential & Commercial Window Cleaning",
      "Salt-Air Residue Removal",
      "Glass Restoration & Sealing"
    ],
    whyChoose: [
      "Coastal glass experts",
      "Environmentally safe solutions",
      "Insured and locally operated"
    ],
    nearbyAreas: "Laguna Niguel • Dana Point • Newport Coast"
  },
  "laguna-hills": {
    title: "Window Cleaning in Laguna Hills, CA | Royalty Window Cleaning",
    metaDescription: "Laguna Hills window cleaning specialists for homes and businesses. Spotless results guaranteed.",
    heading: "Professional Window Cleaning in Laguna Hills",
    intro: "Royalty Window Cleaning Laguna Hills helps residents and offices restore clear views and natural light throughout their spaces.",
    services: [
      "Interior & Exterior Glass Washing",
      "Track, Frame & Screen Detailing",
      "Skylight and Balcony Glass"
    ],
    whyChoose: [
      "Family-owned and insured",
      "Reliable scheduling and fair pricing",
      "100% satisfaction guarantee"
    ],
    nearbyAreas: "Mission Viejo • Laguna Niguel • Aliso Viejo"
  },
  "laguna-niguel": {
    title: "Window Cleaning in Laguna Niguel, CA | Royalty Window Cleaning",
    metaDescription: "Top-rated window cleaning in Laguna Niguel for residential and commercial properties.",
    heading: "About Our Laguna Niguel Team",
    intro: "We clean coastal windows across Bear Brand Ranch, Niguel Shores, and The Summit with precision and care.",
    services: [
      "Interior & Exterior Window Cleaning",
      "Salt & Hard-Water Treatment",
      "Frame, Track, and Screen Detail"
    ],
    whyChoose: [
      "Experienced with coastal homes",
      "Safe equipment & eco-friendly solutions",
      "Always on time and professional"
    ],
    nearbyAreas: "Aliso Viejo • Dana Point • Laguna Hills"
  },
  "mission-viejo": {
    title: "Window Cleaning in Mission Viejo, CA | Royalty Window Cleaning",
    metaDescription: "Reliable window cleaners in Mission Viejo for homes, offices & HOAs. Get a free quote today.",
    heading: "Your Trusted Local Cleaners",
    intro: "Royalty Window Cleaning Mission Viejo serves neighborhoods from Saddleback College to Lake Mission Viejo, providing clear, streak-free windows for every property.",
    services: [
      "Interior/Exterior Glass Cleaning",
      "Screen, Track & Frame Detailing",
      "Skylight & Mirror Cleaning"
    ],
    whyChoose: [
      "Fully licensed and insured",
      "Friendly, professional crews",
      "100% satisfaction guaranteed"
    ],
    nearbyAreas: "Laguna Hills • Lake Forest • Aliso Viejo"
  },
  "newport-beach": {
    title: "Window Cleaning in Newport Beach, CA | Royalty Window Cleaning",
    metaDescription: "Professional window cleaning in Newport Beach for coastal homes and businesses. Spot-free finish guaranteed. Call (951) 999-4546.",
    heading: "Crystal-Clear Views on the Coast",
    intro: "Royalty Window Cleaning Newport Beach specializes in removing salt spray and ocean film from beachfront windows in Balboa Peninsula, Corona del Mar, and Newport Coast.",
    services: [
      "Interior & Exterior Window Cleaning",
      "Salt & Hard-Water Stain Treatment",
      "Frame & Screen Detailing",
      "Skylight Cleaning"
    ],
    whyChoose: [
      "Coastal window experts",
      "Fully insured & eco-friendly",
      "Guaranteed streak-free finish"
    ],
    nearbyAreas: "Costa Mesa • Huntington Beach • Irvine"
  },
  "orange": {
    title: "Window Cleaning in Orange, CA | Royalty Window Cleaning",
    metaDescription: "Top-rated window cleaning for Orange homes and offices. Locally trusted, affordable, and insured.",
    heading: "Bringing Clarity to Orange",
    intro: "From historic Old Towne district to family homes near Chapman University, Royalty Window Cleaning Orange delivers exceptional shine and service.",
    services: [
      "Residential Window Cleaning",
      "Commercial Glass Washing",
      "Track & Screen Cleaning",
      "Skylight & Mirror Care"
    ],
    whyChoose: [
      "Local technicians & fast response",
      "Affordable maintenance plans",
      "5-Star Google ratings"
    ],
    nearbyAreas: "Villa Park • Tustin • Anaheim"
  },
  "placentia": {
    title: "Window Cleaning in Placentia, CA | Royalty Window Cleaning",
    metaDescription: "Professional window cleaning in Placentia for residential and commercial properties.",
    heading: "Local Service You Can Trust",
    intro: "Royalty Window Cleaning Placentia brightens homes near Kraemer Boulevard and businesses throughout downtown Placentia.",
    services: [
      "Interior & Exterior Cleaning",
      "Track & Screen Detailing",
      "Hard-Water Stain Removal"
    ],
    whyChoose: [
      "Fully insured & locally owned",
      "Competitive rates",
      "Prompt, friendly service"
    ],
    nearbyAreas: "Yorba Linda • Fullerton • Brea"
  },
  "rancho-santa-margarita": {
    title: "Window Cleaning in Rancho Santa Margarita, CA | Royalty Window Cleaning",
    metaDescription: "Reliable window cleaning in Rancho Santa Margarita for homes and businesses. Fast quotes, eco-friendly products.",
    heading: "Sparkling Windows in Rancho Santa Margarita",
    intro: "Royalty Window Cleaning Rancho Santa Margarita provides professional care for residences around Santa Margarita Parkway and Trabuco Canyon.",
    services: [
      "Interior/Exterior Window Washing",
      "Track & Screen Detailing",
      "Skylight & Mirror Glass Cleaning"
    ],
    whyChoose: [
      "Trusted local cleaners",
      "Safe for pets and landscaping",
      "Licensed & insured"
    ],
    nearbyAreas: "Mission Viejo • Ladera Ranch • Coto de Caza"
  },
  "san-clemente": {
    title: "Window Cleaning in San Clemente, CA | Royalty Window Cleaning",
    metaDescription: "Coastal window cleaning experts in San Clemente. Keep your ocean-view glass spotless and protected.",
    heading: "Bring Back the Shine",
    intro: "Royalty Window Cleaning San Clemente removes salt spray and buildup from seaside properties in Talega, Marblehead, and near the Pier. We help coastal homeowners enjoy clear views year-round.",
    services: [
      "Interior & Exterior Window Cleaning",
      "Salt-Air Film & Hard-Water Removal",
      "Screen & Frame Detailing",
      "Skylight & Mirror Cleaning"
    ],
    whyChoose: [
      "Coastal glass specialists",
      "Safe, eco-friendly products",
      "Licensed, insured, and trusted"
    ],
    nearbyAreas: "Dana Point • San Juan Capistrano • Laguna Niguel"
  },
  "san-juan-capistrano": {
    title: "Window Cleaning in San Juan Capistrano, CA | Royalty Window Cleaning",
    metaDescription: "Trusted window cleaners in San Juan Capistrano for homes, offices, and historic buildings.",
    heading: "Preserving Historic Views",
    intro: "From Mission-area shops to new hillside developments, Royalty Window Cleaning San Juan Capistrano brings clarity and care to every glass surface.",
    services: [
      "Residential & Commercial Window Cleaning",
      "Screen & Track Detailing",
      "Glass Restoration & Hard-Water Removal"
    ],
    whyChoose: [
      "Experienced with delicate, historic glass",
      "Attention to detail",
      "Guaranteed satisfaction"
    ],
    nearbyAreas: "Dana Point • Ladera Ranch • Mission Viejo"
  },
  "santa-ana": {
    title: "Window Cleaning in Santa Ana, CA | Royalty Window Cleaning",
    metaDescription: "Professional window cleaning in Santa Ana for residential and commercial properties.",
    heading: "Window Cleaning Done Right",
    intro: "Royalty Window Cleaning Santa Ana serves downtown offices, civic centers, and neighborhoods near South Coast Metro — providing spotless windows and consistent reliability.",
    services: [
      "Interior/Exterior Glass Cleaning",
      "Commercial Storefront Glass",
      "Track & Screen Cleaning"
    ],
    whyChoose: [
      "Trusted by homeowners & property managers",
      "Licensed & insured",
      "Prompt, affordable service"
    ],
    nearbyAreas: "Garden Grove • Tustin • Orange"
  },
  "seal-beach": {
    title: "Window Cleaning in Seal Beach, CA | Royalty Window Cleaning",
    metaDescription: "Coastal window cleaning for Seal Beach homes & businesses. Remove salt film & enjoy spotless ocean views.",
    heading: "Your Coastal Window Experts",
    intro: "Royalty Window Cleaning Seal Beach restores brilliance to oceanfront homes and quaint Main Street shops with precision care.",
    services: [
      "Interior & Exterior Cleaning",
      "Salt-Air & Hard-Water Treatment",
      "Frame & Track Detailing"
    ],
    whyChoose: [
      "Coastal-grade detergents",
      "Friendly, reliable technicians",
      "Fully insured"
    ],
    nearbyAreas: "Huntington Beach • Long Beach • Los Alamitos"
  },
  "stanton": {
    title: "Window Cleaning in Stanton, CA | Royalty Window Cleaning",
    metaDescription: "Affordable, professional window cleaning in Stanton for homes & storefronts.",
    heading: "Bright Windows for Every Property",
    intro: "Royalty Window Cleaning Stanton serves residential neighborhoods and small businesses near Beach Boulevard with spotless results and dependable service.",
    services: [
      "Residential & Commercial Window Cleaning",
      "Track & Screen Detailing",
      "Skylight & Mirror Cleaning"
    ],
    whyChoose: [
      "Prompt scheduling",
      "Licensed & insured",
      "Transparent pricing"
    ],
    nearbyAreas: "Garden Grove • Cypress • Anaheim"
  },
  "tustin": {
    title: "Window Cleaning in Tustin, CA | Royalty Window Cleaning",
    metaDescription: "Window cleaning services in Tustin for residential & commercial clients.",
    heading: "Crystal-Clear Windows in Tustin",
    intro: "Royalty Window Cleaning Tustin serves Old Town, Tustin Ranch, and Legacy neighborhoods with streak-free cleaning and expert care.",
    services: [
      "Interior & Exterior Window Cleaning",
      "Screen & Track Detailing",
      "Hard-Water Stain Removal"
    ],
    whyChoose: [
      "Professional, uniformed cleaners",
      "Guaranteed satisfaction",
      "Eco-friendly glass treatment"
    ],
    nearbyAreas: "Irvine • Orange • Santa Ana"
  },
  "villa-park": {
    title: "Window Cleaning in Villa Park, CA | Royalty Window Cleaning",
    metaDescription: "Residential and estate-level window cleaning in Villa Park, CA. High-quality, discreet service for homeowners.",
    heading: "Exclusive Window Care for Villa Park Homes",
    intro: "Royalty Window Cleaning Villa Park provides meticulous cleaning for luxury residences and hillside estates, ensuring flawless glass and preserved privacy.",
    services: [
      "Interior & Exterior Window Cleaning",
      "Track & Screen Detail Service",
      "Skylight and Glass Door Cleaning"
    ],
    whyChoose: [
      "Personalized white-glove service",
      "Experienced technicians with insurance coverage",
      "Eco-safe solutions for delicate surfaces"
    ],
    nearbyAreas: "Orange • Tustin • Anaheim Hills"
  },
  "westminster": {
    title: "Window Cleaning in Westminster, CA | Royalty Window Cleaning",
    metaDescription: "Professional window cleaning for Westminster homes and businesses. Trusted local technicians.",
    heading: "Reliable Window Cleaning in Westminster",
    intro: "Royalty Window Cleaning Westminster brightens homes, shops, and community centers from Little Saigon to Golden West College with brilliant, streak-free results.",
    services: [
      "Residential & Commercial Glass Cleaning",
      "Screen, Track & Frame Detailing",
      "Skylight and Mirror Cleaning"
    ],
    whyChoose: [
      "Licensed, insured & local",
      "Affordable maintenance plans",
      "100% satisfaction guaranteed"
    ],
    nearbyAreas: "Garden Grove • Huntington Beach • Fountain Valley"
  },
  "yorba-linda": {
    title: "Window Cleaning in Yorba Linda, CA | Royalty Window Cleaning",
    metaDescription: "Brighten your Yorba Linda home or office with Royalty Window Cleaning. Locally owned and trusted across Orange County.",
    heading: "The Land of Gracious Living Deserves Spotless Glass",
    intro: "Royalty Window Cleaning Yorba Linda serves residential and commercial clients throughout East Lake Village, Bryant Ranch, and Hidden Hills, keeping windows clear and inviting.",
    services: [
      "Interior & Exterior Window Cleaning",
      "Screen & Track Detailing",
      "Hard-Water Stain Removal",
      "Skylight and Mirror Cleaning"
    ],
    whyChoose: [
      "Locally based Orange County team",
      "Safe eco-friendly cleaning agents",
      "100% customer satisfaction"
    ],
    nearbyAreas: "Placentia • Brea • Anaheim Hills"
  },
  "capistrano-beach": {
    title: "Window Cleaning in Capistrano Beach, CA | Royalty Window Cleaning",
    metaDescription: "Coastal window cleaning in Capistrano Beach for beachfront homes and businesses. Remove salt residue with expert care.",
    heading: "Beachfront Window Cleaning Experts",
    intro: "Royalty Window Cleaning Capistrano Beach specializes in coastal glass care, removing salt spray and ocean mist from beautiful beach homes and properties.",
    services: [
      "Interior & Exterior Window Cleaning",
      "Salt-Air & Ocean Spray Removal",
      "Screen & Track Detailing",
      "Glass Restoration"
    ],
    whyChoose: [
      "Coastal glass specialists",
      "Eco-friendly, streak-free finish",
      "Licensed, insured & experienced"
    ],
    nearbyAreas: "Dana Point • San Clemente • San Juan Capistrano"
  },
  "corona-del-mar": {
    title: "Window Cleaning in Corona Del Mar, CA | Royalty Window Cleaning",
    metaDescription: "Premium window cleaning in Corona Del Mar for luxury coastal homes. Expert salt-air treatment and spotless results.",
    heading: "Luxury Window Care in Corona Del Mar",
    intro: "Royalty Window Cleaning Corona Del Mar provides premium service for coastal estates, removing salt air residue while maintaining the highest standards of care.",
    services: [
      "Residential & Commercial Window Cleaning",
      "Salt-Air Residue Removal",
      "Hard-Water Stain Treatment",
      "Premium Glass Care"
    ],
    whyChoose: [
      "White-glove service for luxury homes",
      "Experienced with coastal properties",
      "100% satisfaction guaranteed"
    ],
    nearbyAreas: "Newport Beach • Newport Coast • Laguna Beach"
  },
  "coto-de-caza": {
    title: "Window Cleaning in Coto de Caza, CA | Royalty Window Cleaning",
    metaDescription: "Professional window cleaning in Coto de Caza for estate homes and gated communities. Discreet, reliable service.",
    heading: "Estate Window Cleaning in Coto de Caza",
    intro: "Royalty Window Cleaning Coto de Caza serves luxury homes and estate properties with personalized, professional window cleaning services.",
    services: [
      "Interior & Exterior Window Cleaning",
      "Track & Screen Detailing",
      "Skylight & Glass Door Cleaning",
      "Estate-Level Service"
    ],
    whyChoose: [
      "Discreet, professional service",
      "Experienced with luxury homes",
      "Licensed, insured & background-checked"
    ],
    nearbyAreas: "Rancho Santa Margarita • Mission Viejo • Trabuco Canyon"
  },
  "foothill-ranch": {
    title: "Window Cleaning in Foothill Ranch, CA | Royalty Window Cleaning",
    metaDescription: "Reliable window cleaning in Foothill Ranch for homes and businesses. Professional service with guaranteed results.",
    heading: "Professional Window Cleaning in Foothill Ranch",
    intro: "Royalty Window Cleaning Foothill Ranch delivers spotless windows for residential communities and businesses throughout the area.",
    services: [
      "Residential Window Cleaning",
      "Commercial Glass Cleaning",
      "Screen & Track Detailing",
      "Hard-Water Stain Removal"
    ],
    whyChoose: [
      "Prompt, reliable service",
      "Affordable rates",
      "100% satisfaction guaranteed"
    ],
    nearbyAreas: "Lake Forest • Portola Hills • Rancho Santa Margarita"
  },
  "laguna-woods": {
    title: "Window Cleaning in Laguna Woods, CA | Royalty Window Cleaning",
    metaDescription: "Window cleaning in Laguna Woods for retirement communities and homes. Gentle, professional service.",
    heading: "Trusted Window Cleaning in Laguna Woods",
    intro: "Royalty Window Cleaning Laguna Woods provides careful, professional window cleaning for retirement communities and residential properties.",
    services: [
      "Interior & Exterior Window Cleaning",
      "Senior-Friendly Service",
      "Screen & Track Cleaning",
      "Regular Maintenance Plans"
    ],
    whyChoose: [
      "Experienced with retirement communities",
      "Friendly, courteous technicians",
      "Flexible scheduling"
    ],
    nearbyAreas: "Laguna Hills • Aliso Viejo • Lake Forest"
  },
  "lake-forest": {
    title: "Window Cleaning in Lake Forest, CA | Royalty Window Cleaning",
    metaDescription: "Professional window cleaning in Lake Forest for homes and offices. Fast, reliable, and affordable service.",
    heading: "Lake Forest Window Cleaning Experts",
    intro: "Royalty Window Cleaning Lake Forest serves residential communities and businesses with professional, streak-free window cleaning.",
    services: [
      "Residential Window Cleaning",
      "Commercial Glass Washing",
      "Track & Screen Detailing",
      "Skylight Cleaning"
    ],
    whyChoose: [
      "Local Orange County team",
      "Competitive pricing",
      "Satisfaction guaranteed"
    ],
    nearbyAreas: "Mission Viejo • Foothill Ranch • Laguna Hills"
  },
  "los-alamitos": {
    title: "Window Cleaning in Los Alamitos, CA | Royalty Window Cleaning",
    metaDescription: "Window cleaning in Los Alamitos for residential and commercial properties. Professional results every time.",
    heading: "Professional Window Cleaning in Los Alamitos",
    intro: "Royalty Window Cleaning Los Alamitos brightens homes and businesses throughout the community with expert window cleaning services.",
    services: [
      "Interior & Exterior Window Cleaning",
      "Commercial Storefront Glass",
      "Screen & Track Cleaning",
      "Regular Maintenance"
    ],
    whyChoose: [
      "Licensed & insured",
      "Experienced local team",
      "Fair, transparent pricing"
    ],
    nearbyAreas: "Seal Beach • Cypress • Rossmoor"
  },
  "los-flores": {
    title: "Window Cleaning in Los Flores, CA | Royalty Window Cleaning",
    metaDescription: "Window cleaning in Los Flores for homes and properties. Quality service with attention to detail.",
    heading: "Quality Window Cleaning in Los Flores",
    intro: "Royalty Window Cleaning Los Flores provides thorough, professional window cleaning for homes and properties in this beautiful community.",
    services: [
      "Residential Window Cleaning",
      "Interior & Exterior Service",
      "Screen & Track Detailing",
      "Hard-Water Removal"
    ],
    whyChoose: [
      "Attention to detail",
      "Reliable scheduling",
      "Eco-friendly products"
    ],
    nearbyAreas: "Rancho Santa Margarita • Mission Viejo • Las Flores"
  },
  "newport-coast": {
    title: "Window Cleaning in Newport Coast, CA | Royalty Window Cleaning",
    metaDescription: "Luxury window cleaning in Newport Coast for coastal estates. Premium service with ocean-view expertise.",
    heading: "Premium Coastal Window Care",
    intro: "Royalty Window Cleaning Newport Coast specializes in luxury coastal properties, providing meticulous care for ocean-view estates and hillside homes.",
    services: [
      "Luxury Residential Window Cleaning",
      "Salt-Air & Hard-Water Treatment",
      "Glass Restoration",
      "Estate-Level Service"
    ],
    whyChoose: [
      "White-glove service for luxury properties",
      "Coastal glass experts",
      "Discreet, professional technicians"
    ],
    nearbyAreas: "Newport Beach • Corona Del Mar • Laguna Beach"
  },
  "silverado": {
    title: "Window Cleaning in Silverado, CA | Royalty Window Cleaning",
    metaDescription: "Window cleaning in Silverado Canyon for mountain and rural homes. Professional service for unique properties.",
    heading: "Mountain Home Window Cleaning",
    intro: "Royalty Window Cleaning Silverado serves canyon and mountain homes with professional window cleaning adapted to unique rural properties.",
    services: [
      "Residential Window Cleaning",
      "Rural Property Service",
      "Screen & Track Cleaning",
      "Hard-Water & Dust Removal"
    ],
    whyChoose: [
      "Experience with rural properties",
      "Flexible scheduling",
      "Licensed & insured"
    ],
    nearbyAreas: "Silverado Canyon • Modjeska Canyon • Irvine"
  },
  "talega": {
    title: "Window Cleaning in Talega, CA | Royalty Window Cleaning",
    metaDescription: "Window cleaning in Talega for modern homes and communities. Professional, reliable service.",
    heading: "Talega Window Cleaning Services",
    intro: "Royalty Window Cleaning Talega serves this master-planned community with professional window cleaning for modern homes and properties.",
    services: [
      "Residential Window Cleaning",
      "Interior & Exterior Service",
      "Screen & Track Detailing",
      "Regular Maintenance Plans"
    ],
    whyChoose: [
      "HOA-approved service",
      "Professional, uniformed crews",
      "100% satisfaction guaranteed"
    ],
    nearbyAreas: "San Clemente • San Juan Capistrano • Dana Point"
  },
  "trabuco-canyon": {
    title: "Window Cleaning in Trabuco Canyon, CA | Royalty Window Cleaning",
    metaDescription: "Window cleaning in Trabuco Canyon for hillside homes and rural properties. Expert service for unique locations.",
    heading: "Canyon & Hillside Window Cleaning",
    intro: "Royalty Window Cleaning Trabuco Canyon provides expert window cleaning for canyon homes, hillside properties, and rural estates.",
    services: [
      "Residential Window Cleaning",
      "Hillside & Canyon Properties",
      "Hard-Water & Dust Removal",
      "Screen & Track Cleaning"
    ],
    whyChoose: [
      "Experienced with hillside properties",
      "Safe equipment for difficult access",
      "Reliable, professional service"
    ],
    nearbyAreas: "Rancho Santa Margarita • Coto de Caza • Mission Viejo"
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
