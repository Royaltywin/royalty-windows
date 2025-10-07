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
        <nav className="bg-muted rounded-xl p-4 mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="px-4 py-2 bg-background/50 backdrop-blur-sm text-foreground rounded-lg font-semibold hover:scale-105 hover:bg-primary hover:text-primary-foreground transition-all text-sm"
            >
              Home
            </Link>
            <Link
              to="/locations"
              className="px-4 py-2 bg-background/50 backdrop-blur-sm text-foreground rounded-lg font-semibold hover:scale-105 hover:bg-primary hover:text-primary-foreground transition-all text-sm"
            >
              Locations
            </Link>
            <Link
              to="/window-cleaning"
              className="px-4 py-2 bg-background/50 backdrop-blur-sm text-foreground rounded-lg font-semibold hover:scale-105 hover:bg-primary hover:text-primary-foreground transition-all text-sm"
            >
              Window Cleaning
            </Link>
            <Link
              to="/pressure-washing"
              className="px-4 py-2 bg-background/50 backdrop-blur-sm text-foreground rounded-lg font-semibold hover:scale-105 hover:bg-primary hover:text-primary-foreground transition-all text-sm"
            >
              Pressure Washing
            </Link>
            <Link
              to="/solar-panel-cleaning"
              className="px-4 py-2 bg-background/50 backdrop-blur-sm text-foreground rounded-lg font-semibold hover:scale-105 hover:bg-primary hover:text-primary-foreground transition-all text-sm"
            >
              Solar Panel Cleaning
            </Link>
            <Link
              to="/services"
              className="px-4 py-2 bg-background/50 backdrop-blur-sm text-foreground rounded-lg font-semibold hover:scale-105 hover:bg-primary hover:text-primary-foreground transition-all text-sm"
            >
              Other Services
            </Link>
            <Link
              to="/construction-cleanup"
              className="px-4 py-2 bg-background/50 backdrop-blur-sm text-foreground rounded-lg font-semibold hover:scale-105 hover:bg-primary hover:text-primary-foreground transition-all text-sm"
            >
              Post Construction
            </Link>
            <Link
              to="/roof-cleaning"
              className="px-4 py-2 bg-background/50 backdrop-blur-sm text-foreground rounded-lg font-semibold hover:scale-105 hover:bg-primary hover:text-primary-foreground transition-all text-sm"
            >
              Roof Cleaning
            </Link>
          </div>
        </nav>
      </div>
    </header>;
};
export default Header;