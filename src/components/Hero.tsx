import QuoteWizard from "@/components/QuoteWizard";
import HeroImageCarousel from "@/components/HeroImageCarousel";
const Hero = () => {
  return <section className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Left: Value Motto */}
          <div className="md:col-span-2 flex items-center justify-center h-full">
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

          {/* Middle: Service Showcase Carousel - Wider */}
          <div className="md:col-span-6 flex justify-center">
            <HeroImageCarousel />
          </div>

          {/* Right: Quote Form */}
          <div className="md:col-span-4 flex justify-center">
            <QuoteWizard />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;