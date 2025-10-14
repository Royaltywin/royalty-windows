import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { QuoteFormData } from "@/types/quote";

const SURFACES = [
  "Driveway",
  "Walkway",
  "Patio",
  "Deck",
  "Pool Area",
  "Garage Floor",
];

const STRUCTURES = [
  "Fence",
  "Wall",
  "Retaining Wall",
  "Gazebo",
  "Pergola",
];

interface PressureWashingQuestionsProps {
  formData: Partial<QuoteFormData>;
  onChange: (updates: Partial<QuoteFormData>) => void;
}

const PressureWashingQuestions = ({ formData, onChange }: PressureWashingQuestionsProps) => {
  const handleSurfaceToggle = (surface: string) => {
    const current = formData.pressureSurfaces || [];
    const updated = current.includes(surface)
      ? current.filter((s) => s !== surface)
      : [...current, surface];
    onChange({ pressureSurfaces: updated });
  };

  const handleStructureToggle = (structure: string) => {
    const current = formData.pressureStructures || [];
    const updated = current.includes(structure)
      ? current.filter((s) => s !== structure)
      : [...current, structure];
    onChange({ pressureStructures: updated });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-4">Pressure Washing Details</h3>
      </div>

      <div className="space-y-3">
        <Label>Surfaces to Clean</Label>
        <div className="grid grid-cols-2 gap-3">
          {SURFACES.map((surface) => (
            <div key={surface} className="flex items-center space-x-2">
              <Checkbox
                id={`surface-${surface}`}
                checked={(formData.pressureSurfaces || []).includes(surface)}
                onCheckedChange={() => handleSurfaceToggle(surface)}
              />
              <Label htmlFor={`surface-${surface}`} className="cursor-pointer">
                {surface}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <Label>Structures to Clean</Label>
        <div className="grid grid-cols-2 gap-3">
          {STRUCTURES.map((structure) => (
            <div key={structure} className="flex items-center space-x-2">
              <Checkbox
                id={`structure-${structure}`}
                checked={(formData.pressureStructures || []).includes(structure)}
                onCheckedChange={() => handleStructureToggle(structure)}
              />
              <Label htmlFor={`structure-${structure}`} className="cursor-pointer">
                {structure}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PressureWashingQuestions;
