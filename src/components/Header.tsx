import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="bg-gradient-primary py-4 px-4 md:px-8">
        <div className="container mx-auto">
          <h1 className="text-2xl md:text-3xl font-black text-primary-foreground tracking-tight">
            ROYALTY CLEANING SERVICES
          </h1>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="bg-background border-b border-border py-4 px-4 md:px-8">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">R</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Window Cleaning</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Pressure Washing</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Roof Washing</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
          </div>
          
          <div className="flex items-center gap-4">
            <Button className="hidden md:inline-flex font-bold text-base px-8">
              Estimate Form
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
