// Enhanced local information for counties and cities

export interface CountyLocalInfo {
  beaches?: string[];
  thingsToDo: { name: string; link: string }[];
  government: { name: string; link: string }[];
  neighborhoods: string[];
  eateries: { name: string; type: string; link?: string }[];
  nightlife: { name: string; link?: string }[];
  attractions: { name: string; description: string; link?: string }[];
  themeParksSports?: { name: string; link?: string }[];
}

export const countyLocalInfo: Record<string, CountyLocalInfo> = {
  orange: {
    beaches: ['Huntington Beach', 'Newport Beach', 'Laguna Beach', 'Seal Beach', 'Dana Point'],
    thingsToDo: [
      { name: 'Disneyland Resort', link: 'https://disneyland.disney.go.com/' },
      { name: 'Knott\'s Berry Farm', link: 'https://www.knotts.com/' },
      { name: 'South Coast Plaza', link: 'https://www.southcoastplaza.com/' },
      { name: 'Mission San Juan Capistrano', link: 'https://www.missionsjc.com/' },
      { name: 'Crystal Cove State Park', link: 'https://www.parks.ca.gov/' },
    ],
    government: [
      { name: 'Orange County Government', link: 'https://www.ocgov.com/' },
      { name: 'OC Parks', link: 'https://www.ocparks.com/' },
      { name: 'OC Public Works', link: 'https://www.ocpublicworks.com/' },
    ],
    neighborhoods: ['Irvine Spectrum', 'Fashion Island', 'The District', 'Old Towne Orange', 'Laguna Art District'],
    eateries: [
      { name: 'The Ramos House Cafe', type: 'American', link: '#' },
      { name: 'Mastro\'s Steakhouse', type: 'Steakhouse', link: '#' },
      { name: 'Marché Moderne', type: 'French', link: '#' },
    ],
    nightlife: [
      { name: 'The Camp', link: '#' },
      { name: 'Downtown Disney', link: '#' },
      { name: 'The Lab Anti-Mall', link: '#' },
    ],
    attractions: [
      { name: 'Balboa Island', description: 'Charming island community with unique shops and dining', link: '#' },
      { name: 'Irvine Spectrum Center', description: 'Premier shopping and entertainment destination', link: '#' },
      { name: 'Orange County Great Park', description: 'Massive park with balloon rides and sports facilities', link: '#' },
    ],
    themeParksSports: [
      { name: 'Disneyland', link: 'https://disneyland.disney.go.com/' },
      { name: 'Knott\'s Berry Farm', link: 'https://www.knotts.com/' },
      { name: 'Angel Stadium', link: 'https://www.mlb.com/angels' },
      { name: 'Honda Center', link: 'https://www.hondacenter.com/' },
    ],
  },
  riverside: {
    thingsToDo: [
      { name: 'Lake Perris State Recreation Area', link: 'https://www.parks.ca.gov/' },
      { name: 'Mission Inn Museum', link: 'https://www.missioninnmuseum.org/' },
      { name: 'Temecula Wine Country', link: 'https://www.temeculawines.org/' },
      { name: 'Joshua Tree National Park', link: 'https://www.nps.gov/jotr/' },
    ],
    government: [
      { name: 'Riverside County Government', link: 'https://www.rivco.org/' },
      { name: 'County Parks', link: 'https://www.rivcoparks.org/' },
    ],
    neighborhoods: ['Downtown Riverside', 'Temecula Wine Country', 'Palm Desert Village', 'Old Town Murrieta'],
    eateries: [
      { name: 'Cork Fire Kitchen', type: 'Mediterranean', link: '#' },
      { name: 'Pujol', type: 'Mexican', link: '#' },
      { name: 'Las Campanas', type: 'Mexican', link: '#' },
    ],
    nightlife: [
      { name: 'Temecula Wineries', link: '#' },
      { name: 'Downtown Riverside', link: '#' },
    ],
    attractions: [
      { name: 'Mission Inn', description: 'Historic luxury hotel and architectural landmark', link: '#' },
      { name: 'Palm Springs Aerial Tramway', description: 'Rotating tram to Mount San Jacinto', link: '#' },
    ],
  },
  sanBernardino: {
    thingsToDo: [
      { name: 'Big Bear Lake', link: 'https://www.bigbear.com/' },
      { name: 'Lake Arrowhead', link: 'https://www.lakearrowhead.net/' },
      { name: 'Route 66 Museum', link: 'https://www.route66museum.org/' },
      { name: 'San Bernardino National Forest', link: 'https://www.fs.usda.gov/' },
    ],
    government: [
      { name: 'San Bernardino County', link: 'https://www.sbcounty.gov/' },
      { name: 'Regional Parks', link: 'https://www.sbcountyparks.com/' },
    ],
    neighborhoods: ['Rancho Cucamonga Town Square', 'Victoria Gardens', 'Downtown Redlands', 'Big Bear Village'],
    eateries: [
      { name: 'The State', type: 'American', link: '#' },
      { name: 'Himalaya Restaurant', type: 'Indian', link: '#' },
    ],
    nightlife: [
      { name: 'Victoria Gardens', link: '#' },
      { name: 'Big Bear Village', link: '#' },
    ],
    attractions: [
      { name: 'Big Bear Lake', description: 'Year-round mountain resort with skiing and water sports', link: '#' },
      { name: 'Ontario Mills', description: 'Major shopping outlet destination', link: '#' },
    ],
  },
  sanDiego: {
    beaches: ['La Jolla Cove', 'Pacific Beach', 'Mission Beach', 'Coronado Beach', 'Del Mar'],
    thingsToDo: [
      { name: 'San Diego Zoo', link: 'https://zoo.sandiegozoo.org/' },
      { name: 'Balboa Park', link: 'https://www.balboapark.org/' },
      { name: 'USS Midway Museum', link: 'https://www.midway.org/' },
      { name: 'La Jolla Cove', link: 'https://www.lajollabythesea.com/' },
    ],
    government: [
      { name: 'San Diego County', link: 'https://www.sandiegocounty.gov/' },
      { name: 'County Parks', link: 'https://www.sdparks.org/' },
    ],
    neighborhoods: ['Gaslamp Quarter', 'Little Italy', 'Pacific Beach', 'La Jolla Village', 'Coronado Island'],
    eateries: [
      { name: 'George\'s at the Cove', type: 'Seafood', link: '#' },
      { name: 'Juniper & Ivy', type: 'American', link: '#' },
    ],
    nightlife: [
      { name: 'Gaslamp Quarter', link: '#' },
      { name: 'Pacific Beach', link: '#' },
    ],
    attractions: [
      { name: 'Balboa Park', description: 'Cultural park with museums and gardens', link: '#' },
      { name: 'Old Town San Diego', description: 'Historic birthplace of California', link: '#' },
    ],
    themeParksSports: [
      { name: 'SeaWorld San Diego', link: 'https://seaworld.com/san-diego/' },
      { name: 'LEGOLAND California', link: 'https://www.legoland.com/california/' },
      { name: 'Petco Park', link: 'https://www.mlb.com/padres' },
    ],
  },
  losAngeles: {
    beaches: ['Santa Monica', 'Venice Beach', 'Manhattan Beach', 'Hermosa Beach', 'Malibu'],
    thingsToDo: [
      { name: 'Hollywood Walk of Fame', link: 'https://walkoffame.com/' },
      { name: 'Griffith Observatory', link: 'https://griffithobservatory.org/' },
      { name: 'Getty Center', link: 'https://www.getty.edu/' },
      { name: 'Universal Studios Hollywood', link: 'https://www.universalstudioshollywood.com/' },
    ],
    government: [
      { name: 'LA County Government', link: 'https://www.lacounty.gov/' },
      { name: 'LA County Parks', link: 'https://parks.lacounty.gov/' },
    ],
    neighborhoods: ['Hollywood', 'Beverly Hills', 'Santa Monica', 'Venice', 'Downtown LA', 'Pasadena'],
    eateries: [
      { name: 'Bestia', type: 'Italian', link: '#' },
      { name: 'République', type: 'French', link: '#' },
      { name: 'Guelaguetza', type: 'Oaxacan', link: '#' },
    ],
    nightlife: [
      { name: 'Sunset Strip', link: '#' },
      { name: 'Downtown LA Arts District', link: '#' },
      { name: 'Santa Monica Third Street Promenade', link: '#' },
    ],
    attractions: [
      { name: 'Hollywood Sign', description: 'Iconic landmark overlooking Los Angeles', link: '#' },
      { name: 'Venice Boardwalk', description: 'Vibrant beach boardwalk with street performers', link: '#' },
    ],
    themeParksSports: [
      { name: 'Universal Studios Hollywood', link: 'https://www.universalstudioshollywood.com/' },
      { name: 'Dodger Stadium', link: 'https://www.mlb.com/dodgers' },
      { name: 'SoFi Stadium', link: 'https://www.sofistadium.com/' },
    ],
  },
  ventura: {
    beaches: ['Ventura Beach', 'Port Hueneme Beach', 'Malibu Beach'],
    thingsToDo: [
      { name: 'Channel Islands National Park', link: 'https://www.nps.gov/chis/' },
      { name: 'Ventura Harbor', link: 'https://www.venturaharbor.com/' },
      { name: 'Ojai Valley', link: 'https://www.ojaivalley.com/' },
    ],
    government: [
      { name: 'Ventura County Government', link: 'https://www.ventura.org/' },
      { name: 'County Parks', link: 'https://www.ventura.org/parks/' },
    ],
    neighborhoods: ['Downtown Ventura', 'Ojai', 'Thousand Oaks', 'Camarillo Premium Outlets'],
    eateries: [
      { name: 'Brophy Bros.', type: 'Seafood', link: '#' },
      { name: 'The Jolly Oyster', type: 'Seafood', link: '#' },
    ],
    nightlife: [
      { name: 'Ventura Harbor Village', link: '#' },
      { name: 'Downtown Ventura', link: '#' },
    ],
    attractions: [
      { name: 'Channel Islands', description: 'Protected islands with unique wildlife', link: '#' },
      { name: 'Ojai Valley', description: 'Scenic valley known for wellness and arts', link: '#' },
    ],
  },
};

export interface CityLocalInfo {
  thingsToDo: { name: string; link: string }[];
  neighborhoods: string[];
  eateries: string[];
  nightlife: string[];
  attractions: string[];
}

export const cityLocalInfo: Record<string, CityLocalInfo> = {
  irvine: {
    thingsToDo: [
      { name: 'Irvine Spectrum Center', link: 'https://www.irvinespectrumcenter.com/' },
      { name: 'Orange County Great Park', link: 'https://www.ocgp.org/' },
    ],
    neighborhoods: ['Irvine Spectrum', 'Woodbridge', 'Turtle Rock', 'Northwood'],
    eateries: ['Orange Hill Restaurant', 'A Restaurant', 'Cucina Enoteca'],
    nightlife: ['The District at Tustin Legacy', 'Irvine Spectrum Center'],
    attractions: ['Irvine Spectrum Center', 'Orange County Great Park', 'Boomers!'],
  },
  // Add more cities as needed
};
