import CountyHubTemplate from "@/components/CountyHubTemplate";
import { counties } from "@/data/locations";

const OrangeCounty = () => {
  return (
    <CountyHubTemplate
      countyName="Orange County"
      countySlug="orange"
      cities={counties.orange.cities}
      intro="Orange County is home to beautiful beach communities, master-planned neighborhoods, and thriving business districts. From coastal properties facing salt air to inland homes and commercial spaces, Royalty Cleaning Services provides expert window cleaning, pressure washing, solar panel cleaning, roof cleaning, gutter cleaning, post-construction cleanup, and graffiti removal throughout the county."
      popularServices={[
        { name: "Window Cleaning", slug: "window-cleaning", city: "Irvine", citySlug: "irvine" },
        { name: "Pressure Washing", slug: "pressure-washing", city: "Newport Beach", citySlug: "newport-beach" },
        { name: "Solar Panel Cleaning", slug: "solar-panel-cleaning", city: "Anaheim", citySlug: "anaheim" },
        { name: "Roof Cleaning", slug: "roof-cleaning", city: "Huntington Beach", citySlug: "huntington-beach" },
        { name: "Gutter Cleaning", slug: "gutter-cleaning", city: "Mission Viejo", citySlug: "mission-viejo" },
        { name: "Graffiti Removal", slug: "graffiti-removal", city: "Santa Ana", citySlug: "santa-ana" },
      ]}
      faqs={[
        {
          question: "Do you serve all cities in Orange County?",
          answer: "Yes! We serve all Orange County communities from coastal areas like Newport Beach and Laguna Beach to inland cities like Irvine, Anaheim, and Yorba Linda."
        },
        {
          question: "How often should coastal properties be cleaned?",
          answer: "Coastal properties face salt air and ocean mist, so we recommend window cleaning every 2-3 months and exterior pressure washing 2-3 times per year to prevent buildup and corrosion."
        },
        {
          question: "Do you offer commercial cleaning services?",
          answer: "Absolutely! We provide commercial window cleaning, pressure washing, and maintenance services for offices, retail spaces, HOAs, and multi-unit properties throughout Orange County."
        }
      ]}
    />
  );
};

export default OrangeCounty;
