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
        { name: "Pressure Washing Irvine", slug: "pressure-washing", city: "Irvine", citySlug: "irvine" },
        { name: "Pressure Washing Newport Beach", slug: "pressure-washing", city: "Newport Beach", citySlug: "newport-beach" },
        { name: "Pressure Washing Anaheim", slug: "pressure-washing", city: "Anaheim", citySlug: "anaheim" },
        { name: "Pressure Washing Huntington Beach", slug: "pressure-washing", city: "Huntington Beach", citySlug: "huntington-beach" },
        { name: "Pressure Washing Santa Ana", slug: "pressure-washing", city: "Santa Ana", citySlug: "santa-ana" },
        { name: "Pressure Washing Costa Mesa", slug: "pressure-washing", city: "Costa Mesa", citySlug: "costa-mesa" },
        { name: "Pressure Washing Fullerton", slug: "pressure-washing", city: "Fullerton", citySlug: "fullerton" },
        { name: "Pressure Washing Orange", slug: "pressure-washing", city: "Orange", citySlug: "orange" },
        { name: "Pressure Washing Mission Viejo", slug: "pressure-washing", city: "Mission Viejo", citySlug: "mission-viejo" },
        { name: "Pressure Washing Laguna Beach", slug: "pressure-washing", city: "Laguna Beach", citySlug: "laguna-beach" },
        { name: "Pressure Washing Tustin", slug: "pressure-washing", city: "Tustin", citySlug: "tustin" },
        { name: "Solar Panel Cleaning", slug: "solar-panel-cleaning", city: "Anaheim", citySlug: "anaheim" },
        { name: "Roof Cleaning", slug: "roof-cleaning", city: "Huntington Beach", citySlug: "huntington-beach" },
        { name: "Gutter Cleaning", slug: "gutter-cleaning", city: "Mission Viejo", citySlug: "mission-viejo" },
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
