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
        { name: "Pressure Washing San Diego", slug: "pressure-washing", city: "San Diego", citySlug: "san-diego" },
        { name: "Pressure Washing Carlsbad", slug: "pressure-washing", city: "Carlsbad", citySlug: "carlsbad" },
        { name: "Pressure Washing Oceanside", slug: "pressure-washing", city: "Oceanside", citySlug: "oceanside" },
        { name: "Pressure Washing Chula Vista", slug: "pressure-washing", city: "Chula Vista", citySlug: "chula-vista" },
        { name: "Pressure Washing Escondido", slug: "pressure-washing", city: "Escondido", citySlug: "escondido" },
        { name: "Pressure Washing Encinitas", slug: "pressure-washing", city: "Encinitas", citySlug: "encinitas" },
        { name: "Pressure Washing El Cajon", slug: "pressure-washing", city: "El Cajon", citySlug: "el-cajon" },
        { name: "Pressure Washing La Mesa", slug: "pressure-washing", city: "La Mesa", citySlug: "la-mesa" },
        { name: "Pressure Washing Vista", slug: "pressure-washing", city: "Vista", citySlug: "vista" },
        { name: "Solar Panel Cleaning", slug: "solar-panel-cleaning", city: "Encinitas", citySlug: "encinitas" },
        { name: "Roof Cleaning", slug: "roof-cleaning", city: "Oceanside", citySlug: "oceanside" },
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
