import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

const AccessibilityStatement = () => {
  return (
    <>
      <SEOHead
        title="Accessibility Statement | Royalty Cleaning Services"
        description="Our commitment to making our website and services accessible to everyone. Learn about our accessibility features and how to contact us for assistance."
        url="https://getroyaltyservices.com/accessibility"
      />
      
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-primary text-primary-foreground py-6 px-4">
          <div className="container mx-auto">
            <Link to="/">
              <Button variant="ghost" className="mb-4 text-primary-foreground hover:bg-primary-foreground/20">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold">Accessibility Statement</h1>
            <p className="text-primary-foreground/80 mt-2">Last Updated: January 15, 2025</p>
          </div>
        </header>

        {/* Main Content */}
        <main id="main-content" className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Our Commitment */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Commitment to Accessibility</h2>
            <p className="text-muted-foreground mb-4">
              Royalty Cleaning Services is committed to ensuring digital accessibility for people with disabilities. 
              We are continually improving the user experience for everyone and applying the relevant accessibility standards.
            </p>
            <p className="text-muted-foreground">
              We strive to meet Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards to ensure our website 
              provides equal access and opportunity to all individuals, regardless of ability.
            </p>
          </section>

          {/* Accessibility Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Accessibility Features</h2>
            <p className="text-muted-foreground mb-4">
              Our website includes the following accessibility features:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>Keyboard Navigation:</strong> Navigate our entire website using only your keyboard</li>
              <li><strong>Screen Reader Compatible:</strong> Our site works with popular screen readers like JAWS, NVDA, and VoiceOver</li>
              <li><strong>Alternative Text:</strong> All images include descriptive alt text for context</li>
              <li><strong>Color Contrast:</strong> Text and background colors meet WCAG AA contrast ratio standards</li>
              <li><strong>Resizable Text:</strong> Text can be resized up to 200% without loss of functionality</li>
              <li><strong>Clear Navigation:</strong> Consistent and logical navigation structure throughout the site</li>
              <li><strong>Descriptive Links:</strong> Link text clearly describes the destination</li>
              <li><strong>Form Labels:</strong> All form fields include clear, descriptive labels</li>
              <li><strong>Skip Navigation:</strong> Skip links allow users to bypass repetitive content</li>
            </ul>
          </section>

          {/* Known Limitations */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Known Limitations & Ongoing Improvements</h2>
            <p className="text-muted-foreground mb-4">
              We are continuously working to enhance accessibility across our website. We acknowledge that some areas 
              may still present challenges:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Some third-party embedded content may not be fully accessible</li>
              <li>We are actively working to add captions and transcripts to video content</li>
              <li>Legacy content is being updated to meet current accessibility standards</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Our team is dedicated to addressing these limitations and continuously improving our accessibility practices.
            </p>
          </section>

          {/* Feedback & Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Feedback & Assistance</h2>
            <p className="text-muted-foreground mb-4">
              We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers 
              or need assistance accessing any content, please contact us:
            </p>
            
            <div className="bg-secondary p-6 rounded-lg space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <a 
                    href="tel:+19519994546" 
                    className="text-accent hover:underline text-lg"
                  >
                    (951) 999-4546
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Available 7 Days/Week</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <a 
                    href="mailto:info@getroyaltyservices.com" 
                    className="text-accent hover:underline"
                  >
                    info@getroyaltyservices.com
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-secondary-foreground/20">
                <p className="text-muted-foreground text-sm">
                  <strong>Alternative Format Requests:</strong> If you need any content provided in an alternative 
                  format, please contact us and we will work to accommodate your request as quickly as possible.
                </p>
              </div>
            </div>
          </section>

          {/* Technical Specifications */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Technical Specifications</h2>
            <p className="text-muted-foreground mb-4">
              Our website is designed to be compatible with the following technologies:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>Browsers:</strong> Chrome, Firefox, Safari, Edge (latest versions)</li>
              <li><strong>Screen Readers:</strong> JAWS, NVDA, VoiceOver, TalkBack</li>
              <li><strong>Mobile Devices:</strong> iOS and Android devices with assistive technologies</li>
              <li><strong>Operating Systems:</strong> Windows, macOS, iOS, Android</li>
            </ul>
          </section>

          {/* Standards & Compliance */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Standards & Compliance</h2>
            <p className="text-muted-foreground mb-4">
              We are committed to following these accessibility standards and guidelines:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</li>
              <li>Americans with Disabilities Act (ADA) Title III</li>
              <li>Section 508 of the Rehabilitation Act</li>
            </ul>
          </section>

          {/* CTA Section */}
          <section className="bg-accent/10 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              We're Here to Help
            </h2>
            <p className="text-muted-foreground mb-6">
              If you have questions, feedback, or need assistance with accessibility, 
              please don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Return Home
                </Button>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AccessibilityStatement;
