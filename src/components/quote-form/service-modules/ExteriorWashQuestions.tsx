import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { QuoteFormData } from "@/types/quote";

const EXTERIOR_AREAS = [
  "Front of House",
  "Back of House",
  "Side Walls",
  "Eaves & Soffits",
  "Fascia",
  "Chimney",
];

interface ExteriorWashQuestionsProps {
  formData: Partial<QuoteFormData>;
  onChange: (updates: Partial<QuoteFormData>) => void;
}

const ExteriorWashQuestions = ({ formData, onChange }: ExteriorWashQuestionsProps) => {
  const handleAreaToggle = (area: string) => {
    const current = formData.exteriorWashAreas || [];
    const updated = current.includes(area)
      ? current.filter((a) => a !== area)
      : [...current, area];
    onChange({ exteriorWashAreas: updated });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-4">Exterior House Wash Details</h3>
      </div>

      <div className="space-y-3">
        <Label>Areas to Wash</Label>
        <div className="grid grid-cols-2 gap-3">
          {EXTERIOR_AREAS.map((area) => (
            <div key={area} className="flex items-center space-x-2">
              <Checkbox
                id={`area-${area}`}
                checked={(formData.exteriorWashAreas || []).includes(area)}
                onCheckedChange={() => handleAreaToggle(area)}
              />
              <Label htmlFor={`area-${area}`} className="cursor-pointer">
                {area}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExteriorWashQuestions;
