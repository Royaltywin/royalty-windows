import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { QuoteFormData, BLIND_TYPES } from "@/types/quote";

interface BlindsCleaningQuestionsProps {
  formData: Partial<QuoteFormData>;
  onChange: (updates: Partial<QuoteFormData>) => void;
}

const BlindsCleaningQuestions = ({ formData, onChange }: BlindsCleaningQuestionsProps) => {
  const handleBlindTypeToggle = (typeId: string) => {
    const current = formData.blindTypes || [];
    const updated = current.includes(typeId)
      ? current.filter((id) => id !== typeId)
      : [...current, typeId];
    onChange({ blindTypes: updated });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-4">Blinds Cleaning Details</h3>
      </div>

      <div className="space-y-3">
        <Label>Blind Types (select all that apply)</Label>
        <div className="space-y-2">
          {BLIND_TYPES.map((type) => (
            <div key={type.id} className="flex items-center space-x-2">
              <Checkbox
                id={`blind-${type.id}`}
                checked={(formData.blindTypes || []).includes(type.id)}
                onCheckedChange={() => handleBlindTypeToggle(type.id)}
              />
              <Label htmlFor={`blind-${type.id}`} className="cursor-pointer">
                {type.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="blindsQty">Total Number of Blinds</Label>
          <Input
            id="blindsQty"
            type="number"
            min="0"
            value={formData.blindsQuantity || ""}
            onChange={(e) => onChange({ blindsQuantity: parseInt(e.target.value) || undefined })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="blindsLarge">Blinds Over 6ft Wide</Label>
          <Input
            id="blindsLarge"
            type="number"
            min="0"
            value={formData.blindsOver6ft || ""}
            onChange={(e) => onChange({ blindsOver6ft: parseInt(e.target.value) || undefined })}
          />
        </div>
      </div>
    </div>
  );
};

export default BlindsCleaningQuestions;
