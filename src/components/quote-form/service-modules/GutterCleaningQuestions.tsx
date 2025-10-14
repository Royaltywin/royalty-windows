import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { QuoteFormData } from "@/types/quote";

interface GutterCleaningQuestionsProps {
  formData: Partial<QuoteFormData>;
  onChange: (updates: Partial<QuoteFormData>) => void;
}

const GutterCleaningQuestions = ({ formData, onChange }: GutterCleaningQuestionsProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-4">Gutter Cleaning Details</h3>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="gutterGuards"
          checked={formData.hasGutterGuards || false}
          onCheckedChange={(checked) => onChange({ hasGutterGuards: checked as boolean })}
        />
        <Label htmlFor="gutterGuards" className="cursor-pointer">
          Gutters have guards/screens installed
        </Label>
      </div>

      <div className="bg-muted/50 p-4 rounded-lg">
        <p className="text-sm text-muted-foreground">
          Our technicians will assess the full scope of work during the on-site visit, including
          linear feet of gutters and accessibility.
        </p>
      </div>
    </div>
  );
};

export default GutterCleaningQuestions;
