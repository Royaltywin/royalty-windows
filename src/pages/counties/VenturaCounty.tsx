import CountyHubTemplate from "@/components/CountyHubTemplate";
import { counties } from "@/data/locations";

const VenturaCounty = () => {
  return (
    <CountyHubTemplate
      countyName="Ventura County"
      countySlug="ventura"
      cities={counties.ventura.cities}
      intro="Ventura County stretches from Pacific coastlines to inland valleys, featuring beach towns, agricultural areas, and suburban communities. Royalty Cleaning Services provides reliable window cleaning, pressure washing, solar panel cleaning, roof cleaning, gutter cleaning, post-construction cleanup, and graffiti removal throughout Ventura County, from Oxnard to Thousand Oaks, Ventura to Ojai."
      popularServices={[
        { name: "Window Cleaning", slug: "window-cleaning", city: "Thousand Oaks", citySlug: "thousand-oaks" },
        { name: "Pressure Washing Thousand Oaks", slug: "pressure-washing", city: "Thousand Oaks", citySlug: "thousand-oaks" },
        { name: "Pressure Washing Simi Valley", slug: "pressure-washing", city: "Simi Valley", citySlug: "simi-valley" },
        { name: "Pressure Washing Ventura", slug: "pressure-washing", city: "Ventura", citySlug: "ventura" },
        { name: "Pressure Washing Oxnard", slug: "pressure-washing", city: "Oxnard", citySlug: "oxnard" },
        { name: "Pressure Washing Camarillo", slug: "pressure-washing", city: "Camarillo", citySlug: "camarillo" },
        { name: "Pressure Washing Moorpark", slug: "pressure-washing", city: "Moorpark", citySlug: "moorpark" },
        { name: "Pressure Washing Ojai", slug: "pressure-washing", city: "Ojai", citySlug: "ojai" },
        { name: "Solar Panel Cleaning", slug: "solar-panel-cleaning", city: "Simi Valley", citySlug: "simi-valley" },
        { name: "Roof Cleaning", slug: "roof-cleaning", city: "Camarillo", citySlug: "camarillo" },
      ]}
      faqs={[
        {
          question: "Do you service coastal and inland Ventura County?",
          answer: "Yes! We serve all Ventura County areas including coastal cities like Ventura and Oxnard, as well as inland communities like Thousand Oaks, Simi Valley, and Ojai."
        },
        {
          question: "How does agricultural dust affect properties?",
          answer: "Ventura County's agricultural areas can create more dust and pollen. We recommend window cleaning every 2-3 months and solar panel cleaning quarterly to maintain clarity and efficiency."
        },
        {
          question: "Can you handle wine country and agricultural properties?",
          answer: "Absolutely! We provide specialized cleaning for wineries, agricultural facilities, and rural properties including large window installations and solar panel arrays."
        }
      ]}
    />
  );
};

export default VenturaCounty;
