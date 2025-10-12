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
        { name: "Pressure Washing Los Angeles", slug: "pressure-washing", city: "Los Angeles", citySlug: "los-angeles" },
        { name: "Pressure Washing Long Beach", slug: "pressure-washing", city: "Long Beach", citySlug: "long-beach" },
        { name: "Pressure Washing Pasadena", slug: "pressure-washing", city: "Pasadena", citySlug: "pasadena" },
        { name: "Pressure Washing Santa Monica", slug: "pressure-washing", city: "Santa Monica", citySlug: "santa-monica" },
        { name: "Pressure Washing Glendale", slug: "pressure-washing", city: "Glendale", citySlug: "glendale" },
        { name: "Pressure Washing Burbank", slug: "pressure-washing", city: "Burbank", citySlug: "burbank" },
        { name: "Pressure Washing Torrance", slug: "pressure-washing", city: "Torrance", citySlug: "torrance" },
        { name: "Pressure Washing Pomona", slug: "pressure-washing", city: "Pomona", citySlug: "pomona" },
        { name: "Pressure Washing Santa Clarita", slug: "pressure-washing", city: "Santa Clarita", citySlug: "santa-clarita" },
        { name: "Pressure Washing Downey", slug: "pressure-washing", city: "Downey", citySlug: "downey" },
        { name: "Pressure Washing Inglewood", slug: "pressure-washing", city: "Inglewood", citySlug: "inglewood" },
        { name: "Pressure Washing Carson", slug: "pressure-washing", city: "Carson", citySlug: "carson" },
        { name: "Pressure Washing El Monte", slug: "pressure-washing", city: "El Monte", citySlug: "el-monte" },
        { name: "Pressure Washing Norwalk", slug: "pressure-washing", city: "Norwalk", citySlug: "norwalk" },
        { name: "Pressure Washing West Covina", slug: "pressure-washing", city: "West Covina", citySlug: "west-covina" },
        { name: "Pressure Washing Whittier", slug: "pressure-washing", city: "Whittier", citySlug: "whittier" },
        { name: "Pressure Washing Alhambra", slug: "pressure-washing", city: "Alhambra", citySlug: "alhambra" },
        { name: "Pressure Washing Beverly Hills", slug: "pressure-washing", city: "Beverly Hills", citySlug: "beverly-hills" },
        { name: "Pressure Washing Redondo Beach", slug: "pressure-washing", city: "Redondo Beach", citySlug: "redondo-beach" },
        { name: "Pressure Washing Malibu", slug: "pressure-washing", city: "Malibu", citySlug: "malibu" },
        { name: "Solar Panel Cleaning", slug: "solar-panel-cleaning", city: "Pasadena", citySlug: "pasadena" },
        { name: "Graffiti Removal", slug: "graffiti-removal", city: "Santa Monica", citySlug: "santa-monica" },
        { name: "Roof Cleaning", slug: "roof-cleaning", city: "Burbank", citySlug: "burbank" },
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
