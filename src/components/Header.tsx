import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-8 flex h-24 items-center justify-between">
        <Logo />
        
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#services" className="text-sm font-semibold hover:text-primary transition-colors">
            Services
          </a>
          <a href="#locations" className="text-sm font-semibold hover:text-primary transition-colors">
            Locations
          </a>
          <a href="#about" className="text-sm font-semibold hover:text-primary transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm font-semibold hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
        
        <div className="flex items-center gap-4">
          <a href="tel:951-999-4546" className="hidden md:block text-sm font-bold text-primary hover:text-accent transition-colors">
            (951) 999-4546
          </a>
          <Button variant="accent" size="lg" className="hidden md:flex">
            Get Free Quote
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
