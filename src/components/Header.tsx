import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { Menu, Facebook, Linkedin, Star, Globe, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { services } from "@/data/locations";
import { cn } from "@/lib/utils";

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const Header = () => {
  return <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full px-4 md:px-8 py-1">
        {/* Top Row: Logo + Contact Info */}
        <div className="flex justify-between items-center mb-1 w-full">
          <Link to="/">
            <Logo />
          </Link>
          
          <div className="flex flex-col items-end gap-2">
            {/* Social Media Icons Row */}
            <div className="flex items-center gap-2">
              <a href="https://www.facebook.com/people/Value-You-Can-See/61571547154503/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border-2 border-primary hover:bg-primary/10 transition-all hover:scale-110">
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a href="https://www.google.com/search?q=value+you+can+see" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border-2 border-primary hover:bg-primary/10 transition-all hover:scale-110">
                <Globe className="w-5 h-5 text-primary" />
              </a>
              <a href="https://www.yelp.com/search?find_desc=value+you+can+see" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border-2 border-primary hover:bg-primary/10 transition-all hover:scale-110">
                <Star className="w-5 h-5 text-primary" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border-2 border-primary hover:bg-primary/10 transition-all hover:scale-110">
                <XIcon />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border-2 border-primary hover:bg-primary/10 transition-all hover:scale-110">
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a href="https://nextdoor.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border-2 border-primary hover:bg-primary/10 transition-all hover:scale-110">
                <Home className="w-5 h-5 text-primary" />
              </a>
            </div>
            
            {/* Phone Number */}
            <a href="tel:951-999-4546" className="font-gunplay text-xl md:text-2xl lg:text-3xl text-outlined-thick tracking-wider font-black hover:scale-105 transition-transform whitespace-nowrap">
              (951) 999-4546
            </a>
          </div>
        </div>

        {/* Bottom Row: Navigation Menu */}
        <nav className="bg-muted rounded-xl p-4 mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 hover:bg-accent hover:text-accent-foreground transition-all text-sm"
            >
              Home
            </Link>
            <Link
              to="/locations"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 hover:bg-accent hover:text-accent-foreground transition-all text-sm"
            >
              Locations
            </Link>
            <Link
              to="/window-cleaning"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 hover:bg-accent hover:text-accent-foreground transition-all text-sm"
            >
              Window Cleaning
            </Link>
            <Link
              to="/pressure-washing"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 hover:bg-accent hover:text-accent-foreground transition-all text-sm"
            >
              Pressure Washing
            </Link>
            <Link
              to="/solar-panel-cleaning"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 hover:bg-accent hover:text-accent-foreground transition-all text-sm"
            >
              Solar Panel Cleaning
            </Link>
            <Link
              to="/services"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 hover:bg-accent hover:text-accent-foreground transition-all text-sm"
            >
              Other Services
            </Link>
            <Link
              to="/construction-cleanup"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 hover:bg-accent hover:text-accent-foreground transition-all text-sm"
            >
              Post Construction
            </Link>
            <Link
              to="/roof-cleaning"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 hover:bg-accent hover:text-accent-foreground transition-all text-sm"
            >
              Roof Cleaning
            </Link>
          </div>
        </nav>
      </div>
    </header>;
};
export default Header;