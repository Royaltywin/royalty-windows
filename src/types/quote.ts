export interface QuoteFormData {
  // Contact Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  smsConsent: boolean;
  isCurrentCustomer: boolean;
  referralSource?: string;
  referralName?: string;

  // Property Details
  propertyAddress: string;
  propertyCity: string;
  propertyState: string;
  propertyZip: string;
  propertyLat?: number;
  propertyLng?: number;
  yearBuilt?: number;
  homeSqft?: number;
  propertyNotes?: string;

  // Primary Services
  primaryServices: string[];

  // Window Cleaning
  windowStories?: string;
  windowTypes?: string[];
  windowCount?: number;
  windowSlidingDoors?: number;
  calculateWindowCount?: boolean;
  lastCleaning?: string;
  hasHardWaterSpots?: boolean;
  patioCoverType?: string;
  hasSunroom?: boolean;

  // Pressure Washing
  pressureSurfaces?: string[];
  pressureStructures?: string[];

  // Exterior House Wash
  exteriorWashAreas?: string[];

  // Solar Panel Cleaning
  solarStories?: string;
  solarPanelsGround?: number;
  solarPanelsFirstStory?: number;
  solarPanelsSecondStory?: number;

  // Gutter Cleaning
  hasGutterGuards?: boolean;

  // Roof Cleaning
  roofType?: string;
  roofStories?: string;

  // Blinds Cleaning
  blindTypes?: string[];
  blindsQuantity?: number;
  blindsOver6ft?: number;

  // Add-on Services
  addonServices?: string[];

  // Photos
  photos?: File[];
}

export const WINDOW_TYPES = [
  { id: "dual-pane", label: "Dual Pane Windows" },
  { id: "sliding-door-2", label: "2-Panel Sliding Door" },
  { id: "three-pane", label: "Three Pane Windows" },
  { id: "french-windows", label: "French Windows" },
  { id: "french-doors", label: "French Doors" },
  { id: "crank-open", label: "Crank Open Windows" },
  { id: "stacked", label: "Stacked Windows" },
  { id: "garden", label: "Garden Windows" },
  { id: "garage-glass", label: "Garage Door Glass" },
  { id: "glass-fence", label: "Glass Fence" },
  { id: "sliding-door-3", label: "3-Panel Sliding Door" },
  { id: "sliding-door-4", label: "4-Panel Sliding Door" }
];

export const ROOF_TYPES = [
  { id: "concrete-spanish", label: "Concrete Tiles - Spanish" },
  { id: "concrete-villa", label: "Concrete Tiles - Villa" },
  { id: "concrete-rough", label: "Concrete Tiles - Rough Surface" },
  { id: "concrete-smooth", label: "Concrete Tiles - Smooth Surface" },
  { id: "clay", label: "Clay Tiles" },
  { id: "metal", label: "Metal Roofs" },
  { id: "wood-shake", label: "Wood Shake" },
  { id: "asphalt", label: "Asphalt Shingles" },
  { id: "tpo", label: "Cool Roofs (TPO)" }
];

export const BLIND_TYPES = [
  { id: "faux-wood", label: "Faux Wood Blinds (Vinyl/Plastic)" },
  { id: "shutters", label: "Shutters" },
  { id: "vertical", label: "Vertical Blinds" },
  { id: "silhouettes", label: "Silhouettes" },
  { id: "real-wood", label: "Real Wood Blinds" },
  { id: "aluminum", label: "Aluminum Blinds" },
  { id: "honeycomb", label: "Honeycomb/Cell Blinds" }
];

export const REFERRAL_SOURCES = [
  "Google Search",
  "Facebook",
  "Instagram",
  "Yelp",
  "Neighbor/Friend Referral",
  "Saw Your Truck",
  "Repeat Customer",
  "Other"
];
