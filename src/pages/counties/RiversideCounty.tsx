import CountyHubTemplate from "@/components/CountyHubTemplate";
import { counties } from "@/data/locations";

const RiversideCounty = () => {
  return (
    <CountyHubTemplate
      countyName="Riverside County"
      countySlug="riverside"
      cities={counties.riverside.cities}
      intro="Riverside County spans diverse landscapes from desert communities to valley cities. Whether you're in Temecula wine country, the Coachella Valley, or urban centers like Riverside and Corona, Royalty Cleaning Services delivers professional window cleaning, pressure washing, solar panel cleaning, roof cleaning, gutter cleaning, post-construction cleanup, and graffiti removal tailored to your climate and property needs."
      popularServices={[
        { name: "Window Cleaning", slug: "window-cleaning", city: "Temecula", citySlug: "temecula" },
        { name: "Pressure Washing Temecula", slug: "pressure-washing", city: "Temecula", citySlug: "temecula" },
        { name: "Pressure Washing Murrieta", slug: "pressure-washing", city: "Murrieta", citySlug: "murrieta" },
        { name: "Pressure Washing Riverside", slug: "pressure-washing", city: "Riverside", citySlug: "riverside" },
        { name: "Pressure Washing Corona", slug: "pressure-washing", city: "Corona", citySlug: "corona" },
        { name: "Pressure Washing Palm Desert", slug: "pressure-washing", city: "Palm Desert", citySlug: "palm-desert" },
        { name: "Pressure Washing Moreno Valley", slug: "pressure-washing", city: "Moreno Valley", citySlug: "moreno-valley" },
        { name: "Pressure Washing Palm Springs", slug: "pressure-washing", city: "Palm Springs", citySlug: "palm-springs" },
        { name: "Pressure Washing Menifee", slug: "pressure-washing", city: "Menifee", citySlug: "menifee" },
        { name: "Pressure Washing Indio", slug: "pressure-washing", city: "Indio", citySlug: "indio" },
        { name: "Solar Panel Cleaning", slug: "solar-panel-cleaning", city: "Palm Desert", citySlug: "palm-desert" },
        { name: "Roof Cleaning", slug: "roof-cleaning", city: "Riverside", citySlug: "riverside" },
      ]}
      faqs={[
        {
          question: "Do you service desert communities in Riverside County?",
          answer: "Yes! We serve all Riverside County areas including desert communities like Palm Springs, Palm Desert, Indio, and the entire Coachella Valley."
        },
        {
          question: "How does desert climate affect cleaning needs?",
          answer: "Desert areas accumulate more dust and mineral deposits. We recommend more frequent solar panel cleaning (monthly) and window cleaning (every 2-3 months) to maintain efficiency and clarity."
        },
        {
          question: "Do you serve both residential and commercial properties?",
          answer: "Yes! We handle everything from single-family homes to wineries, resorts, commercial buildings, and HOA communities throughout Riverside County."
        }
      ]}
    />
  );
};

export default RiversideCounty;
