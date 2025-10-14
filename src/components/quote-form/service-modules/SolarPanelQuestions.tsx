import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { QuoteFormData } from "@/types/quote";

interface SolarPanelQuestionsProps {
  formData: Partial<QuoteFormData>;
  onChange: (updates: Partial<QuoteFormData>) => void;
}

const SolarPanelQuestions = ({ formData, onChange }: SolarPanelQuestionsProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-4">Solar Panel Cleaning Details</h3>
      </div>

      <div className="space-y-2">
        <Label>Panel Location Stories</Label>
        <RadioGroup
          value={formData.solarStories}
          onValueChange={(value) => onChange({ solarStories: value })}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="ground" id="solar-ground" />
            <Label htmlFor="solar-ground" className="cursor-pointer">Ground Level</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1" id="solar-1" />
            <Label htmlFor="solar-1" className="cursor-pointer">1 Story</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2" id="solar-2" />
            <Label htmlFor="solar-2" className="cursor-pointer">2 Stories</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="mixed" id="solar-mixed" />
            <Label htmlFor="solar-mixed" className="cursor-pointer">Mixed Levels</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <Label>Number of Panels by Location</Label>
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="panelsGround">Ground Level Panels</Label>
            <Input
              id="panelsGround"
              type="number"
              min="0"
              value={formData.solarPanelsGround || ""}
              onChange={(e) => onChange({ solarPanelsGround: parseInt(e.target.value) || undefined })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="panelsFirst">First Story Panels</Label>
            <Input
              id="panelsFirst"
              type="number"
              min="0"
              value={formData.solarPanelsFirstStory || ""}
              onChange={(e) => onChange({ solarPanelsFirstStory: parseInt(e.target.value) || undefined })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="panelsSecond">Second Story Panels</Label>
            <Input
              id="panelsSecond"
              type="number"
              min="0"
              value={formData.solarPanelsSecondStory || ""}
              onChange={(e) => onChange({ solarPanelsSecondStory: parseInt(e.target.value) || undefined })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarPanelQuestions;
