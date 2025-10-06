import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BeforeAfterImage {
  before: string;
  after: string;
  title: string;
}

interface BeforeAfterSliderProps {
  images: BeforeAfterImage[];
}

const BeforeAfterSlider = ({ images }: BeforeAfterSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setSliderPosition(50);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setSliderPosition(50);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  const currentImage = images[currentIndex];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-accent shadow-accent-glow">
        {/* Before Image */}
        <div className="absolute inset-0">
          <img
            src={currentImage.before}
            alt={`${currentImage.title} - Before`}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-4 py-2 rounded-lg font-bold">
            BEFORE
          </div>
        </div>

        {/* After Image */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={currentImage.after}
            alt={`${currentImage.title} - After`}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-bold">
            AFTER
          </div>
        </div>

        {/* Slider */}
        <div
          className="absolute inset-y-0 w-1 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <ChevronLeft className="w-4 h-4 absolute -left-1" />
            <ChevronRight className="w-4 h-4 absolute -right-1" />
          </div>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        />
      </div>

      {/* Image Title & Navigation */}
      <div className="flex items-center justify-between mt-6">
        <Button
          onClick={prevImage}
          variant="outline"
          size="icon"
          className="rounded-full"
          disabled={images.length <= 1}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <div className="text-center">
          <h3 className="text-xl font-bold text-foreground">{currentImage.title}</h3>
          <p className="text-sm text-muted-foreground">
            {currentIndex + 1} of {images.length}
          </p>
        </div>

        <Button
          onClick={nextImage}
          variant="outline"
          size="icon"
          className="rounded-full"
          disabled={images.length <= 1}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
