import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  id: number;
  name: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
}

const StepIndicator = ({ steps, currentStep }: StepIndicatorProps) => {
  return (
    <div className="w-full py-6">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all",
                  currentStep > step.id
                    ? "bg-primary border-primary text-primary-foreground"
                    : currentStep === step.id
                    ? "border-primary text-primary bg-primary/10"
                    : "border-muted-foreground/30 text-muted-foreground"
                )}
              >
                {currentStep > step.id ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span className="font-semibold">{step.id}</span>
                )}
              </div>
              <span
                className={cn(
                  "text-xs mt-2 text-center hidden sm:block",
                  currentStep >= step.id ? "text-foreground font-medium" : "text-muted-foreground"
                )}
              >
                {step.name}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "flex-1 h-0.5 mx-2 transition-all",
                  currentStep > step.id ? "bg-primary" : "bg-muted-foreground/30"
                )}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
