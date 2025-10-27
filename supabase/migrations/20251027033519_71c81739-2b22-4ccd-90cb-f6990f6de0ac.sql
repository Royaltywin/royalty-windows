-- Create role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'staff', 'customer');

-- Create user_roles table
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role public.app_role NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  );
$$;

-- RLS policies for user_roles table
CREATE POLICY "Admins can view all roles" ON public.user_roles
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Users can view own role" ON public.user_roles
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can insert roles" ON public.user_roles
  FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete roles" ON public.user_roles
  FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- ============================================
-- SECURE QUOTE REQUESTS TABLE
-- ============================================

-- Remove insecure public read policy
DROP POLICY IF EXISTS "Public read access for quote requests" ON public.quote_requests;

-- Add admin/staff-only read access
CREATE POLICY "Admins and staff can view quote requests" ON public.quote_requests
  FOR SELECT TO authenticated
  USING (
    public.has_role(auth.uid(), 'admin') OR 
    public.has_role(auth.uid(), 'staff')
  );

-- Add admin update/delete access
CREATE POLICY "Admins can update quote requests" ON public.quote_requests
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete quote requests" ON public.quote_requests
  FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- ============================================
-- SECURE SERVICE WAIVERS TABLE
-- ============================================

-- Remove insecure public read policy
DROP POLICY IF EXISTS "Public read access for service waivers" ON public.service_waivers;

-- Add admin/staff-only read access
CREATE POLICY "Admins and staff can view waivers" ON public.service_waivers
  FOR SELECT TO authenticated
  USING (
    public.has_role(auth.uid(), 'admin') OR 
    public.has_role(auth.uid(), 'staff')
  );

-- Add admin update/delete access
CREATE POLICY "Admins can update waivers" ON public.service_waivers
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete waivers" ON public.service_waivers
  FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- ============================================
-- SECURE STORAGE BUCKETS
-- ============================================

-- Secure waiver-photos bucket
CREATE POLICY "Admins can view waiver photos" ON storage.objects
  FOR SELECT TO authenticated
  USING (
    bucket_id = 'waiver-photos' AND
    (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'staff'))
  );

CREATE POLICY "Public can upload waiver photos" ON storage.objects
  FOR INSERT TO anon, authenticated
  WITH CHECK (bucket_id = 'waiver-photos');

CREATE POLICY "Admins can delete waiver photos" ON storage.objects
  FOR DELETE TO authenticated
  USING (
    bucket_id = 'waiver-photos' AND
    public.has_role(auth.uid(), 'admin')
  );

-- Secure quote-photos bucket
CREATE POLICY "Admins can view quote photos" ON storage.objects
  FOR SELECT TO authenticated
  USING (
    bucket_id = 'quote-photos' AND
    (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'staff'))
  );

CREATE POLICY "Public can upload quote photos" ON storage.objects
  FOR INSERT TO anon, authenticated
  WITH CHECK (bucket_id = 'quote-photos');

CREATE POLICY "Admins can delete quote photos" ON storage.objects
  FOR DELETE TO authenticated
  USING (
    bucket_id = 'quote-photos' AND
    public.has_role(auth.uid(), 'admin')
  );

-- Secure waiver-pdfs bucket
CREATE POLICY "Admins can view waiver PDFs" ON storage.objects
  FOR SELECT TO authenticated
  USING (
    bucket_id = 'waiver-pdfs' AND
    (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'staff'))
  );

CREATE POLICY "Public can upload waiver PDFs" ON storage.objects
  FOR INSERT TO anon, authenticated
  WITH CHECK (bucket_id = 'waiver-pdfs');

CREATE POLICY "Admins can delete waiver PDFs" ON storage.objects
  FOR DELETE TO authenticated
  USING (
    bucket_id = 'waiver-pdfs' AND
    public.has_role(auth.uid(), 'admin')
  );