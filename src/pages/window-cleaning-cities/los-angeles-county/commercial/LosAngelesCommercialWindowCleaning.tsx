import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";

const LosAngelesCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Los Angeles"
      citySlug="los-angeles"
      countySlug="los-angeles"
      nearbyCities={[
        { name: "Santa Monica", slug: "santa-monica" },
        { name: "Beverly Hills", slug: "beverly-hills" },
        { name: "West Hollywood", slug: "west-hollywood" },
        { name: "Glendale", slug: "glendale" },
      ]}
    />
  );
};

export default LosAngelesCommercialWindowCleaning;
