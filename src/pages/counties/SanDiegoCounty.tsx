import CountyHubTemplate from "@/components/CountyHubTemplate";
import { counties } from "@/data/locations";

const SanDiegoCounty = () => {
  return (
    <CountyHubTemplate
      countyName="San Diego County"
      countySlug="san-diego"
      cities={counties.sanDiego.cities}
      intro="San Diego County combines coastal beauty with inland communities, from La Jolla's oceanfront estates to Escondido's suburban neighborhoods. Royalty Cleaning Services provides professional window cleaning, pressure washing, solar panel cleaning, roof cleaning, gutter cleaning, post-construction cleanup, and graffiti removal throughout America's Finest City and surrounding areas."
      popularServices={[
        { name: "Window Cleaning", slug: "window-cleaning", city: "San Diego", citySlug: "san-diego" },
        { name: "Pressure Washing", slug: "pressure-washing", city: "Carlsbad", citySlug: "carlsbad" },
        { name: "Solar Panel Cleaning", slug: "solar-panel-cleaning", city: "Encinitas", citySlug: "encinitas" },
        { name: "Roof Cleaning", slug: "roof-cleaning", city: "Oceanside", citySlug: "oceanside" },
        { name: "Gutter Cleaning", slug: "gutter-cleaning", city: "Chula Vista", citySlug: "chula-vista" },
        { name: "Post-Construction Cleanup", slug: "construction-cleanup", city: "Escondido", citySlug: "escondido" },
      ]}
      faqs={[
        {
          question: "Do you serve all San Diego County neighborhoods?",
          answer: "Yes! We serve all areas from coastal communities like Del Mar and Coronado to inland cities like Escondido and El Cajon, plus everything in between."
        },
        {
          question: "How does coastal climate affect cleaning schedules?",
          answer: "Coastal properties face salt spray and marine layer moisture. We recommend window cleaning every 2-3 months and regular pressure washing to prevent salt buildup and mildew."
        },
        {
          question: "Can you clean Spanish tile roofs?",
          answer: "Absolutely! We specialize in soft-wash roof cleaning safe for Spanish tile, which is common in San Diego. Our gentle process removes algae and buildup without damage."
        }
      ]}
    />
  );
};

export default SanDiegoCounty;
