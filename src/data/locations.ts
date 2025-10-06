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
      "Adelanto", "Apple Valley", "Big Bear Lake", "Chino", "Chino Hills",
      "Colton", "Crestline", "Fontana", "Grand Terrace", "Hesperia",
      "Highland", "Lake Arrowhead", "Loma Linda", "Mentone", "Montclair",
      "Ontario", "Rancho Cucamonga", "Redlands", "Rialto", "San Bernardino",
      "Upland", "Victorville", "Yucaipa", "Wrightwood", "Running Springs",
      "Lucerne Valley", "Pinon Hills", "Phelan"
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
      "Los Angeles", "Long Beach", "Glendale", "Santa Monica", "Burbank",
      "Pasadena", "Torrance", "Palmdale", "Lancaster", "Pomona", "El Monte",
      "Downey", "West Covina", "Norwalk", "Whittier", "Lakewood",
      "Huntington Park", "Inglewood", "Culver City", "Redondo Beach",
      "Manhattan Beach", "Hermosa Beach", "Beverly Hills", "Santa Clarita",
      "San Dimas", "North Hollywood", "Northridge", "Van Nuys",
      "Sherman Oaks", "Encino"
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
  { key: "construction-cleanup", name: "Construction Cleanup" }
];

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
