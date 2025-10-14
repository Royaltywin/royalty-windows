import { QuoteFormData } from "@/types/quote";
import { CheckCircle } from "lucide-react";

interface ReviewSubmitProps {
  formData: Partial<QuoteFormData>;
}

const ReviewSubmit = ({ formData }: ReviewSubmitProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-2">Review Your Quote Request</h3>
        <p className="text-muted-foreground">Please confirm your information before submitting</p>
      </div>

      <div className="space-y-4">
        <div className="bg-muted/50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            Selected Services
          </h4>
          <ul className="space-y-1 ml-7">
            {formData.primaryServices?.map((service) => (
              <li key={service} className="text-sm">
                {service}
              </li>
            ))}
          </ul>
          {formData.addonServices && formData.addonServices.length > 0 && (
            <div className="mt-3">
              <p className="text-sm font-medium">Add-ons:</p>
              <ul className="space-y-1 ml-4">
                {formData.addonServices.map((addon) => (
                  <li key={addon} className="text-sm text-muted-foreground">
                    {addon}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="bg-muted/50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Contact Information</h4>
          <div className="space-y-1 text-sm">
            <p>
              {formData.firstName} {formData.lastName}
            </p>
            <p>{formData.email}</p>
            <p>{formData.phone}</p>
          </div>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Property Address</h4>
          <div className="text-sm">
            <p>{formData.propertyAddress}</p>
            <p>
              {formData.propertyCity}, {formData.propertyState} {formData.propertyZip}
            </p>
          </div>
        </div>

        {formData.photos && formData.photos.length > 0 && (
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Attached Photos</h4>
            <p className="text-sm">{formData.photos.length} photo(s) uploaded</p>
          </div>
        )}
      </div>

      <div className="bg-accent/10 border-2 border-accent rounded-lg p-4">
        <h4 className="font-semibold text-accent mb-2">What Happens Next?</h4>
        <ol className="space-y-2 text-sm">
          <li className="flex gap-2">
            <span className="font-semibold">1.</span>
            <span>We'll review your request within 24 hours</span>
          </li>
          <li className="flex gap-2">
            <span className="font-semibold">2.</span>
            <span>Our team will contact you to schedule a free on-site assessment</span>
          </li>
          <li className="flex gap-2">
            <span className="font-semibold">3.</span>
            <span>Receive your detailed quote and book your service</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ReviewSubmit;
