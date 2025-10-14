import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const PRIMARY_SERVICES = [
  { id: "window-cleaning", label: "Window Cleaning", icon: "🪟" },
  { id: "pressure-washing", label: "Pressure Washing", icon: "💦" },
  { id: "solar-panel-cleaning", label: "Solar Panel Cleaning", icon: "☀️" },
  { id: "gutter-cleaning", label: "Gutter Cleaning", icon: "🏠" },
  { id: "roof-cleaning", label: "Roof Cleaning", icon: "🏘️" },
  { id: "blinds-cleaning", label: "Blinds Cleaning", icon: "🪟" },
  { id: "exterior-house-wash", label: "Exterior House Wash", icon: "🏡" },
];

interface ServiceSelectionProps {
  selectedServices: string[];
  onToggleService: (serviceId: string) => void;
}

const ServiceSelection = ({ selectedServices, onToggleService }: ServiceSelectionProps) => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-xl font-bold text-foreground mb-2">Select Services</h3>
        <p className="text-muted-foreground">Choose all services you're interested in</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {PRIMARY_SERVICES.map((service) => {
          const isSelected = selectedServices.includes(service.id);
          return (
            <button
              key={service.id}
              type="button"
              onClick={() => onToggleService(service.id)}
              className={cn(
                "flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left",
                isSelected
                  ? "border-primary bg-primary/10"
                  : "border-muted hover:border-primary/50 hover:bg-accent/20"
              )}
            >
              <span className="text-2xl">{service.icon}</span>
              <span className="flex-1 font-semibold">{service.label}</span>
              <CheckCircle
                className={cn(
                  "w-5 h-5 transition-all",
                  isSelected ? "text-primary" : "text-muted-foreground/30"
                )}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceSelection;
