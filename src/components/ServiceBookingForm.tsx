import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ServiceBookingFormProps {
  serviceName: string;
  showSolarFields?: boolean;
  showPressureWashingFields?: boolean;
}

const ServiceBookingForm = ({ serviceName, showSolarFields = false, showPressureWashingFields = false }: ServiceBookingFormProps) => {
  return (
    <div className="bg-accent/10 border-4 border-accent rounded-3xl p-8 shadow-accent-glow" id="quote-form">
      <h3 className="text-3xl md:text-4xl font-black text-foreground mb-6">
        Get Your Free {serviceName} Estimate
      </h3>

      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name *</Label>
            <Input id="firstName" placeholder="John" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name *</Label>
            <Input id="lastName" placeholder="Doe" required />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone *</Label>
            <Input id="phone" type="tel" placeholder="(951) 999-4546" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" placeholder="you@example.com" required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Property Address *</Label>
          <Input id="address" placeholder="123 Main St, City, CA 92886" required />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="propertyType">Property Type *</Label>
            <Select>
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
            <Label htmlFor="preferredDate">Preferred Service Date</Label>
            <Input id="preferredDate" type="date" />
          </div>
        </div>

        {/* Solar-Specific Fields */}
        {showSolarFields && (
          <>
            <div className="space-y-2">
              <Label htmlFor="panelCount">Number of Solar Panels (if known)</Label>
              <Input id="panelCount" type="number" placeholder="e.g., 24" />
            </div>

            <div className="space-y-3">
              <Label>Add-On Services</Label>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="birdNetting" className="w-4 h-4" />
                  <Label htmlFor="birdNetting" className="font-normal cursor-pointer">
                    Bird Netting Installation
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="gutterClean" className="w-4 h-4" />
                  <Label htmlFor="gutterClean" className="font-normal cursor-pointer">
                    Gutter Cleaning
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="roofWash" className="w-4 h-4" />
                  <Label htmlFor="roofWash" className="font-normal cursor-pointer">
                    Roof Washing
                  </Label>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Label>Preferred Maintenance Plan</Label>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <input type="radio" name="plan" id="sunnyStart" className="w-4 h-4" />
                  <Label htmlFor="sunnyStart" className="font-normal cursor-pointer">
                    Sunny Start (Bi-Annual)
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" name="plan" id="brighterBoost" className="w-4 h-4" />
                  <Label htmlFor="brighterBoost" className="font-normal cursor-pointer">
                    Brighter Boost (Tri-Annual)
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" name="plan" id="fullSun" className="w-4 h-4" />
                  <Label htmlFor="fullSun" className="font-normal cursor-pointer">
                    Full Sun Power (Quarterly)
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" name="plan" id="shield" className="w-4 h-4" />
                  <Label htmlFor="shield" className="font-normal cursor-pointer">
                    Shield Plan ($25/month)
                  </Label>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Pressure Washing Specific Fields */}
        {showPressureWashingFields && (
          <>
            <div className="space-y-2">
              <Label htmlFor="pwServiceType">Service Type *</Label>
              <Select>
                <SelectTrigger id="pwServiceType">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="residential">Residential</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label>Services Needed</Label>
              <div className="grid md:grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="concreteClean" className="w-4 h-4" />
                  <Label htmlFor="concreteClean" className="font-normal cursor-pointer">
                    Concrete Cleaning
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="buildingExterior" className="w-4 h-4" />
                  <Label htmlFor="buildingExterior" className="font-normal cursor-pointer">
                    Building Exterior Wash
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="roofClean" className="w-4 h-4" />
                  <Label htmlFor="roofClean" className="font-normal cursor-pointer">
                    Roof Cleaning
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="deckPatio" className="w-4 h-4" />
                  <Label htmlFor="deckPatio" className="font-normal cursor-pointer">
                    Deck/Patio Cleaning
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="driveway" className="w-4 h-4" />
                  <Label htmlFor="driveway" className="font-normal cursor-pointer">
                    Driveway/Garage Cleaning
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="graffiti" className="w-4 h-4" />
                  <Label htmlFor="graffiti" className="font-normal cursor-pointer">
                    Graffiti Removal
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="parkingLot" className="w-4 h-4" />
                  <Label htmlFor="parkingLot" className="font-normal cursor-pointer">
                    Parking Garage/Lot
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="awningCanopy" className="w-4 h-4" />
                  <Label htmlFor="awningCanopy" className="font-normal cursor-pointer">
                    Awning/Canopy
                  </Label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="squareFootage">Approximate Square Footage (optional)</Label>
              <Input id="squareFootage" type="number" placeholder="e.g., 2000" />
            </div>

            <div className="space-y-3">
              <Label>Maintenance Plan Interest</Label>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <input type="radio" name="pwPlan" id="oneTime" className="w-4 h-4" />
                  <Label htmlFor="oneTime" className="font-normal cursor-pointer">
                    One-Time Service
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" name="pwPlan" id="monthly" className="w-4 h-4" />
                  <Label htmlFor="monthly" className="font-normal cursor-pointer">
                    Monthly Maintenance
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" name="pwPlan" id="quarterly" className="w-4 h-4" />
                  <Label htmlFor="quarterly" className="font-normal cursor-pointer">
                    Quarterly Maintenance
                  </Label>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="space-y-2">
          <Label htmlFor="notes">Additional Notes</Label>
          <Textarea
            id="notes"
            placeholder="Tell us more about your cleaning needs..."
            rows={4}
          />
        </div>

        <Button variant="accent" size="lg" className="w-full text-xl py-6 rounded-2xl">
          Request Free Estimate
        </Button>

        <p className="text-sm text-muted-foreground text-center">
          Or call us directly at <a href="tel:+19519994546" className="text-accent font-bold hover:underline">(951) 999-4546</a>
        </p>
      </form>
    </div>
  );
};

export default ServiceBookingForm;
