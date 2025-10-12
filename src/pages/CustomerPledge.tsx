import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Shield, Phone, Calendar, CreditCard, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

const CustomerPledge = () => {
  return (
    <>
      <SEOHead
        title="Customer Pledge of Satisfaction | Royalty Cleaning Services"
        description="Our pledge to provide the highest value in cleaning services. We deliver superior service to every customer, every time. 100% satisfaction guaranteed."
        url="https://getroyaltyservices.com/customer-pledge"
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
            <h1 className="text-3xl md:text-4xl font-bold">Customer Pledge of Satisfaction</h1>
            <p className="text-primary-foreground/80 mt-2">Our commitment to excellence in every service</p>
          </div>
        </header>

        {/* Main Content */}
        <main id="main-content" className="container mx-auto px-4 py-12 max-w-5xl">
          {/* Main Pledge */}
          <section className="mb-16 text-center">
            <div className="bg-gradient-to-br from-accent/20 to-primary/10 p-8 md:p-12 rounded-2xl border-2 border-accent/30">
              <Star className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
                Our Promise to You
              </h2>
              <p className="text-xl md:text-2xl font-bold text-foreground mb-4 leading-relaxed">
                We pledge to provide the highest value in window cleaning and property maintenance services.
              </p>
              <p className="text-xl md:text-2xl font-bold text-accent leading-relaxed">
                We will deliver superior service to every customer, every time.
              </p>
            </div>
          </section>

          {/* Quality Commitment */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Why Quality Matters
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-6 rounded-lg">
                <CheckCircle className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Your Image, Our Priority</h3>
                <p className="text-muted-foreground">
                  Our service enhances your quality image. Clean windows make a significant difference in the 
                  atmosphere and appearance of your property, creating a positive first impression for visitors and customers.
                </p>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg">
                <CheckCircle className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Essential for Your Business</h3>
                <p className="text-muted-foreground">
                  Clean windows are an essential element for business appearance. We understand that your property's 
                  cleanliness directly impacts your brand reputation and customer perception.
                </p>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg">
                <CheckCircle className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Home & Work Assurance</h3>
                <p className="text-muted-foreground">
                  Whether it's your home or workplace, you can count on us to deliver exceptional results that 
                  enhance your environment and bring clarity to your view.
                </p>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg">
                <CheckCircle className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Brighten Your World</h3>
                <p className="text-muted-foreground">
                  Let us brighten your world today with professional cleaning services that transform your property 
                  and provide lasting value.
                </p>
              </div>
            </div>
          </section>

          {/* What We Deliver */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              What We Deliver
            </h2>
            <div className="bg-secondary p-8 rounded-lg space-y-6">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Insured & Bonded Professionals</h3>
                  <p className="text-muted-foreground">
                    All our team members are fully insured and bonded, giving you complete peace of mind. 
                    We carry comprehensive liability insurance to protect your property.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Comprehensive Service Offerings</h3>
                  <p className="text-muted-foreground mb-3">Beyond windows, we also clean:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Gutters and downspouts</li>
                    <li>Mirrors and glass surfaces</li>
                    <li>Ceiling fans and light fixtures</li>
                    <li>Solar panels</li>
                    <li>Pressure washing (driveways, patios, siding)</li>
                    <li>Roof cleaning and maintenance</li>
                    <li>Post-construction cleanup</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Hard-to-Reach Specialists</h3>
                  <p className="text-muted-foreground">
                    We handle difficult spots including high windows, 3-story buildings, and areas requiring 
                    specialized equipment. No job is too challenging for our experienced team.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Custom Scheduling Plans</h3>
                  <p className="text-muted-foreground">
                    We work around your schedule with flexible appointment times. Choose from one-time deep cleans, 
                    monthly maintenance, or custom recurring service plans.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CreditCard className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Convenient Payment Options</h3>
                  <p className="text-muted-foreground">
                    We accept all major credit cards, debit cards, checks, and cash for your convenience.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Quality Guarantee */}
          <section className="mb-16">
            <div className="bg-accent/10 border-2 border-accent/30 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
                100% Satisfaction Guarantee
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-6">
                If you are not completely satisfied with our service, we will make it right—at no additional charge.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-bold text-foreground mb-2">Quality First</h4>
                  <p className="text-sm text-muted-foreground">
                    We don't compromise on quality. Every job meets our high standards.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Same-Day Corrections</h4>
                  <p className="text-sm text-muted-foreground">
                    If there's an issue, we'll return the same day to fix it.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">No Extra Cost</h4>
                  <p className="text-sm text-muted-foreground">
                    Corrections and callbacks are always free of charge.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Service Excellence */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Southern California's Leader in Cleaning Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Professional Team</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Trained and certified professionals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Uniformed and identified team members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Background-checked and vetted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Courteous and respectful service</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Safety & Standards</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Professional-grade equipment and eco-friendly solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>OSHA-compliant safety procedures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Environmentally responsible practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Property protection protocols</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-primary text-primary-foreground p-8 md:p-12 rounded-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience the Royalty Difference
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let us brighten your world today with our professional cleaning services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#quote">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg px-8">
                  Get Your Free Quote
                </Button>
              </Link>
              <a href="tel:+19519994546">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: (951) 999-4546
                </Button>
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default CustomerPledge;
