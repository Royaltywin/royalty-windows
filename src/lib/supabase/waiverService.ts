import { supabase } from "@/integrations/supabase/client";
import { WaiverFormData } from "@/types/waiver";
import { getWaiverText } from "@/data/waiverTemplates";

const dataURLtoBlob = (dataURL: string): Blob => {
  const arr = dataURL.split(',');
  const mime = arr[0].match(/:(.*?);/)?.[1] || 'image/png';
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
};

export const uploadSignature = async (
  signatureDataURL: string,
  waiverNumber: string,
  type: 'customer' | 'technician'
): Promise<string> => {
  const blob = dataURLtoBlob(signatureDataURL);
  const fileName = `${waiverNumber}/${type}-signature.png`;

  const { error } = await supabase.storage
    .from('waiver-photos')
    .upload(fileName, blob, {
      upsert: true,
      contentType: 'image/png'
    });

  if (error) throw error;

  const { data: { publicUrl } } = supabase.storage
    .from('waiver-photos')
    .getPublicUrl(fileName);

  return publicUrl;
};

export const uploadWaiverPhotos = async (
  photos: File[],
  waiverNumber: string,
  stage: 'before' | 'after'
): Promise<string[]> => {
  const urls = await Promise.all(
    photos.map(async (photo, index) => {
      const fileExt = photo.name.split('.').pop();
      const fileName = `${waiverNumber}/${stage}-${index}.${fileExt}`;

      const { error } = await supabase.storage
        .from('waiver-photos')
        .upload(fileName, photo, {
          upsert: true
        });

      if (error) throw error;

      const { data: { publicUrl } } = supabase.storage
        .from('waiver-photos')
        .getPublicUrl(fileName);

      return publicUrl;
    })
  );

  return urls;
};

export const submitWaiver = async (formData: WaiverFormData) => {
  // Generate waiver number
  const waiverNumber = `W-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

  // Upload customer signature
  const customerSigUrl = await uploadSignature(
    formData.customerSignature,
    waiverNumber,
    'customer'
  );

  // Upload technician signature if provided
  const techSigUrl = formData.technicianSignature
    ? await uploadSignature(formData.technicianSignature, waiverNumber, 'technician')
    : null;

  // Upload before/after photos
  const beforeUrls = formData.beforePhotos.length > 0
    ? await uploadWaiverPhotos(formData.beforePhotos, waiverNumber, 'before')
    : [];
  const afterUrls = formData.afterPhotos.length > 0
    ? await uploadWaiverPhotos(formData.afterPhotos, waiverNumber, 'after')
    : [];

  // Insert waiver record
  const { data, error } = await supabase
    .from('service_waivers')
    .insert({
      waiver_number: waiverNumber,
      waiver_type: formData.waiverType,
      customer_name: formData.customerName,
      customer_email: formData.customerEmail,
      customer_phone: formData.customerPhone,
      property_address: formData.propertyAddress,
      service_date: formData.serviceDate.toISOString(),
      services_performed: formData.servicesPerformed,
      customer_signature_url: customerSigUrl,
      customer_signature_date: new Date().toISOString(),
      technician_name: formData.technicianName,
      technician_signature_url: techSigUrl,
      technician_signature_date: formData.technicianSignature ? new Date().toISOString() : null,
      before_photo_urls: beforeUrls.length > 0 ? beforeUrls : null,
      after_photo_urls: afterUrls.length > 0 ? afterUrls : null,
      waiver_text: getWaiverText(formData.waiverType)
    })
    .select()
    .single();

  if (error) throw error;
  return data;
};
