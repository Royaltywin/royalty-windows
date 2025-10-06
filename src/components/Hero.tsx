import heroImage from "@/assets/hero-customer.jpg";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Bold Text */}
        <div className="space-y-6">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none text-foreground tracking-tight">
            VALUE<br />
            YOU<br />
            CAN<br />
            SEE
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            Satisfaction you can feel.
          </p>
        </div>
        
        {/* Right Side - Image with Frame */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden border-8 border-primary shadow-glow">
            <img 
              src={heroImage} 
              alt="Satisfied customer smiling" 
              className="w-full aspect-square object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
