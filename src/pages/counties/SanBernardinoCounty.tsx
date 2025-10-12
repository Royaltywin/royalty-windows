import CountyHubTemplate from "@/components/CountyHubTemplate";
import { counties } from "@/data/locations";

const SanBernardinoCounty = () => {
  return (
    <CountyHubTemplate
      countyName="San Bernardino County"
      countySlug="san-bernardino"
      cities={counties.sanBernardino.cities}
      intro="San Bernardino County is California's largest county by area, encompassing mountain communities, desert regions, and growing urban centers. From Big Bear Lake to Ontario, Victorville to Redlands, Royalty Cleaning Services delivers expert window cleaning, pressure washing, solar panel cleaning, roof cleaning, gutter cleaning, post-construction cleanup, and graffiti removal suited to your elevation and climate."
      popularServices={[
        { name: "Window Cleaning", slug: "window-cleaning", city: "Rancho Cucamonga", citySlug: "rancho-cucamonga" },
        { name: "Pressure Washing Rancho Cucamonga", slug: "pressure-washing", city: "Rancho Cucamonga", citySlug: "rancho-cucamonga" },
        { name: "Pressure Washing Ontario", slug: "pressure-washing", city: "Ontario", citySlug: "ontario" },
        { name: "Pressure Washing Fontana", slug: "pressure-washing", city: "Fontana", citySlug: "fontana" },
        { name: "Pressure Washing Victorville", slug: "pressure-washing", city: "Victorville", citySlug: "victorville" },
        { name: "Pressure Washing Chino", slug: "pressure-washing", city: "Chino", citySlug: "chino" },
        { name: "Pressure Washing Chino Hills", slug: "pressure-washing", city: "Chino Hills", citySlug: "chino-hills" },
        { name: "Pressure Washing Redlands", slug: "pressure-washing", city: "Redlands", citySlug: "redlands" },
        { name: "Pressure Washing Hesperia", slug: "pressure-washing", city: "Hesperia", citySlug: "hesperia" },
        { name: "Pressure Washing Upland", slug: "pressure-washing", city: "Upland", citySlug: "upland" },
        { name: "Solar Panel Cleaning", slug: "solar-panel-cleaning", city: "Victorville", citySlug: "victorville" },
        { name: "Roof Cleaning", slug: "roof-cleaning", city: "Redlands", citySlug: "redlands" },
      ]}
      faqs={[
        {
          question: "Do you service mountain communities like Big Bear?",
          answer: "Yes! We serve mountain communities including Big Bear Lake, Lake Arrowhead, Running Springs, and Crestline. We're experienced with seasonal cleaning needs and weather conditions at higher elevations."
        },
        {
          question: "How often should desert properties be cleaned?",
          answer: "Desert areas like Victorville and Hesperia accumulate dust quickly. We recommend window cleaning every 2-3 months and solar panel cleaning monthly for optimal performance."
        },
        {
          question: "Can you handle commercial and industrial properties?",
          answer: "Yes! We provide commercial cleaning services for warehouses, retail centers, offices, and industrial facilities throughout the Inland Empire."
        }
      ]}
    />
  );
};

export default SanBernardinoCounty;
