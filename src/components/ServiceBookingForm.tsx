import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ServiceBookingFormProps {
  serviceName: string;
}

const ServiceBookingForm = ({ serviceName }: ServiceBookingFormProps) => {
  return (
    <div className="bg-accent/10 border-4 border-accent rounded-3xl p-8 shadow-accent-glow">
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
