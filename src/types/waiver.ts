export interface WaiverFormData {
  // Service Details
  waiverType: string;
  servicesPerformed: string[];
  serviceDate: Date;

  // Customer Information
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  propertyAddress: string;

  // Signatures
  customerSignature: string; // base64 data URL
  customerSignatureDate?: Date;
  technicianName?: string;
  technicianSignature?: string; // base64 data URL
  technicianSignatureDate?: Date;

  // Photos
  beforePhotos: File[];
  afterPhotos: File[];

  // Agreement
  agreedToTerms: boolean;
}

export const WAIVER_TYPES = [
  "Window Cleaning",
  "Pressure Washing",
  "Solar Panel Cleaning",
  "Roof Cleaning",
  "Gutter Cleaning",
  "Blinds Cleaning",
  "General Service"
];
