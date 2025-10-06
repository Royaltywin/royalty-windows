import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ServiceBookingForm from "@/components/ServiceBookingForm";
import { CheckCircle } from "lucide-react";

interface ServicePageTemplateProps {
  title: string;
  description: string;
  heroImage: string;
  benefits: string[];
  services: string[];
  beforeAfterImages: Array<{ before: string; after: string; title: string }>;
  children?: ReactNode;
}

const ServicePageTemplate = ({
  title,
  description,
  heroImage,
  benefits,
  services,
  beforeAfterImages,
  children,
}: ServicePageTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 text-3d">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 md:px-8 py-16 space-y-24">
        {/* Why Choose Us */}
        <section>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8 text-center">
            Why Choose <span className="text-gold text-3d">Royalty</span>?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-6 bg-card border-2 border-accent/30 rounded-2xl hover:border-accent transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-foreground font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Included */}
        <section>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8 text-center">
            Our Services Include
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-gradient-primary text-primary-foreground rounded-xl font-semibold"
              >
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Before & After Gallery */}
        {beforeAfterImages.length > 0 && (
          <section>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-12 text-center">
              See the <span className="text-gold text-3d">Difference</span>
            </h2>
            <BeforeAfterSlider images={beforeAfterImages} />
          </section>
        )}

        {/* Additional Content */}
        {children}

        {/* Booking Form */}
        <section id="quote">
          <ServiceBookingForm serviceName={title} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicePageTemplate;
