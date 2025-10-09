import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BeforeAfterSlider from "./BeforeAfterSlider";

interface BeforeAfterImage {
  before: string;
  after: string;
  title: string;
  category: "windows" | "graffiti" | "pressure" | "solar";
}

interface BeforeAfterGalleryProps {
  images: BeforeAfterImage[];
}

const BeforeAfterGallery = ({ images }: BeforeAfterGalleryProps) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { value: "all", label: "All Services" },
    { value: "windows", label: "Windows" },
    { value: "graffiti", label: "Graffiti" },
    { value: "pressure", label: "Pressure Washing" },
    { value: "solar", label: "Solar Panels" },
  ];

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <section className="py-16 px-4 md:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-foreground">
          Real Results You Can See
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          See the dramatic difference our professional cleaning services make. Every project showcases our commitment to excellence.
        </p>

        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-5 mb-8">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.value}
                value={cat.value}
                className="text-xs md:text-sm font-semibold"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat.value} value={cat.value}>
              {filteredImages.length > 0 ? (
                <BeforeAfterSlider images={filteredImages} />
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No images available for this category yet. Check back soon!
                  </p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
