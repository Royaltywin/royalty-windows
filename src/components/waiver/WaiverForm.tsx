import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Loader2 } from "lucide-react";
import { WaiverFormData, WAIVER_TYPES } from "@/types/waiver";
import { submitWaiver } from "@/lib/supabase/waiverService";
import { useToast } from "@/hooks/use-toast";
import SignaturePad from "./SignaturePad";
import WaiverText from "./WaiverText";
import PhotoCapture from "./PhotoCapture";

const SERVICES = [
  "Interior Windows",
  "Exterior Windows",
  "Screens",
  "Tracks",
  "Pressure Washing",
  "Solar Panels",
  "Gutters",
  "Roof",
  "Other",
];

const WaiverForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Partial<WaiverFormData>>({
    waiverType: "General Service",
    servicesPerformed: [],
    serviceDate: new Date(),
    beforePhotos: [],
    afterPhotos: [],
    agreedToTerms: false,
  });

  const updateFormData = (updates: Partial<WaiverFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const handleServiceToggle = (service: string) => {
    const current = formData.servicesPerformed || [];
    const updated = current.includes(service)
      ? current.filter((s) => s !== service)
      : [...current, service];
    updateFormData({ servicesPerformed: updated });
  };

  const canSubmit = () => {
    return (
      formData.waiverType &&
      formData.servicesPerformed &&
      formData.servicesPerformed.length > 0 &&
      formData.customerName &&
      formData.customerEmail &&
      formData.customerPhone &&
      formData.propertyAddress &&
      formData.customerSignature &&
      formData.agreedToTerms
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit()) return;

    setIsSubmitting(true);
    try {
      const result = await submitWaiver(formData as WaiverFormData);
      toast({
        title: "Waiver submitted successfully!",
        description: `Waiver #${result.waiver_number}`,
      });
      navigate(`/waiver-success/${result.waiver_number}`);
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Service Details</h2>

        <div className="space-y-2">
          <Label>Service Type</Label>
          <RadioGroup
            value={formData.waiverType}
            onValueChange={(value) => updateFormData({ waiverType: value })}
          >
            {WAIVER_TYPES.map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <RadioGroupItem value={type} id={`type-${type}`} />
                <Label htmlFor={`type-${type}`} className="cursor-pointer">
                  {type}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label>Services Performed</Label>
          <div className="grid grid-cols-2 gap-2">
            {SERVICES.map((service) => (
              <div key={service} className="flex items-center space-x-2">
                <Checkbox
                  id={`service-${service}`}
                  checked={(formData.servicesPerformed || []).includes(service)}
                  onCheckedChange={() => handleServiceToggle(service)}
                />
                <Label htmlFor={`service-${service}`} className="cursor-pointer">
                  {service}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="serviceDate">Service Date</Label>
          <Input
            id="serviceDate"
            type="date"
            value={formData.serviceDate?.toISOString().split("T")[0]}
            onChange={(e) => updateFormData({ serviceDate: new Date(e.target.value) })}
            required
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Customer Information</h2>

        <div className="space-y-2">
          <Label htmlFor="customerName">Full Name *</Label>
          <Input
            id="customerName"
            value={formData.customerName || ""}
            onChange={(e) => updateFormData({ customerName: e.target.value })}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="customerEmail">Email *</Label>
            <Input
              id="customerEmail"
              type="email"
              value={formData.customerEmail || ""}
              onChange={(e) => updateFormData({ customerEmail: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="customerPhone">Phone *</Label>
            <Input
              id="customerPhone"
              type="tel"
              value={formData.customerPhone || ""}
              onChange={(e) => updateFormData({ customerPhone: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="propertyAddress">Property Address *</Label>
          <Input
            id="propertyAddress"
            value={formData.propertyAddress || ""}
            onChange={(e) => updateFormData({ propertyAddress: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Service Documentation</h2>

        <PhotoCapture
          photos={formData.beforePhotos || []}
          onChange={(photos) => updateFormData({ beforePhotos: photos })}
          label="Before Photos"
        />

        <PhotoCapture
          photos={formData.afterPhotos || []}
          onChange={(photos) => updateFormData({ afterPhotos: photos })}
          label="After Photos"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Agreement & Signatures</h2>

        <WaiverText waiverType={formData.waiverType || "General Service"} />

        <SignaturePad
          label="Customer Signature *"
          onSignatureChange={(sig) => updateFormData({ customerSignature: sig })}
        />

        <div className="space-y-2">
          <Label htmlFor="technicianName">Technician Name (Optional)</Label>
          <Input
            id="technicianName"
            value={formData.technicianName || ""}
            onChange={(e) => updateFormData({ technicianName: e.target.value })}
          />
        </div>

        <SignaturePad
          label="Technician Signature (Optional)"
          onSignatureChange={(sig) => updateFormData({ technicianSignature: sig })}
        />

        <div className="flex items-center space-x-2">
          <Checkbox
            id="agreedToTerms"
            checked={formData.agreedToTerms || false}
            onCheckedChange={(checked) => updateFormData({ agreedToTerms: checked as boolean })}
          />
          <Label htmlFor="agreedToTerms" className="cursor-pointer">
            I have read and agree to the terms and conditions above *
          </Label>
        </div>
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={!canSubmit() || isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Submitting Waiver...
          </>
        ) : (
          "Submit Service Waiver"
        )}
      </Button>
    </form>
  );
};

export default WaiverForm;
