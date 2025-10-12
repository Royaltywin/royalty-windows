import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Shield, Award, Users, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

const AboutUs = () => {
  return (
    <>
      <SEOHead
        title="About Us | Royalty Cleaning Services - Family-Owned & Faith-Based"
        description="Learn about Royalty Cleaning Services - a family-owned, faith-based cleaning company serving Southern California with professional window cleaning, pressure washing, and property maintenance."
        url="https://getroyaltyservices.com/about"
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
            <h1 className="text-3xl md:text-4xl font-bold">About Royalty Cleaning Services</h1>
            <p className="text-primary-foreground/80 mt-2">Family-Owned • Faith-Based • Southern California's Trusted Choice</p>
          </div>
        </header>

        {/* Main Content */}
        <main id="main-content" className="container mx-auto px-4 py-12 max-w-5xl">
          {/* Our Story */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <Heart className="w-16 h-16 text-accent mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
            </div>
            <div className="bg-secondary p-8 rounded-lg">
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Royalty Cleaning Services is a <strong className="text-foreground">family-owned and operated</strong> business 
                proudly serving Southern California. Based in the Yorba Linda, Temecula, and Murrieta areas, we've built our 
                reputation on integrity, quality, and exceptional customer service.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a <strong className="text-foreground">faith-based company</strong>, we operate according to the principle 
                found in <em>Ephesians 6:7</em>: "Serve wholeheartedly, as if you were serving the Lord, not people." This 
                guiding principle shapes everything we do—from how we treat our customers to how we train our team.
              </p>
            </div>
          </section>

          {/* Our Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-6 rounded-lg">
                <Heart className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Faith-Based Service</h3>
                <p className="text-muted-foreground">
                  We serve wholeheartedly, treating every customer and property with the respect and care we'd want 
                  for ourselves. Our faith guides our work ethic and commitment to excellence.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <Award className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Quality Over Quantity</h3>
                <p className="text-muted-foreground">
                  We believe in doing fewer jobs exceptionally well rather than rushing through many. Every project 
                  receives our full attention and dedication to perfection.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <Shield className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">100% Satisfaction Guarantee</h3>
                <p className="text-muted-foreground">
                  Your complete satisfaction is our promise. If you're not happy with our work, we'll make it right—
                  no questions asked, no additional charge.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <Users className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Community Commitment</h3>
                <p className="text-muted-foreground">
                  As a local business, we're invested in our community. We support local causes, employ local 
                  residents, and treat every customer like a neighbor.
                </p>
              </div>
            </div>
          </section>

          {/* Our Team */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Professional Team</h2>
            <div className="bg-accent/10 border-2 border-accent/30 p-8 rounded-lg">
              <p className="text-lg text-muted-foreground mb-6 text-center">
                Every member of our team is carefully selected and thoroughly trained to uphold our high standards:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong className="text-foreground">Trained & Educated:</strong> Comprehensive training in proper techniques and safety</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong className="text-foreground">Background Checked:</strong> Every team member undergoes thorough vetting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong className="text-foreground">Uniformed & Professional:</strong> Easy to identify and always presentable</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong className="text-foreground">Well-Mannered:</strong> Courteous, respectful, and professional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong className="text-foreground">Honest & Trustworthy:</strong> Integrity in every interaction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong className="text-foreground">Fully Insured:</strong> Complete protection for your property</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Service Area */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Serving All of Southern California</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-secondary p-4 rounded-lg text-center">
                <p className="font-semibold text-foreground">Orange County</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg text-center">
                <p className="font-semibold text-foreground">Riverside County</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg text-center">
                <p className="font-semibold text-foreground">San Bernardino County</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg text-center">
                <p className="font-semibold text-foreground">Los Angeles County</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg text-center">
                <p className="font-semibold text-foreground">San Diego County</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg text-center">
                <p className="font-semibold text-foreground">Ventura County</p>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-6">
              <Link to="/locations" className="text-accent hover:underline font-semibold">
                View all cities we serve →
              </Link>
            </p>
          </section>

          {/* Our Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Comprehensive Cleaning Services</h2>
            <div className="bg-secondary p-8 rounded-lg">
              <p className="text-lg text-muted-foreground mb-6 text-center">
                We offer a complete range of professional cleaning and maintenance services:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Window Washing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Screen Repair & Replacement</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Solar Panel Cleaning</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Gutter Cleaning</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Pressure Washing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Roof Cleaning</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Christmas Light Installation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Post-Construction Cleanup</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Graffiti Removal</span>
                </div>
              </div>
              <p className="text-center mt-6">
                <Link to="/#services" className="text-accent hover:underline font-semibold">
                  Explore all our services →
                </Link>
              </p>
            </div>
          </section>

          {/* 5-Star Reputation */}
          <section className="mb-16">
            <div className="bg-accent/10 border-2 border-accent/30 p-8 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Award key={star} className="w-8 h-8 text-accent" fill="currentColor" />
                ))}
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">5-Star Reputation</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We're proud to maintain a stellar reputation across Southern California. Our commitment to excellence 
                has earned us hundreds of 5-star reviews from satisfied residential and commercial clients.
              </p>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="bg-primary text-primary-foreground p-8 md:p-12 rounded-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join hundreds of satisfied customers across Southern California
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left max-w-2xl mx-auto">
              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <a href="tel:+19519994546" className="text-lg hover:underline">
                    (951) 999-4546
                  </a>
                  <p className="text-sm text-primary-foreground/80">Available 7 Days/Week</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <a href="mailto:info@getroyaltyservices.com" className="text-lg hover:underline break-all">
                    info@getroyaltyservices.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#quote">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg px-8">
                  Get Your Free Quote
                </Button>
              </Link>
              <Link to="/#services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
                  View Our Services
                </Button>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AboutUs;
