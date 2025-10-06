import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const services = [
  "Window Cleaning",
  "Pressure Washing",
  "Roof Washing",
  "House Washing",
  "Gutter Cleaning",
  "Solar Panel Cleaning",
  "Bird Control",
  "Other"
];

const formSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  phone: z.string().trim().min(10, "Valid phone number required").max(20),
  email: z.string().trim().email("Valid email required").max(255),
  address: z.string().trim().max(500).optional(),
  notes: z.string().trim().max(1000).optional()
});

const QuoteWizard = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [showDialog, setShowDialog] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    notes: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const toggleService = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleGetStarted = () => {
    if (selectedServices.length === 0) {
      toast({
        title: "Please select at least one service",
        variant: "destructive"
      });
      return;
    }
    setShowDialog(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Validate using zod
    const result = formSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    // Prepare data for submission (without logging sensitive info)
    const submissionData = {
      services: selectedServices,
      ...result.data
    };
    
    // Here you would send to backend
    toast({
      title: "Quote Request Received!",
      description: "We'll contact you within 24 hours with your free estimate.",
    });
    
    setShowDialog(false);
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      notes: ""
    });
    setSelectedServices([]);
  };

  return (
    <>
      <Card className="w-full max-w-md mx-auto p-6 md:p-8 bg-[hsl(180,70%,70%)] border-none shadow-2xl h-fit">
        <div className="text-center space-y-4">
          <h3 className="text-2xl md:text-3xl font-black text-[hsl(220,20%,20%)]">
            Start Your Free Estimate
          </h3>
          
          <div className="space-y-4">
            <p className="text-lg font-bold text-[hsl(350,90%,50%)] uppercase tracking-wide">
              I'm Interested In:
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {services.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => toggleService(service)}
                  className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 border-2 ${
                    selectedServices.includes(service)
                      ? "bg-[hsl(220,20%,20%)] text-white border-[hsl(220,20%,20%)] scale-105"
                      : "bg-white text-[hsl(220,20%,20%)] border-white hover:scale-105 hover:shadow-lg"
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          <Button
            onClick={handleGetStarted}
            size="lg"
            className="bg-[hsl(350,90%,50%)] hover:bg-[hsl(350,90%,45%)] text-white font-bold text-lg px-12 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105"
          >
            Get Started
          </Button>
        </div>
      </Card>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Get Your Free Estimate</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-accent/20 border-2 border-accent rounded-xl p-4">
              <p className="font-semibold mb-2">Selected Services:</p>
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

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className={errors.firstName ? "border-destructive" : ""}
                />
                {errors.firstName && (
                  <p className="text-sm text-destructive">{errors.firstName}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className={errors.lastName ? "border-destructive" : ""}
                />
                {errors.lastName && (
                  <p className="text-sm text-destructive">{errors.lastName}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(951) 999-4546"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className={errors.phone ? "border-destructive" : ""}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">{errors.phone}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Property Address (Optional)</Label>
              <Input
                id="address"
                placeholder="123 Main St, City, CA 92886"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes (Optional)</Label>
              <Textarea
                id="notes"
                placeholder="Tell us more about your cleaning needs..."
                rows={4}
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
                className={errors.notes ? "border-destructive" : ""}
              />
              {errors.notes && (
                <p className="text-sm text-destructive">{errors.notes}</p>
              )}
            </div>

            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowDialog(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="accent"
                className="flex-1"
              >
                Submit Request
              </Button>
            </div>

            <p className="text-sm text-muted-foreground text-center">
              Or call us directly at{" "}
              <a href="tel:+19519994546" className="text-accent font-bold hover:underline">
                (951) 999-4546
              </a>
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QuoteWizard;
