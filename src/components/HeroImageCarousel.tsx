import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import commercialBuilding1 from "@/assets/carousel/commercial-building-1.jpg";
import windowCleaningWorkers from "@/assets/carousel/window-cleaning-workers.jpg";
import solarPanelsPalmTrees from "@/assets/carousel/solar-panels-palm-trees.jpg";
import solarCleaningMountains from "@/assets/carousel/solar-cleaning-mountains.jpg";
import commercialWindowCleaning from "@/assets/carousel/commercial-window-cleaning.jpg";
import houseWashing from "@/assets/carousel/house-washing.jpg";
import solarPanelsCleaningAction from "@/assets/carousel/solar-panels-cleaning-action.jpg";
import windowCleaningBA1 from "@/assets/carousel/window-cleaning-before-after-1.jpg";
import windowCleaningBA2 from "@/assets/carousel/window-cleaning-before-after-2.jpg";
import windowCleaningBA3 from "@/assets/carousel/window-cleaning-before-after-3.jpg";
import floorCleaningAction from "@/assets/carousel/floor-cleaning-action.jpg";
import roofCleaningBA from "@/assets/carousel/roof-cleaning-before-after.jpg";
import concreteCleaningBA from "@/assets/carousel/concrete-cleaning-before-after.jpg";
import roofMossCleaning from "@/assets/carousel/roof-moss-cleaning.jpg";
import luxuryResidential from "@/assets/carousel/luxury-residential-property.jpg";
import residentialWindowTeam from "@/assets/carousel/residential-window-team.jpg";

const carouselImages = [
  { src: commercialBuilding1, alt: "Professional commercial building exterior cleaning services" },
  { src: windowCleaningWorkers, alt: "Expert window cleaning team at work on commercial buildings" },
  { src: solarPanelsPalmTrees, alt: "Solar panel cleaning and maintenance with palm trees" },
  { src: solarCleaningMountains, alt: "Professional solar panel cleaning with mountain views" },
  { src: commercialWindowCleaning, alt: "High-rise commercial window cleaning experts" },
  { src: houseWashing, alt: "Before and after residential house washing services" },
  { src: solarPanelsCleaningAction, alt: "Professional solar panel cleaning service in action" },
  { src: windowCleaningBA1, alt: "Residential window cleaning transformation before and after" },
  { src: windowCleaningBA2, alt: "Crystal clear window cleaning results before and after" },
  { src: windowCleaningBA3, alt: "Professional window cleaning dramatic transformation" },
  { src: floorCleaningAction, alt: "Professional floor cleaning and restoration service" },
  { src: roofCleaningBA, alt: "Roof cleaning before and after transformation" },
  { src: concreteCleaningBA, alt: "Concrete patio cleaning before and after results" },
  { src: roofMossCleaning, alt: "Professional roof moss removal and cleaning service" },
  { src: luxuryResidential, alt: "Luxury residential property cleaning and maintenance" },
  { src: residentialWindowTeam, alt: "Professional residential window cleaning team at work" },
];

const HeroImageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [emblaApi]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-2xl shadow-2xl border-8 border-primary h-[600px]" ref={emblaRef}>
        <div className="flex h-full">
          {carouselImages.map((image, index) => (
            <div className="flex-[0_0_100%] min-w-0 h-full" key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-all duration-300 z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-all duration-300 z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-primary w-8"
                : "bg-white/60 hover:bg-white/90"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroImageCarousel;
