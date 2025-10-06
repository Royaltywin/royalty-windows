import customerImage from "@/assets/hero-customer.jpg";
import QuoteWizard from "@/components/QuoteWizard";
const Hero = () => {
  return <section className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Left: Value Motto */}
          <div className="flex items-center justify-center h-full">
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
          </div>

          {/* Middle: Customer Support Image */}
          <div className="flex justify-center">
            <div className="relative w-full">
              <img src={customerImage} alt="Customer support representative ready to help with your cleaning needs" className="w-full h-auto rounded-2xl shadow-2xl border-8 border-primary" />
            </div>
          </div>

          {/* Right: Quote Form */}
          <div className="flex justify-center">
            <QuoteWizard />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;