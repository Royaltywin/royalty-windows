-- Create quote_requests table
CREATE TABLE IF NOT EXISTS public.quote_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  quote_number TEXT UNIQUE NOT NULL,
  
  -- Contact Information
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  sms_consent BOOLEAN DEFAULT false,
  is_current_customer BOOLEAN DEFAULT false,
  referral_source TEXT,
  referral_name TEXT,
  
  -- Property Details
  property_address TEXT NOT NULL,
  property_city TEXT,
  property_state TEXT,
  property_zip TEXT,
  property_lat DECIMAL,
  property_lng DECIMAL,
  year_built INTEGER,
  home_sqft INTEGER,
  property_notes TEXT,
  
  -- Primary Services (array of selected services)
  primary_services TEXT[] NOT NULL,
  
  -- Window Cleaning Details
  window_stories TEXT,
  window_types TEXT[],
  window_count INTEGER,
  window_sliding_doors INTEGER,
  last_cleaning TEXT,
  has_hard_water_spots BOOLEAN,
  patio_cover_type TEXT,
  has_sunroom BOOLEAN,
  
  -- Pressure Washing Details
  pressure_surfaces TEXT[],
  pressure_structures TEXT[],
  
  -- Solar Panel Details
  solar_stories TEXT,
  solar_panels_ground INTEGER,
  solar_panels_first_story INTEGER,
  solar_panels_second_story INTEGER,
  
  -- Gutter Cleaning Details
  has_gutter_guards BOOLEAN,
  
  -- Roof Cleaning Details
  roof_type TEXT,
  roof_stories TEXT,
  
  -- Blinds Cleaning Details
  blind_types TEXT[],
  blinds_quantity INTEGER,
  blinds_over_6ft INTEGER,
  
  -- Add-on Services
  addon_services TEXT[],
  
  -- Photo Upload URLs
  photo_urls TEXT[],
  
  -- Metadata
  form_data JSONB,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create service_waivers table
CREATE TABLE IF NOT EXISTS public.service_waivers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  waiver_number TEXT UNIQUE NOT NULL,
  
  -- Waiver Type
  waiver_type TEXT NOT NULL,
  
  -- Customer Information
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  property_address TEXT NOT NULL,
  
  -- Service Details
  service_date DATE NOT NULL,
  services_performed TEXT[] NOT NULL,
  
  -- Signatures
  customer_signature_url TEXT NOT NULL,
  customer_signature_date TIMESTAMPTZ NOT NULL,
  technician_name TEXT,
  technician_signature_url TEXT,
  technician_signature_date TIMESTAMPTZ,
  
  -- Photo Documentation
  before_photo_urls TEXT[],
  after_photo_urls TEXT[],
  
  -- Waiver Content
  waiver_text TEXT NOT NULL,
  
  -- PDF
  pdf_url TEXT,
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create storage buckets for photos
INSERT INTO storage.buckets (id, name, public)
VALUES 
  ('quote-photos', 'quote-photos', false),
  ('waiver-photos', 'waiver-photos', false),
  ('waiver-pdfs', 'waiver-pdfs', false)
ON CONFLICT (id) DO NOTHING;

-- Enable RLS
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_waivers ENABLE ROW LEVEL SECURITY;

-- RLS Policies for quote_requests (public can insert, business can view all)
CREATE POLICY "Anyone can create quote requests"
  ON public.quote_requests
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Public read access for quote requests"
  ON public.quote_requests
  FOR SELECT
  USING (true);

-- RLS Policies for service_waivers (public can insert, business can view all)
CREATE POLICY "Anyone can create service waivers"
  ON public.service_waivers
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Public read access for service waivers"
  ON public.service_waivers
  FOR SELECT
  USING (true);

-- Storage policies for quote-photos
CREATE POLICY "Anyone can upload quote photos"
  ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'quote-photos');

CREATE POLICY "Anyone can view quote photos"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'quote-photos');

-- Storage policies for waiver-photos
CREATE POLICY "Anyone can upload waiver photos"
  ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'waiver-photos');

CREATE POLICY "Anyone can view waiver photos"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'waiver-photos');

-- Storage policies for waiver-pdfs
CREATE POLICY "Anyone can upload waiver PDFs"
  ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'waiver-pdfs');

CREATE POLICY "Anyone can view waiver PDFs"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'waiver-pdfs');

-- Create updated_at trigger function if it doesn't exist
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add triggers for updated_at
CREATE TRIGGER update_quote_requests_updated_at
  BEFORE UPDATE ON public.quote_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_service_waivers_updated_at
  BEFORE UPDATE ON public.service_waivers
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_quote_requests_email ON public.quote_requests(email);
CREATE INDEX IF NOT EXISTS idx_quote_requests_created_at ON public.quote_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quote_requests_status ON public.quote_requests(status);
CREATE INDEX IF NOT EXISTS idx_service_waivers_customer_email ON public.service_waivers(customer_email);
CREATE INDEX IF NOT EXISTS idx_service_waivers_service_date ON public.service_waivers(service_date DESC);