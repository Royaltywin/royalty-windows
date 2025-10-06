import customerImage from "@/assets/hero-customer.jpg";
import QuoteWizard from "@/components/QuoteWizard";
const Hero = () => {
  return <section className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left: Value Motto */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-foreground mb-4">
              VALUE<br />
              YOU<br />
              CAN<br />
              <span className="text-gold text-3d">SEE</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold text-slate-800">
              Satisfaction you can feel.
            </p>
          </div>

          {/* Middle: Customer Support Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <img src={customerImage} alt="Customer support representative ready to help with your cleaning needs" className="w-full h-auto rounded-2xl shadow-2xl border-4 border-accent" />
            </div>
          </div>

          {/* Right: Quote Form */}
          <div className="flex justify-center md:justify-end">
            <QuoteWizard />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;