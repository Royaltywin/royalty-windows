import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";

const LongBeachCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Long Beach"
      citySlug="long-beach"
      countySlug="los-angeles"
      nearbyCities={[
        { name: "Signal Hill", slug: "signal-hill" },
        { name: "Lakewood", slug: "lakewood" },
        { name: "Carson", slug: "carson" },
      ]}
    />
  );
};

export default LongBeachCommercialWindowCleaning;
