import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { services } from "@/data/locations";
import { cn } from "@/lib/utils";
const Header = () => {
  return <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full px-4 md:px-8 py-1">
        {/* Top Row: Logo + Contact Info */}
        <div className="flex items-center justify-between mb-1 w-full">
          <Link to="/">
            <Logo />
          </Link>
          
          <a href="tel:951-999-4546" className="text-2xl md:text-3xl font-bold text-primary hover:text-accent transition-colors whitespace-nowrap ml-auto">
            (951) 999-4546
          </a>
        </div>

        {/* Bottom Row: Navigation Menu */}
        <nav className="bg-gradient-primary rounded-xl p-4 mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-3">
            {services.map(service => (
              <Link
                key={service.key}
                to={`/${service.key}`}
                className="px-4 py-2 bg-background/20 backdrop-blur-sm text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-transform text-sm"
              >
                {service.name}
              </Link>
            ))}
            <Link
              to="/about"
              className="px-4 py-2 bg-background/20 backdrop-blur-sm text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-transform text-sm"
            >
              About Us
            </Link>
            <Link
              to="/locations"
              className="px-4 py-2 bg-background/20 backdrop-blur-sm text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-transform text-sm"
            >
              Locations
            </Link>
            <Link
              to="/gallery"
              className="px-4 py-2 bg-background/20 backdrop-blur-sm text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-transform text-sm"
            >
              Gallery
            </Link>
            <a
              href="tel:951-999-4546"
              className="px-4 py-2 bg-background/20 backdrop-blur-sm text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-transform text-sm"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>;
};
export default Header;