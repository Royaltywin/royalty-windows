import { Link } from "react-router-dom";
import { Phone, Mail, Globe, Clock } from "lucide-react";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => {
  const services = [
    { name: "Window Cleaning", path: "/window-cleaning" },
    { name: "Pressure Washing", path: "/pressure-washing" },
    { name: "Commercial Pressure Washing", path: "/pressure-washing#commercial" },
    { name: "Residential Pressure Washing", path: "/pressure-washing#residential" },
    { name: "Concrete Cleaning", path: "/pressure-washing/concrete-cleaning" },
    { name: "Roof Cleaning", path: "/roof-cleaning" },
    { name: "Solar Panel Cleaning", path: "/solar-panel-cleaning" },
    { name: "Gutter Cleaning", path: "/gutter-cleaning" },
    { name: "Graffiti Removal", path: "/graffiti-removal" },
    { name: "Post-Construction Cleanup", path: "/construction-cleanup" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "All Services", path: "/#services" },
    { name: "Service Areas", path: "/locations" },
    { name: "Book Now", path: "/#quote" },
    { name: "Contact Us", path: "/#contact" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms-of-service" },
  ];

  const counties = [
    "Orange County",
    "Riverside County",
    "San Bernardino County",
    "Los Angeles County",
    "San Diego County",
    "Ventura County",
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-3 text-primary">
            ROYALTY CLEANING SERVICES
          </h2>
          <p className="text-xl font-bold mb-2">
            #1 Rated Cleaning Services in Southern California
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by hundreds of homeowners & business owners • Professional, Reliable, Local
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Services Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground border-b-2 border-accent pb-2">
              OUR SERVICES
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-secondary-foreground/80 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    • {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground border-b-2 border-accent pb-2">
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-secondary-foreground/80 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    • {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground border-b-2 border-accent pb-2">
              CONTACT
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                <div>
                  <a
                    href="tel:+19519994546"
                    className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm font-medium"
                  >
                    (951) 999-4546
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                <div>
                  <a
                    href="mailto:info@getroyaltyservices.com"
                    className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    info@getroyaltyservices.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                <div>
                  <a
                    href="https://getroyaltyservices.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    getroyaltyservices.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                <div className="text-secondary-foreground/80 text-sm">
                  Available 7 Days/Week
                </div>
              </li>
            </ul>
          </div>

          {/* Service Area Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground border-b-2 border-accent pb-2">
              SERVICE AREA
            </h3>
            <p className="text-sm text-secondary-foreground/80 mb-3 font-semibold">
              All of Southern California
            </p>
            <ul className="space-y-1">
              {counties.map((county) => (
                <li key={county} className="text-sm text-secondary-foreground/70">
                  • {county}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mb-8 py-8 border-t border-b border-secondary-foreground/20">
          <h4 className="text-center text-sm font-semibold text-muted-foreground mb-4">
            CONNECT WITH US
          </h4>
          <SocialMediaLinks iconSize={22} />
        </div>

        {/* Bottom Bar */}
        <div className="text-center space-y-2">
          <p className="text-sm text-secondary-foreground/60">
            &copy; 2025 Royalty Cleaning Services. All rights reserved.
          </p>
          <p className="text-sm font-semibold text-accent">
            Licensed, Insured & Bonded
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
