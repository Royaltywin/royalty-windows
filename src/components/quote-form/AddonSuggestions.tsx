import { CheckCircle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { QuoteFormData } from "@/types/quote";

const ADDON_SERVICES = [
  { id: "screen-cleaning", label: "Screen Cleaning", discount: true },
  { id: "track-cleaning", label: "Window Track Cleaning", discount: true },
  { id: "chandelier-cleaning", label: "Chandelier Cleaning", discount: false },
  { id: "mirror-cleaning", label: "Mirror Cleaning", discount: true },
  { id: "light-fixture-cleaning", label: "Light Fixture Cleaning", discount: false },
];

interface AddonSuggestionsProps {
  formData: Partial<QuoteFormData>;
  onChange: (updates: Partial<QuoteFormData>) => void;
}

const AddonSuggestions = ({ formData, onChange }: AddonSuggestionsProps) => {
  const handleAddonToggle = (addonId: string) => {
    const current = formData.addonServices || [];
    const updated = current.includes(addonId)
      ? current.filter((id) => id !== addonId)
      : [...current, addonId];
    onChange({ addonServices: updated });
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-xl font-bold mb-2">Add-On Services</h3>
        <p className="text-muted-foreground text-sm">
          Bundle services and save! Select add-ons get 15% off when combined.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {ADDON_SERVICES.map((addon) => {
          const isSelected = (formData.addonServices || []).includes(addon.id);
          return (
            <button
              key={addon.id}
              type="button"
              onClick={() => handleAddonToggle(addon.id)}
              className={cn(
                "flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left relative",
                isSelected
                  ? "border-primary bg-primary/10"
                  : "border-muted hover:border-primary/50"
              )}
            >
              {addon.discount && (
                <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  15% OFF
                </div>
              )}
              <CheckCircle
                className={cn(
                  "w-5 h-5 flex-shrink-0",
                  isSelected ? "text-primary" : "text-muted-foreground/30"
                )}
              />
              <span className="flex-1 font-semibold">{addon.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AddonSuggestions;
