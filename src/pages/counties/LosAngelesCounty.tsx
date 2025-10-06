import CountyHubTemplate from "@/components/CountyHubTemplate";
import { counties } from "@/data/locations";

const LosAngelesCounty = () => {
  return (
    <CountyHubTemplate
      countyName="Los Angeles County"
      countySlug="los-angeles"
      cities={counties.losAngeles.cities}
      intro="Los Angeles County is the most populous county in the nation, featuring everything from beachfront communities to downtown high-rises, historic neighborhoods to modern suburbs. Royalty Cleaning Services provides comprehensive window cleaning, pressure washing, solar panel cleaning, roof cleaning, gutter cleaning, post-construction cleanup, and graffiti removal across all LA County communities, from Malibu to Pasadena, Long Beach to Santa Clarita."
      popularServices={[
        { name: "Window Cleaning", slug: "window-cleaning", city: "Los Angeles", citySlug: "los-angeles" },
        { name: "Pressure Washing", slug: "pressure-washing", city: "Long Beach", citySlug: "long-beach" },
        { name: "Solar Panel Cleaning", slug: "solar-panel-cleaning", city: "Pasadena", citySlug: "pasadena" },
        { name: "Graffiti Removal", slug: "graffiti-removal", city: "Santa Monica", citySlug: "santa-monica" },
        { name: "Roof Cleaning", slug: "roof-cleaning", city: "Burbank", citySlug: "burbank" },
        { name: "Post-Construction Cleanup", slug: "construction-cleanup", city: "Glendale", citySlug: "glendale" },
      ]}
      faqs={[
        {
          question: "Do you serve all areas of Los Angeles County?",
          answer: "Yes! From coastal communities like Malibu and Manhattan Beach to valley cities like Burbank and Pasadena, we serve the entire LA County area."
        },
        {
          question: "Can you handle high-rise and commercial buildings?",
          answer: "Absolutely! We have specialized equipment and trained technicians for high-rise window cleaning, commercial pressure washing, and large-scale projects throughout LA County."
        },
        {
          question: "How do you handle graffiti removal in urban areas?",
          answer: "We offer fast-response graffiti removal services using safe, effective methods appropriate for each surface. We can also apply anti-graffiti coatings for long-term protection."
        }
      ]}
    />
  );
};

export default LosAngelesCounty;
