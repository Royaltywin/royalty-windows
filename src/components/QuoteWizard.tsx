import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Window Cleaning",
  "Pressure Washing",
  "Roof Washing",
  "House Washing",
  "Gutter Cleaning",
  "Solar Panel Cleaning",
  "Graffiti Removal",
  "Construction Cleanup"
];

const QuoteWizard = () => {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    propertyType: "",
    stories: "",
    squareFeet: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    preferredDate: "",
    notes: ""
  });
  const { toast } = useToast();

  const toggleService = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleNext = () => {
    if (step === 1 && selectedServices.length === 0) {
      toast({
        title: "Please select at least one service",
        variant: "destructive"
      });
      return;
    }
    setStep(prev => prev + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Here you would send the data to your backend
    console.log("Form submitted:", { selectedServices, ...formData });
    
    toast({
      title: "Quote Request Received!",
      description: "We'll contact you within 24 hours with your free estimate.",
    });
  };

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  return (
    <Card className="w-full max-w-4xl mx-auto p-8 bg-accent/10 border-4 border-accent shadow-accent-glow">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-semibold text-foreground">
            Step {step} of {totalSteps}
          </span>
          <span className="text-sm font-semibold text-foreground">{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Select Services */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-black text-foreground mb-2">
                What services do you need?
              </h3>
              <p className="text-muted-foreground">
                Select all that apply
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => toggleService(service)}
                  className={`flex items-center gap-3 p-4 border-2 rounded-xl transition-all duration-200 ${
                    selectedServices.includes(service)
                      ? "bg-accent border-accent text-accent-foreground"
                      : "bg-background border-accent/30 hover:border-accent"
                  }`}
                >
                  <CheckCircle
                    className={`w-5 h-5 ${
                      selectedServices.includes(service) ? "text-accent-foreground" : "text-muted-foreground"
                    }`}
                  />
                  <span className="font-semibold">{service}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Property Details */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-3xl md:text-4xl font-black text-foreground mb-2">
                Tell us about your property
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="propertyType">Property Type *</Label>
                <Select
                  value={formData.propertyType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, propertyType: value })
                  }
                >
                  <SelectTrigger id="propertyType">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="industrial">Industrial</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="stories">Number of Stories</Label>
                <Input
                  id="stories"
                  type="number"
                  min="1"
                  placeholder="1"
                  value={formData.stories}
                  onChange={(e) =>
                    setFormData({ ...formData, stories: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="squareFeet">Approximate Square Feet</Label>
                <Input
                  id="squareFeet"
                  type="number"
                  placeholder="2000"
                  value={formData.squareFeet}
                  onChange={(e) =>
                    setFormData({ ...formData, squareFeet: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="preferredDate">Preferred Service Date</Label>
                <Input
                  id="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) =>
                    setFormData({ ...formData, preferredDate: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Property Address</Label>
              <Input
                id="address"
                placeholder="123 Main St, City, CA 92886"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>
          </div>
        )}

        {/* Step 3: Contact Information */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-3xl md:text-4xl font-black text-foreground mb-2">
                How can we reach you?
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  required
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  required
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(951) 999-4546"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                placeholder="Tell us more about your cleaning needs..."
                rows={4}
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
              />
            </div>

            <div className="bg-accent/20 border-2 border-accent rounded-xl p-6">
              <h4 className="font-bold text-foreground mb-3">Your Selected Services:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedServices.map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-semibold"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {step > 1 && (
            <Button
              type="button"
              variant="outline"
              onClick={() => setStep(prev => prev - 1)}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          )}

          {step < totalSteps ? (
            <Button
              type="button"
              variant="accent"
              onClick={handleNext}
              className="ml-auto gap-2"
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              variant="accent"
              className="ml-auto"
            >
              Get Your Free Estimate
            </Button>
          )}
        </div>

        {step === totalSteps && (
          <p className="text-sm text-muted-foreground text-center mt-4">
            Or call us directly at{" "}
            <a href="tel:+19519994546" className="text-accent font-bold hover:underline">
              (951) 999-4546
            </a>
          </p>
        )}
      </form>
    </Card>
  );
};

export default QuoteWizard;
