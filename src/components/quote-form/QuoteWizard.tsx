import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { QuoteFormData } from "@/types/quote";
import { submitQuoteRequest } from "@/lib/supabase/quoteService";
import { useToast } from "@/hooks/use-toast";
import StepIndicator from "./StepIndicator";
import ServiceSelection from "./ServiceSelection";
import WindowCleaningQuestions from "./service-modules/WindowCleaningQuestions";
import PressureWashingQuestions from "./service-modules/PressureWashingQuestions";
import SolarPanelQuestions from "./service-modules/SolarPanelQuestions";
import GutterCleaningQuestions from "./service-modules/GutterCleaningQuestions";
import RoofCleaningQuestions from "./service-modules/RoofCleaningQuestions";
import BlindsCleaningQuestions from "./service-modules/BlindsCleaningQuestions";
import ExteriorWashQuestions from "./service-modules/ExteriorWashQuestions";
import PropertyDetails from "./PropertyDetails";
import ContactInformation from "./ContactInformation";
import AddonSuggestions from "./AddonSuggestions";
import PhotoUpload from "./PhotoUpload";
import ReviewSubmit from "./ReviewSubmit";

interface QuoteWizardProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialServices?: string[];
}

const STEPS = [
  { id: 1, name: "Services" },
  { id: 2, name: "Details" },
  { id: 3, name: "Property" },
  { id: 4, name: "Contact" },
  { id: 5, name: "Add-ons" },
  { id: 6, name: "Photos" },
  { id: 7, name: "Review" },
];

const QuoteWizard = ({ open, onOpenChange, initialServices = [] }: QuoteWizardProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Partial<QuoteFormData>>({
    primaryServices: initialServices,
    smsConsent: false,
    isCurrentCustomer: false,
  });
  const { toast } = useToast();

  const updateFormData = (updates: Partial<QuoteFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const handleServiceToggle = (serviceId: string) => {
    const current = formData.primaryServices || [];
    const updated = current.includes(serviceId)
      ? current.filter((id) => id !== serviceId)
      : [...current, serviceId];
    updateFormData({ primaryServices: updated });
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return (formData.primaryServices?.length || 0) > 0;
      case 3:
        return formData.propertyAddress && formData.propertyCity && formData.propertyState && formData.propertyZip;
      case 4:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (currentStep === 1) {
      const services = formData.primaryServices || [];
      if (services.some((s) => ["window-cleaning", "pressure-washing", "solar-panel-cleaning", "gutter-cleaning", "roof-cleaning", "blinds-cleaning", "exterior-house-wash"].includes(s))) {
        setCurrentStep(2);
      } else {
        setCurrentStep(3);
      }
    } else if (currentStep === 2) {
      setCurrentStep(3);
    } else if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep === 3) {
      const services = formData.primaryServices || [];
      if (services.some((s) => ["window-cleaning", "pressure-washing", "solar-panel-cleaning", "gutter-cleaning", "roof-cleaning", "blinds-cleaning", "exterior-house-wash"].includes(s))) {
        setCurrentStep(2);
      } else {
        setCurrentStep(1);
      }
    } else if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await submitQuoteRequest(formData as QuoteFormData);
      toast({
        title: "Quote request submitted!",
        description: "We'll contact you within 24 hours with your personalized quote.",
      });
      onOpenChange(false);
      setCurrentStep(1);
      setFormData({ primaryServices: [], smsConsent: false, isCurrentCustomer: false });
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <ServiceSelection selectedServices={formData.primaryServices || []} onToggleService={handleServiceToggle} />;
      case 2:
        const services = formData.primaryServices || [];
        return (
          <div className="space-y-6">
            {services.includes("window-cleaning") && (
              <WindowCleaningQuestions formData={formData} onChange={updateFormData} />
            )}
            {services.includes("pressure-washing") && (
              <PressureWashingQuestions formData={formData} onChange={updateFormData} />
            )}
            {services.includes("solar-panel-cleaning") && (
              <SolarPanelQuestions formData={formData} onChange={updateFormData} />
            )}
            {services.includes("gutter-cleaning") && (
              <GutterCleaningQuestions formData={formData} onChange={updateFormData} />
            )}
            {services.includes("roof-cleaning") && (
              <RoofCleaningQuestions formData={formData} onChange={updateFormData} />
            )}
            {services.includes("blinds-cleaning") && (
              <BlindsCleaningQuestions formData={formData} onChange={updateFormData} />
            )}
            {services.includes("exterior-house-wash") && (
              <ExteriorWashQuestions formData={formData} onChange={updateFormData} />
            )}
          </div>
        );
      case 3:
        return <PropertyDetails formData={formData} onChange={updateFormData} />;
      case 4:
        return <ContactInformation formData={formData} onChange={updateFormData} />;
      case 5:
        return <AddonSuggestions formData={formData} onChange={updateFormData} />;
      case 6:
        return <PhotoUpload photos={formData.photos || []} onChange={(photos) => updateFormData({ photos })} />;
      case 7:
        return <ReviewSubmit formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Get Your Free Quote</DialogTitle>
        </DialogHeader>

        <StepIndicator steps={STEPS} currentStep={currentStep} />

        <div className="py-6">{renderStepContent()}</div>

        <div className="flex justify-between pt-4 border-t">
          <Button variant="outline" onClick={handleBack} disabled={currentStep === 1 || isSubmitting}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          {currentStep < STEPS.length ? (
            <Button onClick={handleNext} disabled={!canProceed() || isSubmitting}>
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} disabled={!canProceed() || isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Quote Request"
              )}
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteWizard;
