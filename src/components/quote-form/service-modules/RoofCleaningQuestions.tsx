import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { QuoteFormData, ROOF_TYPES } from "@/types/quote";

interface RoofCleaningQuestionsProps {
  formData: Partial<QuoteFormData>;
  onChange: (updates: Partial<QuoteFormData>) => void;
}

const RoofCleaningQuestions = ({ formData, onChange }: RoofCleaningQuestionsProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-4">Roof Cleaning Details</h3>
      </div>

      <div className="space-y-2">
        <Label>Roof Type</Label>
        <RadioGroup
          value={formData.roofType}
          onValueChange={(value) => onChange({ roofType: value })}
        >
          {ROOF_TYPES.map((type) => (
            <div key={type.id} className="flex items-center space-x-2">
              <RadioGroupItem value={type.id} id={`roof-${type.id}`} />
              <Label htmlFor={`roof-${type.id}`} className="cursor-pointer">
                {type.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label>Number of Stories</Label>
        <RadioGroup
          value={formData.roofStories}
          onValueChange={(value) => onChange({ roofStories: value })}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1" id="roof-stories-1" />
            <Label htmlFor="roof-stories-1" className="cursor-pointer">1 Story</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2" id="roof-stories-2" />
            <Label htmlFor="roof-stories-2" className="cursor-pointer">2 Stories</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="3+" id="roof-stories-3" />
            <Label htmlFor="roof-stories-3" className="cursor-pointer">3+ Stories</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default RoofCleaningQuestions;
