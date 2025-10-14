import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import WindowTypeSelector from "../WindowTypeSelector";
import { QuoteFormData, WINDOW_TYPES } from "@/types/quote";

interface WindowCleaningQuestionsProps {
  formData: Partial<QuoteFormData>;
  onChange: (updates: Partial<QuoteFormData>) => void;
}

const WindowCleaningQuestions = ({ formData, onChange }: WindowCleaningQuestionsProps) => {
  const handleWindowTypeToggle = (typeId: string) => {
    const current = formData.windowTypes || [];
    const updated = current.includes(typeId)
      ? current.filter((id) => id !== typeId)
      : [...current, typeId];
    onChange({ windowTypes: updated });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-4">Window Cleaning Details</h3>
      </div>

      <div className="space-y-2">
        <Label>Number of Stories</Label>
        <RadioGroup
          value={formData.windowStories}
          onValueChange={(value) => onChange({ windowStories: value })}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1" id="stories-1" />
            <Label htmlFor="stories-1" className="cursor-pointer">1 Story</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2" id="stories-2" />
            <Label htmlFor="stories-2" className="cursor-pointer">2 Stories</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="3+" id="stories-3" />
            <Label htmlFor="stories-3" className="cursor-pointer">3+ Stories</Label>
          </div>
        </RadioGroup>
      </div>

      <WindowTypeSelector
        selectedTypes={formData.windowTypes || []}
        onToggleType={handleWindowTypeToggle}
      />

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="windowCount">Approximate Window Count</Label>
          <Input
            id="windowCount"
            type="number"
            min="0"
            value={formData.windowCount || ""}
            onChange={(e) => onChange({ windowCount: parseInt(e.target.value) || undefined })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="slidingDoors">Sliding Doors</Label>
          <Input
            id="slidingDoors"
            type="number"
            min="0"
            value={formData.windowSlidingDoors || ""}
            onChange={(e) => onChange({ windowSlidingDoors: parseInt(e.target.value) || undefined })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>When were windows last cleaned?</Label>
        <RadioGroup
          value={formData.lastCleaning}
          onValueChange={(value) => onChange({ lastCleaning: value })}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="0-6-months" id="clean-recent" />
            <Label htmlFor="clean-recent" className="cursor-pointer">0-6 months ago</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="6-12-months" id="clean-6-12" />
            <Label htmlFor="clean-6-12" className="cursor-pointer">6-12 months ago</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1-2-years" id="clean-1-2" />
            <Label htmlFor="clean-1-2" className="cursor-pointer">1-2 years ago</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="never" id="clean-never" />
            <Label htmlFor="clean-never" className="cursor-pointer">Never / Don't know</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="hardWater"
          checked={formData.hasHardWaterSpots || false}
          onCheckedChange={(checked) => onChange({ hasHardWaterSpots: checked as boolean })}
        />
        <Label htmlFor="hardWater" className="cursor-pointer">
          Hard water spots present
        </Label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="sunroom"
          checked={formData.hasSunroom || false}
          onCheckedChange={(checked) => onChange({ hasSunroom: checked as boolean })}
        />
        <Label htmlFor="sunroom" className="cursor-pointer">
          Has sunroom
        </Label>
      </div>
    </div>
  );
};

export default WindowCleaningQuestions;
