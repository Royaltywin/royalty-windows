import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

interface PressureWashingGalleryImage {
  before: string;
  after: string;
  title: string;
  service: string;
  location?: string;
}

interface PressureWashingGalleryProps {
  images: PressureWashingGalleryImage[];
  filterEnabled?: boolean;
  ctaText?: string;
}

const PressureWashingGallery = ({ 
  images, 
  filterEnabled = false, 
  ctaText = "Get This Result" 
}: PressureWashingGalleryProps) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<PressureWashingGalleryImage | null>(null);

  const filters = [
    { key: "all", label: "All" },
    { key: "concrete", label: "Concrete" },
    { key: "roof", label: "Roof" },
    { key: "deck", label: "Deck" },
    { key: "building", label: "Building" },
    { key: "driveway", label: "Driveway" }
  ];

  const filteredImages = selectedFilter === "all" 
    ? images 
    : images.filter(img => img.service === selectedFilter);

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      {filterEnabled && (
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map(filter => (
            <Button
              key={filter.key}
              variant={selectedFilter === filter.key ? "accent" : "outline"}
              onClick={() => setSelectedFilter(filter.key)}
              className="rounded-full"
            >
              {filter.label}
            </Button>
          ))}
        </div>
      )}

      {/* Gallery Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl border-2 border-accent/30 hover:border-accent transition-all hover:shadow-accent-glow cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={image.before}
                alt={`${image.title} - Before and After by Royalty Pressure Washing`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
              <h4 className="text-white font-bold text-xl mb-2">{image.title}</h4>
              {image.location && (
                <p className="text-white/80 text-sm mb-3">{image.location}</p>
              )}
              <Button variant="accent" size="sm" className="w-fit">
                View Transformation
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-background rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background text-foreground rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="p-8">
              <h3 className="text-3xl font-black mb-2">{selectedImage.title}</h3>
              {selectedImage.location && (
                <p className="text-muted-foreground mb-6">{selectedImage.location}</p>
              )}
              
              <BeforeAfterSlider
                images={[{
                  before: selectedImage.before,
                  after: selectedImage.after,
                  title: selectedImage.title
                }]}
              />

              <div className="mt-6 flex justify-center">
                <Button asChild variant="accent" size="lg">
                  <a href="#quote-form">{ctaText}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PressureWashingGallery;
