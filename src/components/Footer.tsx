const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-black mb-4 text-primary">ROYALTY CLEANING</h3>
            <p className="text-secondary-foreground/80">
              Your trusted cleaning services provider across Southern California
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>Window Cleaning</li>
              <li>Pressure Washing</li>
              <li>Roof Washing</li>
              <li>House Washing</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>Phone: (951) 999-4546</li>
              <li>Email: info@royaltycleaning.com</li>
              <li>Southern California</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-secondary-foreground/60">
          <p>&copy; 2025 Royalty Cleaning Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
