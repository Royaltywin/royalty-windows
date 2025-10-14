import { supabase } from "@/integrations/supabase/client";
import { QuoteFormData } from "@/types/quote";

export const uploadQuotePhoto = async (file: File, quoteNumber: string, index: number): Promise<string> => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${quoteNumber}/photo-${index}.${fileExt}`;

  const { error: uploadError } = await supabase.storage
    .from('quote-photos')
    .upload(fileName, file, {
      upsert: true
    });

  if (uploadError) throw uploadError;

  const { data: { publicUrl } } = supabase.storage
    .from('quote-photos')
    .getPublicUrl(fileName);

  return publicUrl;
};

export const submitQuoteRequest = async (formData: QuoteFormData) => {
  // Generate unique quote number
  const quoteNumber = `Q-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

  // Upload photos if any
  let photoUrls: string[] = [];
  if (formData.photos && formData.photos.length > 0) {
    photoUrls = await Promise.all(
      formData.photos.map((photo, index) => uploadQuotePhoto(photo, quoteNumber, index))
    );
  }

  // Calculate total solar panels
  const totalSolarPanels = 
    (formData.solarPanelsGround || 0) +
    (formData.solarPanelsFirstStory || 0) +
    (formData.solarPanelsSecondStory || 0);

  // Insert into database
  const { data, error } = await supabase
    .from('quote_requests')
    .insert({
      quote_number: quoteNumber,
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      sms_consent: formData.smsConsent,
      is_current_customer: formData.isCurrentCustomer,
      referral_source: formData.referralSource,
      referral_name: formData.referralName,
      property_address: formData.propertyAddress,
      property_city: formData.propertyCity,
      property_state: formData.propertyState,
      property_zip: formData.propertyZip,
      property_lat: formData.propertyLat,
      property_lng: formData.propertyLng,
      year_built: formData.yearBuilt,
      home_sqft: formData.homeSqft,
      property_notes: formData.propertyNotes,
      primary_services: formData.primaryServices,
      
      // Window cleaning
      window_stories: formData.windowStories,
      window_types: formData.windowTypes,
      window_count: formData.windowCount,
      window_sliding_doors: formData.windowSlidingDoors,
      last_cleaning: formData.lastCleaning,
      has_hard_water_spots: formData.hasHardWaterSpots,
      patio_cover_type: formData.patioCoverType,
      has_sunroom: formData.hasSunroom,
      
      // Pressure washing
      pressure_surfaces: formData.pressureSurfaces,
      pressure_structures: formData.pressureStructures,
      
      // Exterior wash
      exterior_wash_areas: formData.exteriorWashAreas,
      
      // Solar panels
      solar_stories: formData.solarStories,
      solar_panels_ground: formData.solarPanelsGround,
      solar_panels_first_story: formData.solarPanelsFirstStory,
      solar_panels_second_story: formData.solarPanelsSecondStory,
      total_solar_panels: totalSolarPanels > 0 ? totalSolarPanels : null,
      
      // Gutters
      has_gutter_guards: formData.hasGutterGuards,
      
      // Roof
      roof_type: formData.roofType,
      roof_stories: formData.roofStories,
      
      // Blinds
      blind_types: formData.blindTypes,
      blinds_quantity: formData.blindsQuantity,
      blinds_over_6ft: formData.blindsOver6ft,
      
      // Add-ons
      addon_services: formData.addonServices,
      
      // Photos
      photo_urls: photoUrls.length > 0 ? photoUrls : null,
      
      // Store full form as JSONB for reference
      form_data: formData,
      
      status: 'new'
    })
    .select()
    .single();

  if (error) throw error;
  return data;
};
