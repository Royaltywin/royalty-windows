import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { QuoteFormData } from "@/types/quote";

interface PropertyDetailsProps {
  formData: Partial<QuoteFormData>;
  onChange: (updates: Partial<QuoteFormData>) => void;
}

const PropertyDetails = ({ formData, onChange }: PropertyDetailsProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-4">Property Information</h3>
      </div>

      <div className="space-y-2">
        <Label htmlFor="propertyAddress">Street Address *</Label>
        <Input
          id="propertyAddress"
          value={formData.propertyAddress || ""}
          onChange={(e) => onChange({ propertyAddress: e.target.value })}
          placeholder="123 Main Street"
          required
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="propertyCity">City *</Label>
          <Input
            id="propertyCity"
            value={formData.propertyCity || ""}
            onChange={(e) => onChange({ propertyCity: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="propertyState">State *</Label>
          <Input
            id="propertyState"
            value={formData.propertyState || ""}
            onChange={(e) => onChange({ propertyState: e.target.value })}
            placeholder="CA"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="propertyZip">ZIP Code *</Label>
          <Input
            id="propertyZip"
            value={formData.propertyZip || ""}
            onChange={(e) => onChange({ propertyZip: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="yearBuilt">Year Built</Label>
          <Input
            id="yearBuilt"
            type="number"
            min="1800"
            max={new Date().getFullYear()}
            value={formData.yearBuilt || ""}
            onChange={(e) => onChange({ yearBuilt: parseInt(e.target.value) || undefined })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="homeSqft">Home Size (sq ft)</Label>
          <Input
            id="homeSqft"
            type="number"
            min="0"
            value={formData.homeSqft || ""}
            onChange={(e) => onChange({ homeSqft: parseInt(e.target.value) || undefined })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="propertyNotes">Additional Notes</Label>
        <Textarea
          id="propertyNotes"
          value={formData.propertyNotes || ""}
          onChange={(e) => onChange({ propertyNotes: e.target.value })}
          placeholder="Any special considerations, access instructions, or concerns..."
          rows={4}
        />
      </div>
    </div>
  );
};

export default PropertyDetails;
