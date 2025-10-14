import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { QuoteFormData, REFERRAL_SOURCES } from "@/types/quote";

interface ContactInformationProps {
  formData: Partial<QuoteFormData>;
  onChange: (updates: Partial<QuoteFormData>) => void;
}

const ContactInformation = ({ formData, onChange }: ContactInformationProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-4">Contact Information</h3>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            value={formData.firstName || ""}
            onChange={(e) => onChange({ firstName: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            value={formData.lastName || ""}
            onChange={(e) => onChange({ lastName: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          value={formData.email || ""}
          onChange={(e) => onChange({ email: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number *</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone || ""}
          onChange={(e) => onChange({ phone: e.target.value })}
          placeholder="(555) 123-4567"
          required
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="smsConsent"
          checked={formData.smsConsent || false}
          onCheckedChange={(checked) => onChange({ smsConsent: checked as boolean })}
        />
        <Label htmlFor="smsConsent" className="cursor-pointer text-sm">
          I consent to receive SMS updates about my quote
        </Label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="isCurrentCustomer"
          checked={formData.isCurrentCustomer || false}
          onCheckedChange={(checked) => onChange({ isCurrentCustomer: checked as boolean })}
        />
        <Label htmlFor="isCurrentCustomer" className="cursor-pointer text-sm">
          I'm a current customer
        </Label>
      </div>

      <div className="space-y-2">
        <Label>How did you hear about us?</Label>
        <RadioGroup
          value={formData.referralSource}
          onValueChange={(value) => onChange({ referralSource: value })}
        >
          {REFERRAL_SOURCES.map((source) => (
            <div key={source} className="flex items-center space-x-2">
              <RadioGroupItem value={source} id={`referral-${source}`} />
              <Label htmlFor={`referral-${source}`} className="cursor-pointer">
                {source}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {formData.referralSource === "Neighbor/Friend Referral" && (
        <div className="space-y-2">
          <Label htmlFor="referralName">Referral Name</Label>
          <Input
            id="referralName"
            value={formData.referralName || ""}
            onChange={(e) => onChange({ referralName: e.target.value })}
            placeholder="Who referred you?"
          />
        </div>
      )}
    </div>
  );
};

export default ContactInformation;
