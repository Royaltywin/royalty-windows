import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { WINDOW_TYPES } from "@/types/quote";
import { Label } from "@/components/ui/label";

interface WindowTypeSelectorProps {
  selectedTypes: string[];
  onToggleType: (typeId: string) => void;
}

const WindowTypeSelector = ({ selectedTypes, onToggleType }: WindowTypeSelectorProps) => {
  return (
    <div className="space-y-3">
      <Label>Window Types (select all that apply)</Label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {WINDOW_TYPES.map((type) => {
          const isSelected = selectedTypes.includes(type.id);
          return (
            <button
              key={type.id}
              type="button"
              onClick={() => onToggleType(type.id)}
              className={cn(
                "flex items-start gap-2 p-3 rounded-lg border-2 transition-all text-left text-sm",
                isSelected
                  ? "border-primary bg-primary/10"
                  : "border-muted hover:border-primary/50"
              )}
            >
              <CheckCircle
                className={cn(
                  "w-4 h-4 mt-0.5 flex-shrink-0",
                  isSelected ? "text-primary" : "text-muted-foreground/30"
                )}
              />
              <span className="flex-1">{type.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default WindowTypeSelector;
